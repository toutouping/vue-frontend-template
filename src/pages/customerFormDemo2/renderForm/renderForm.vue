<template>
  <div class="app-render-form" style="margin-top: 30px">
    <el-form :model="renderForm" ref="renderForm"
      label-width="100px" class="demo-app-form">
      <el-col v-for="(formItem, index) in formList" :key="index" :span="formItem.layout == '整行' ? 24 : 12">
        <!-- 单行文本 -->
        <el-form-item v-if="formItem.type == 'singleRowText'"
          :label="formItem.displayValue"
          :rules="formItem.rules"
          :prop="formItem.itemCode">
          <el-input :placeholder="formItem.displayValue"
            v-model="renderForm[formItem.itemCode]"></el-input>
        </el-form-item>
        <!-- 多行文本 -->
        <el-form-item v-if="formItem.type == 'multiRowText'"
          :label="formItem.displayValue"
          :rules="formItem.rules"
          :prop="formItem.itemCode">
          <el-input type="textarea"
            :placeholder="formItem.displayValue"
            v-model="renderForm[formItem.itemCode]"></el-input>
        </el-form-item>
        <!-- 多选 -->
        <el-form-item v-if="formItem.type == 'multiSel'"
          :label="formItem.displayValue"
          :prop="formItem.itemCode">
            <el-checkbox-group v-model="renderForm[formItem.itemCode]">
              <el-checkbox v-for="(option, index) in formItem.checkBoxOptions" :key="index" :label="option.label"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
      </el-col>
    </el-form>
    <el-button type="primary" @click="confirmAddFieldFn">确 定</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  import module from './renderForm.js';
  export default {
    ...module
  };
</script>

<style lang="scss" src="./renderForm.scss" scoped></style>
