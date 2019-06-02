export default {
  'defaultVal': 'none',
  'options': [
    {
      'name': 'none',
      'label': '无校验',
      'rule': '',
      'prompt': ''
    },
    {
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
    },
    {
      'name': 'english',
      'label': '英文',
      'rule': '^[a-zA-Z][a-zA-Z0-9_]{0,}$',
      'prompt': '请填写英文'
    },
    {
      'name': 'email',
      'label': 'Email格式',
      'rule': '^(([\\u4E00-\\u9FA5]|[\\uFE30-\\uFEFF]|[\\d]|[a-zA-Z]|[\\_\\-\\.])+[\\@])(((([\\d]|[a-zA-Z]|[\\_\\-]|[\\[\\]\\{\\}\\>\\<])+[\\.])+)([\\d]|[a-zA-Z\\_\\-])+)$',
      'prompt': '请填写正确的邮箱'
    },
    {
      'name': 'weblink',
      'label': '网址格式',
      'rule': '^[a-zA-z]+://(\\w+(-\\w+)*)(\\.(\\w+(-\\w+)*))*(\\?\\S*)?$',
      'prompt': '请填写正确的网址'
    },
    {
      'name': 'tellphone',
      'label': '电话号码',
      'rule': '(\\d{3}-|\\d{4}-)?(\\d{8}|\\d{7})?',
      'prompt': '请填写正确的电话号码'
    },
    {
      'name': 'mobile',
      'label': '手机号码',
      'rule': '^1[3|4|5|7|8][0-9]{9}$',
      'prompt': '请填写正确的手机号码'
    },
    {
      'name': 'integer',
      'label': '整数',
      'rule': '^\\d+',
      'prompt': '请输入整数'
    },
    {
      'name': 'idcard',
      'label': '身份证号',
      'rule': '(^d{15}$)|(^d{17}([0-9]|X)$)',
      'prompt': '请输入正确的身份证号码'
    },
    {
      'name': 'ip',
      'label': 'IP',
      'rule': '^([0-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.([0-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.([0-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.([0-9]|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])$',
      'prompt': '请填写正确的IP地址'
    },
    {
      'name': 'customer',
      'label': '自定义表达式规则',
      'rule': 'xxxx',
      'prompt': 'xxx'
    }
  ]
}
