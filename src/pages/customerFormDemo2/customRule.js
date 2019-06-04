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

let checkRadioOptions = (rule, options, callback) => {
  if (options && options.length === 0) {
    callback(new Error('请输入选项内容'));
  } else {
    let isEmptyLabel = false;
    let isDefaultList = options.filter(function (item) { // 选中的个数
        return item['isDefault'];
      });
    let labelList = options.map(function (item) {
        isEmptyLabel = isEmptyLabel || item['label'] === '';
        return item['label'];
      });
    let valueList = options.map(function (item) {
        return item['value'];
      });
    if (isDefaultList && isDefaultList.length > 1) {
      callback(new Error('默认值只能选一个'));
    } else if (isEmptyLabel) {
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

let checklistSelOptions = (rule, options, callback) => {
  if (options && options.length === 0) {
    callback(new Error('请输入选项内容'));
  } else {
    let isEmptyLabel = false;
    let isDefaultList = options.filter(function (item) { // 选中的个数
        return item['isDefault'];
      });
    let labelList = options.map(function (item) {
        isEmptyLabel = isEmptyLabel || item['label'] === '';
        return item['label'];
      });
    let valueList = options.map(function (item) {
        return item['value'];
      });
    if (isDefaultList && isDefaultList.length > 1) {
      callback(new Error('默认值只能选一个'));
    } else if (isEmptyLabel) {
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

export default {
  checkBoxOptions,
  checkRadioOptions,
  checklistSelOptions
}
