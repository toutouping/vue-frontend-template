<template>
  <div class="app-customer2-demo">
    <el-button type="primary" @click="openDialogFn">新增字段</el-button>
    <el-table
      ref="appTable"
      :data="tableList"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="date"
        label="日期"
        width="120">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px; text-align: right">
      <el-pagination v-if="tableList.length > 0"
        @size-change="pageSizeChangeFn"
        @current-change="pageCurrentChangeFn"
        :current-page="page.current"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total">
      </el-pagination>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import module from './customerFormDemo2.js';
  export default {
    ...module
  };
</script>

<style lang="scss" src="./customerFormDemo2.scss" scoped></style>
