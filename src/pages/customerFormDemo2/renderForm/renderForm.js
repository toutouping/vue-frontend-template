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
  props: {
    renderList: {
      type: Array,
      default: []
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
      let paramList = ths.renderList || [];

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
        } else if (item.type === 'singleSel') { // 单选
          let resultObj = {...item};
          let radioOptions = params.radioOptions || [];
          let defaultValue = '';

          radioOptions.forEach(element => {
            if (element.isDefault) {
              defaultValue = element.value;
            }
          });
          ths.$set(ths.renderForm, 'itemCode' + index, defaultValue);
          resultObj.itemCode = 'itemCode' + index;
          resultObj.radioOptions = radioOptions;
          ths.formList.push(resultObj);
        } else if (item.type === 'listSel') { // 单选
          let resultObj = {...item};
          let listSelOptions = params.listSelOptions || [];
          let defaultValue = '';

          listSelOptions.forEach(element => {
            if (element.isDefault) {
              defaultValue = element.value;
            }
          });
          ths.$set(ths.renderForm, 'itemCode' + index, defaultValue);
          resultObj.itemCode = 'itemCode' + index;
          resultObj.listSelOptions = listSelOptions;
          ths.formList.push(resultObj);
        }
      });
    }
  }
}
