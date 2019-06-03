import {isEmpty} from '@/common/js/util.js'

// 校验规则组装
function _getFormItemRules (item) {
  let rules = [];
  let params = item.params || {};

  if(!isEmpty(params.minLength)) { // 最小长度
    rules.push({
      min: params.minLength,
      message: `最小长度为${params.minLength}个字符`,
      trigger: 'blur'
    })
  }
  if(!isEmpty(params.maxLength)) { // 最大长度
    rules.push({
      max: params.maxLength,
      message: `最大长度为${params.maxLength}个字符`,
      trigger: 'blur'
    })
  }
  if(!isEmpty(params.validation)) { // 其他校验规则
    params.validation.forEach(element => {
      rules.push({
        validator: (rule, value, callback) => {
          if (!isEmpty(element.rule)) {
            let reg = new RegExp(element.rule)

            if (!value.match(reg)) {
              callback(new Error(element.prompt || '错误内容'));
            }
          }
          callback();
        },
        trigger: 'blur'
      })
    });
  }
  return rules;
}

// 文本框对象组装
function genInputItem (paramObj, index) {
  let resultObj = {...paramObj};

  resultObj.itemCode = 'itemCode' + index;
  resultObj.rules = _getFormItemRules(paramObj);
  return resultObj;
}

export default {
  genInputItem
}
