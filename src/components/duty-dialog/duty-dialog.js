import demo from '@/api/demo';

export default {
  data () {
    return {
      isPageLoading: false,
      filterName: '',
      timer: null,
      treeList: [],
      dutyList: [],
      selectList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    };
  },
  props: {
    maxLength: {
      type: Number,
      default: 1000
    },
    showFilterName: {
      type: Boolean,
      default: false
    },
    showSelectDuty: {
      type: Boolean,
      default: false
    },
    treeDutyList: {
      type: Array,
      default: []
    },
    treeSelectList: {
      type: Array,
      default: []
    }
  },
  mounted () {
    this._getTreeList();
  },
  methods: {
    _getTreeList () { // 获取室组
      let ths = this;

      demo.getOrgList().then((res) => {
        if (res.ReturnCode === 1 && res.Data) {
          ths.treeList = [res.Data];
        }
      }).catch(function (error) {
        if (error) {
          console.log(error.stack);
        }
      });
    },
    getDutyList (orgId, selectDutyList) {
      let ths = this;

      ths.isPageLoading = true;
      demo.getUserListByOrgId({orgId: orgId}).then((res) => {
        if (res.ReturnCode === 1 && res.Data && res.Data.length > 0) {
          let result = [];
          let resData = res.Data || [];

          for (let i = 0; i < resData.length; i++) {
            let temp = resData[i];

            result.push({
              key: temp.id,
              label: temp.name
            });
          }
          ths.dutyList = ths._concat(result, selectDutyList);
        } else {
          this.dutyList = [];
        }
        ths.isPageLoading = false;
      }).catch(function (error) {
        ths.isPageLoading = false;
        if (error) {
          console.log(error.stack);
        }
      });
    },
    dialogCancel () {
      this.$emit('dialog-cancel', '');
    },
    dialogConfirm () {
      let ths = this;
      let tempDutyList = [];
      let selectList = ths.selectList || [];

      if (selectList.length > ths.maxLength) {
        ths.$message.warning('最多只能选择' + ths.maxLength + '个责任人。');
      } else {
        for (let i = 0; i < selectList.length; i++) {
          let duty = ths.getDutyByKey(selectList[i]);

          if (duty) {
            tempDutyList.push({
              OwnerId: duty.key,
              Name: duty.label
            });
          }
        }
        this.$emit('dialog-confirm', tempDutyList);
      }
    },
    handleNodeFn (data, node, a) {
      if (data.children) {
        return false;
      }
      let ths = this;
      let tempDutyList = [];
      let selectList = ths.selectList;

      for (let i = 0; i < selectList.length; i++) {
        let duty = ths.getDutyByKey(selectList[i]);

        if (duty) {
          tempDutyList.push(duty);
        }
      }
      ths.getDutyList(data.id, tempDutyList);
    },
    _concat (arr1, arr2) { // 合并非重复内容
      let arr = arr2.concat();

      for (let i = 0; i < arr1.length; i++) {
        let isExit = false;

        for (let j = 0; j < arr2.length; j++) {
          if (arr1[i].key === arr2[j].key) {
            isExit = true;
            break;
          }
        }
        if (!isExit) {
          arr.push(arr1[i]);
        }
      }
      return arr;
    },
    getDutyByKey (key) {
      if (!key) {
        return false;
      }
      let dutyList = this.dutyList || [];

      for (let i = 0; i < dutyList.length; i++) {
        if (dutyList[i].key === key) {
          return dutyList[i];
        }
      }
    },
    leftCheckChange () {
    },
    rightCheckChange () {
    }
  },
  watch: {
    treeDutyList (val) {
      this.dutyList = val;
    },
    treeSelectList (val) {
      this.selectList = val;
    },
    filterName (val) {
      let ths = this;

      if (ths.timer) {
        clearTimeout(ths.timer);
      }
      ths.timer = setTimeout(() => {
        // ths._getTreeList();
        console.log(val);
      }, 700);
    }
  }
};
