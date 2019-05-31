export default {
  data() {
    return {
      tableList: [],
      page: {
        size: 100,
        total: 0,
        current: 1
      }
    }
  },
  created() {
    let ths = this;

    ths._initTableList();
  },
  methods: {
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
        // 字段值， 字段校验方式， 布局要求， 字段属性， 操作
        name: '', // 字段显示名称，最多8个字
        desc: '', // 字段描述
        type: '', // 字段类型(0 单行文本 1 多行文本 31 复选框 2 单选框 3 多选 4 富文本 5 列表)
        value: '', // 字段值
        checkWay: '', // 校验方式
        layout: '', // 0 半行 1 整行
        regularExp: '', // 正则表达式

      }]
    }
  }
}
