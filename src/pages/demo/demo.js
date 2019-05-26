import {getApiTest} from '@/api/temp';
export default {
  data() {
    return {
      tableData: []
    }
  },
  created () {
    this._initPage();
  },
  methods: {
    handleClick (row) {
      console.log(row);
    },
    _initPage () {
      getApiTest().then((res) => {
        this.tableData = res.message;
      });
    }
  }
}
