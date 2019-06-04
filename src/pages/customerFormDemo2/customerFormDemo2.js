import validationOptions from './validationOptions.js'
import fieldTypeList from './fieldTypeList.js'
import {isFunction} from '@/common/js/util.js'
import customRule from './customRule.js'

import renderForm from './renderForm/renderForm.vue';

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
        layout: '整行',
        params: {
          'defaultValue': '',
          'minLength': '',
          'maxLength': ''
        }
      },
      formRules: {}, // 表单校验规则,
      renderFormData: {},
      showAddField: true,
      selectTypeObj: fieldTypeList.typeList[0] || {},
      fieldTypeList: fieldTypeList.typeList,
      validationOptions: validationOptions.options, // 表单校验规则列表
      renderList: [
        {
          'displayValue': '单行文本',
          'description': '单行文本单行文本单行文本',
          'type': 'singleRowText',
          'layout': '半行',
          'params': {
            'defaultValue': '默认值',
            'minLength': '',
            'maxLength': 5,
            'validation': [{
              'name': 'required',
              'label': '必填',
              'rule': '^.+$',
              'prompt': '该字段不能为空'
            },
            {
              'name': 'chinese',
              'label': '中文',
              'rule': '^[\\u4e00-\\u9fa5]{0,}$',
              'prompt': '请填写中文'
            }]
          }
        },
        {
          'displayValue': '单行文本',
          'description': '单行文本单行文本单行文本',
          'type': 'singleRowText',
          'layout': '半行',
          'params': {
            'defaultValue': '默认值',
            'minLength': 1,
            'maxLength': 1,
            'validation': [{
              'name': 'required',
              'label': '必填',
              'rule': '^.+$',
              'prompt': '该字段不能为空'
            },
            {
              'name': 'chinese',
              'label': '中文',
              'rule': '^[\\u4e00-\\u9fa5]{0,}$',
              'prompt': '请填写中文'
            }]
          }
        },
        {
          'displayValue': '多行文本',
          'description': '多行文本多行文本',
          'type': 'multiRowText',
          'layout': '整行',
          'params': {
            'isRootInsert': false,
            'elm': {},
            'validation': [{
              'name': 'required',
              'label': '必填',
              'rule': '^.+$',
              'prompt': '该字段不能为空'
            },
            {
              'name': 'chinese',
              'label': '中文',
              'rule': '^[\\u4e00-\\u9fa5]{0,}$',
              'prompt': '请填写中文'
            }]
          }
        },
        {
          'displayValue': '多选',
          'description': '多选多选多选',
          'type': 'multiSel',
          'validation': 'none',
          'layout': '整行',
          'params': {
            'checkBoxOptions': [{
              'isDefault': true,
              'label': 'a',
              'value': 'a'
            }, {
              'isDefault': false,
              'label': 'b',
              'value': 'b'
            }, {
              'isDefault': true,
              'label': 'c',
              'value': 'c'
            }]
          }
        },
        {
          'displayValue': '单选',
          'description': '单选单选单选',
          'type': 'singleSel',
          'validation': 'none',
          'layout': '整行',
          'params': {
            'radioOptions': [{
              'isDefault': true,
              'label': 'a',
              'value': 'a'
            }, {
              'isDefault': false,
              'label': 'b',
              'value': 'b'
            }]
          }
        },
        {
          'displayValue': '下拉',
          'description': '下拉下拉下拉',
          'type': 'listSel',
          'validation': 'none',
          'layout': '整行',
          'params': {
            'listSelOptions': [{
              'isDefault': false,
              'label': 'a',
              'value': 'a'
            }, {
              'isDefault': false,
              'label': 'b',
              'value': 'b'
            }]
          }
        },
        {
          'displayValue': '级联选择',
          'description': '级联选择级联选择级联选择',
          'type': 'cascader',
          'validation': 'none',
          'layout': '整行',
          'params': {
            'cascaderOptions': [{
              'value': '1',
              'children': [{
                'value': '11',
                'children': [{
                  'value': '111a'
                }, {
                  'value': '111b'
                }]
              }]
            }]
          }
        }
      ]
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
    addCascaderOptionsFn (currentOption, parentLevel) {
      if (parentLevel === 1 || parentLevel === 2) {
        currentOption.children.push(fieldTypeList.paramDefaultVal['cascaderOptions'](parentLevel));
      } else {
        currentOption.push(fieldTypeList.paramDefaultVal['cascaderOptions'](parentLevel));
      }
    },
    removeCascaderOptionsFn (parentOption, currentLevel, currentIndex) {
      if (currentLevel === 1) {
        parentOption.splice(currentIndex, 1);
      } else {
        parentOption.children.splice(currentIndex, 1);
      }
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
          console.log(JSON.stringify(ths.appForm));
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
          { validator: customRule.checkBoxOptions, trigger: 'blur' }
        ],
        radioOptions: [
          { required: true, message: '请输入选项内容', trigger: 'blur' },
          { validator: customRule.checkRadioOptions, trigger: 'blur' }
        ],
        listSelOptions: [
          { required: true, message: '请输入选项内容', trigger: 'blur' },
          { validator: customRule.checklistSelOptions, trigger: 'blur' }
        ]
      }
    },
    _initTableColumn() {
      this.columnList = [
        {
          prop: 'displayValue',
          label: '字段名',
          width: '130'
        }, {
          prop: 'type',
          label: '字段类型',
          width: '130'
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
  },
  components: {
    renderForm
  }
}
