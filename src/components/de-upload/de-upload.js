import VueUploadComponent from 'vue-upload-component';
import { exportAttachment } from '@/api/download.js';
import { IEVersion } from '@/common/js/util.js';

export default {
  data () {
    return {
      isMultiple: true,
      uploadList: []
    };
  },
  props: {
    actionUrl: {
      type: String,
      default: ''
    },
    uploadParam: {
      type: Object,
      default: function () {
        return {};
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    fileList: {
      type: Array,
      default: []
    }
  },
  created () {
    let ieVersion = IEVersion();

    this.isMultiple = ieVersion !== 10;
  },
  methods: {
    uploadFn () {
      this.$refs.upload.active = true;
    },
    inputFilterFn (newFile, oldFile, prevent) {
      if (newFile && oldFile && newFile.active !== oldFile.active) { // 激活前
        newFile.data = this.uploadParam;
      }
    },
    downLoadAttrachment (itemId) {
      let ths = this;

      ths.isPageLoading = true;
      exportAttachment(itemId).then((res) => {
        if (res.ReturnCode === 0) {
          ths.$message.error({
            message: res.Message || '系统错误',
            duration: 5000
          });
        }
        ths.isPageLoading = false;
      }).catch((error) => {
        ths.isPageLoading = false;
        if (error) {
          console.log(error.stack);
        }
      });
    },
    inputFileFn (newFile, oldFile) { // 文件上传组建 添加、更新、移除后回调
      let ths = this;

      ths.isPageLoading = false;
      // if (newFile && !oldFile) {} // Add file
      if (newFile && oldFile) { // Update file
        // if (newFile.active !== oldFile.active) {} // Start upload
        // if (newFile.progress !== oldFile.progress) {} // Upload progress
        if (newFile.error !== oldFile.error) { // Upload error
          // console.log('error', newFile.error, newFile);
          ths.$refs.upload.active = false;
          ths.$emit('upload-error', newFile.response);
        }
        if (newFile.success !== oldFile.success) { // Uploaded successfully
          // console.log('success', newFile.success, newFile);
          let ths = this;
          let response = newFile.response;

          ths.isPageLoading = false;
          if (response && response.ReturnCode === 0) { // 失败
            ths.$message.error({
              dangerouslyUseHTMLString: true,
              message: response.Message || '系统错误,请<a href="/#' + ths.$route.fullPath + '">&nbsp;刷新</a>',
              showClose: true
            });
            ths.$refs.upload.active = false;
          } else if (ths._finishUpload()) { // 全部上传成功
            let result = '';

            ths.uploadList.forEach((item, index) => {
              if (index !== 0) {
                result += ' ' + item.name;
              } else {
                result += item.name;
              }
            });
            ths.uploadList = [];
            ths.$emit('upload-finish', response, result);
          }
        }
      }

      // if (!newFile && oldFile) {} // Remove file
      // if (oldFile.success && oldFile.response.ReturnCode !== 0) {} // Automatically delete files on the server

      // Automatic upload
      // if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
      //   if (!this.$refs.upload.active) {
      //     this.$refs.upload.active = true
      //   }
      // }
    },
    _finishUpload () {
      let result = true;

      this.uploadList.forEach((item, index) => {
        if (!item.success) { // || item.progress !== '100.00'
          result = false;
        }
      });
      return result;
    },
    parsePercentage (val) {
      return parseInt(val, 10);
    },
    removeFileFn (file) {
      let ths = this;
      let tempFile = file;
      let index = ths.fileList.indexOf(file);

      this.$confirm('此操作将永久删除文件，是否继续？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        exportAttachment({itemid: file.id}).then((res) => {
          if (res && res.ReturnCode === 1) {
            ths.$message.success('文件删除成功。');
            ths.fileList.splice(index, 1);
            ths.$emit('remove-file', tempFile.name);
          } else {
            ths.$message.error('文件删除失败。');
          }
        }).catch((error) => {
          if (error) {
            console.log(error.stack);
          }
        });
      }).catch((e) => {
        console.log(e);
      });
    }
  },
  components: {
    'file-upload': VueUploadComponent
  }
};
