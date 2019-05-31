import deUpload from '@/components/de-upload/de-upload.vue';
import dutyDialog from '@/components/duty-dialog/duty-dialog.vue';

export default {
  data() {
    return {
      appForm: { // 表单字段内容
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        itemList: [{
          a: '',
          b: ''
        }]
      },
      fileList: [], // 已上传的附件列表
      showSelectDuty: false, // 树形级联多选框
      treeDutyList: [], // 树形级联多选框
      treeSelectList: [], // 树形级联多选框
      formRules: {}, // 表单校验规则
      uploadParam: {} // 上传时携带参数 赋值时使用 this.uploadParam = Object.assign({}, this.uploadParam, param);
    };
  },
  created() {
    let ths = this;

    ths._initFormRules();
  },
  methods: {
    submitForm(formName) { // 提交表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) { // 重置表单
      this.$refs[formName].resetFields();
    },
    _initFormRules() { // 初始化校验规则
      let ths = this;

      ths.formRules = {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        a: [
          { required: true, message: '请填写a', trigger: 'blur' }
        ],
        b: [
          { required: true, message: '请填写b', trigger: 'blur' }
        ]
      }
    },
    uploadFinishFn (response) { // 上传成功
      console.log(response);
    },
    uploadErrorFn (response) { // 上传失败
      console.log(response);
    },
    openDialogFn () { // 树形级联多选框
      this.showSelectDuty = true;
      console.log('openDialogFn');
    },
    dialogConfirm (list) { // 树形级联多选框
      console.log(list);
    },
    dialogCancel () { // 树形级联多选框
      console.log('dialogCancel');
      this.showSelectDuty = false;
    }
  },
  components: {
    deUpload,
    dutyDialog
  }
}
