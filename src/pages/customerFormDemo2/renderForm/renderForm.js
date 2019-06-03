import genFormItem from './genFormItem.js'

export default {
  data() {
    return {
      formList: [],
      renderForm: { // 表单字段内容
        name: ''
      },
      formRules: {}, // 表单校验规则
    }
  },
  created () {
    this._initFormList();
  },
  methods: {
    confirmAddFieldFn () {
      let ths = this;

      ths.$refs['renderForm'].validate((valid) => {
        if (valid) {
          console.log(this.renderForm);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    _initFormList () {
      let ths = this;
      let paramList = [
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
        }
      ]

      paramList.forEach((item, index) => {
        let params = item.params || {};

        if (item.type === 'singleRowText' || item.type === 'multiRowText') { // 单行文本，多行文本
          ths.$set(ths.renderForm, 'itemCode' + index, params.defaultValue || '');
          ths.formList.push(genFormItem.genInputItem(item, index));
        } else if (item.type === 'multiSel') { // 多选
          let resultObj = {...item};
          let checkBoxOptions = params.checkBoxOptions || [];
          let defaultValue = [];

          checkBoxOptions.forEach(element => {
            if (element.isDefault) {
              defaultValue.push(element.value);
            }
          });
          ths.$set(ths.renderForm, 'itemCode' + index, defaultValue);
          resultObj.itemCode = 'itemCode' + index;
          resultObj.checkBoxOptions = checkBoxOptions;
          ths.formList.push(resultObj);
        }
      });
    }
  }
}
