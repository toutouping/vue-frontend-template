export default {
  defaultVal: 'singleRowText',
  paramDefaultVal: {
    'defaultValue': '',
    'minLength': null,
    'maxLength': null,
    'checkBoxOptions': () => {
      return {
        isDefault: false,
        label: '',
        value: ''
      }
    },
    'radioOptions': () => {
      return {
        isDefault: false,
        label: '',
        value: ''
      }
    },
    'listSelOptions': () => {
      return {
        isDefault: false,
        label: '',
        value: ''
      }
    },
    'cascaderOptions': (parentLevel) => {
      if (parentLevel === 2) {
        return {
          'value': ''
        }
      } else if (parentLevel === 1) {
        return {
          'value': '',
          'children': []
        }
      } else {
        return {
          'value': '',
          'children': [{
            'value': '',
            'children': [{
              'value': ''
            }]
          }]
        }
      }
    },
  },
  typeList: [
    {
      type: 'singleRowText',
      label: '单行文本',
      paramList: ['defaultValue', 'minLength', 'maxLength', 'validation']
    },
    {
      type: 'multiRowText',
      label: '多行文本',
      paramList: ['minLength', 'maxLength']
    },
    {
      type: 'singleSel',
      label: '单选',
      paramList: ['radioOptions']
    },
    {
      type: 'multiSel',
      label: '多选',
      paramList: ['checkBoxOptions']
    },
    {
      type: 'listSel',
      label: '下拉',
      paramList: ['listSelOptions']
    },
    {
      type: 'cascader',
      label: '级联选择',
      paramList: ['cascaderOptions']
    },
    {
      type: 'image',
      label: '图片',
      paramList: []
    },
    {
      type: 'user',
      label: '人员',
      paramList: []
    },
    {
      type: 'dateTime',
      label: '时间日期',
      paramList: []
    },
    {
      type: 'table',
      label: '表格',
      paramList: []
    },
    {
      type: 'file',
      label: '附件',
      paramList: []
    },
    {
      type: 'double',
      label: '小数',
      paramList: []
    },
    {
      type: 'int',
      label: '整数',
      paramList: []
    },
    {
      type: 'richText',
      label: '富文本',
      paramList: []
    }
  ]
}
