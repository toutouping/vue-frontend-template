<template>
  <div class="app-seqflow-demo">
    <div style="margin-top: 10px;">
        <ul style="margin-left: 0px;" class="pl0 flow-box-list" id="apply_detail_flow">
        </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import module from './seqFlow.js';
  import '@/assets/css/sFlow.css';
  export default {
    ...module
  };
</script>

<style lang="scss" src="./seqFlow.scss" scoped></style>

<style>
  .flow-box-list .item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: solid 1px #ccc;
    border-radius: 4px;
  }
</style>
