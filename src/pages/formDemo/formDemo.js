export default {
  data() {
    return {
      appForm: {
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
      formRules: {}
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
    }
  }
}
