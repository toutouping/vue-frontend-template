import validationOptions from './validationOptions.js'
import fieldTypeList from './fieldTypeList.js'
import {isFunction} from '@/common/js/util.js'

export default {
  data() {
    return {
      tableList: [],
      columnList: [],
      page: {
        size: 100,
        total: 0,
        current: 1
      },
      appForm: { // 表单字段内容
        displayValue: '',
        description: '',
        type: fieldTypeList.defaultVal,
        validation: 'none',
        layout: 'wholeLine',
        params: {
          'defaultValue': '',
          'minLength': '',
          'maxLength': ''
        }
      },
      formRules: {}, // 表单校验规则
      showAddField: true,
      selectTypeObj: fieldTypeList.typeList[0] || {},
      fieldTypeList: fieldTypeList.typeList,
      validationOptions: validationOptions.options // 表单校验规则列表
    }
  },
  created() {
    let ths = this;

    ths._initTableColumn();
    ths._initTableList();
    ths._initFormRules();
  },
  methods: {
    addOptionsFn (key) {
      this.appForm.params[key].push(fieldTypeList.paramDefaultVal[key]());
    },
    removeOptionsFn (key, index) {
      this.appForm.params[key].splice(index, 1);
    },
    changTypeFn (current) {
      let ths = this;
      let tempParams = {};

      ths.fieldTypeList.forEach(item => {
        if (item.type === current) {
          ths.selectTypeObj = item;
          item.paramList.forEach(element => {
            if (isFunction(fieldTypeList.paramDefaultVal[element])) {
              tempParams[element] = [fieldTypeList.paramDefaultVal[element]()];
            } else {
              tempParams[element] = fieldTypeList.paramDefaultVal[element]
            }
          });
        }
      });
      ths.appForm = Object.assign(ths.appForm, {params: {...tempParams}});
    },
    cancelAddFieldFn () {
      this.showAddField = false;
    },
    confirmAddFieldFn () {
      let ths = this;

      ths.$refs['addFieldForm'].validate((valid) => {
        if (valid) {
          console.log(ths.appForm);
          ths.tableList.push({...ths.appForm});
          ths.showAddField = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    editRowFn () {

    },
    openAddFieldFn () {
      this.showAddField = true;
    },
    pageSizeChangeFn(size) { // 分页大小改变
      let ths = this;

      ths.page.current = 1;
      ths.page.size = size;
      ths.tableList = [];
      ths._getTableList();
    },
    pageCurrentChangeFn(current) { // 当前页码改变
      let ths = this;

      ths.page.current = current;
      ths.tableList = [];
      ths._getTableList();
    },
    _getTableList() { // 获取表格數據
      console.log('get tableList')
    },
    _initTableList() { // 初始化表格
     this.tableList = [{
        displayValue: 'xxx',
        type: 'xxx',
        defaultValue: 'xxx',
        description: 'xxx',
        validation: 'xxx',
        layout: 'xxx',
        params: 'xxx'
      }]
    },
    _initFormRules() { // 初始化校验规则
      let ths = this;
      let checkBoxOptions = (rule, options, callback) => {
        if (options && options.length === 0) {
          callback(new Error('请输入选项内容'));
        } else {
          let isEmptyLabel = false;
          let labelList = options.map(function (item) {
              isEmptyLabel = isEmptyLabel || item['label'] === '';
              return item['label'];
            });
          let valueList = options.map(function (item) {
              return item['value'];
            });
          if (isEmptyLabel) {
            callback(new Error('选项文本不能为空'));
          } else if(new Set(labelList).size !== labelList.length) {
            callback(new Error('选项文本不能重复'));
          } else if(new Set(valueList).size !== valueList.length) {
            callback(new Error('选项值不能重复'));
          } else {
            callback();
          }
        }
      };

      ths.formRules = {
        displayValue: [
          { required: true, message: '请输入字段名称', trigger: 'blur' },
          { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入字段描述', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择字段类型', trigger: 'blur' }
        ],
        checkBoxOptions: [
          { required: true, message: '请输入选项内容', trigger: 'blur' },
          { validator: checkBoxOptions, trigger: 'blur' }
        ]
      }
    },
    _initTableColumn() {
      this.columnList = [
        {
          prop: 'displayValue',
          label: '字段名',
          width: '150'
        }, {
          prop: 'type',
          label: '字段类型',
          width: '100'
        }, {
          prop: 'defaultValue',
          label: '默认值',
          showTooltip: true,
          width: '100'
        }, {
          prop: 'description',
          label: '字段描述',
          showTooltip: true,
          width: ''
        }, {
          prop: 'validation',
          label: '字段校验方式',
          width: '150'
        }, {
          prop: 'layout',
          label: '布局要求',
          width: '150'
        }, {
          prop: 'params',
          label: '字段属性',
          showTooltip: true,
          width: '150'
        }
      ]
    }
  }
}
