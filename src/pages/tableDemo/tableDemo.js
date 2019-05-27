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
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
