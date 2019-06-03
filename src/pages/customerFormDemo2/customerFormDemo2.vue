<template>
  <div class="app-customer2-demo">
    <el-button type="primary" @click="openAddFieldFn">新增字段</el-button>
    <el-table
      ref="appTable"
      :data="tableList"
      style="width: 100%">
      <el-table-column v-for = "(column) in columnList" :key = "column.type"
        :prop="column.prop"
        :label="column.label"
        :show-overflow-tooltip="column.showTooltip"
        :width="column.width">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button type="text">上移</el-button>
          <el-button type="text">下移</el-button>
          <el-button @click="editRowFn(scope.row)" type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
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
    <div class="render-content">
      <render-form></render-form>
    </div>
    <el-dialog title="新增字段" :visible.sync="showAddField" class="right-side-dialog"
      custom-class="add-field-dialog" top="0">
      <el-form :model="appForm" :rules="formRules"
        ref="addFieldForm"
        label-width="80px"
        label-position="left" class="add-field-form">
        <el-form-item label="显示名称" prop="displayValue">
          <el-input v-model="appForm.displayValue" placeholder="请输入显示名，最多八个字"></el-input>
        </el-form-item>
        <el-form-item label="字段描述" prop="description">
          <el-input v-model="appForm.description" placeholder="请输入字段描述"></el-input>
        </el-form-item>
        <el-form-item label="字段类型" prop="type">
          <el-select v-model="appForm.type" @change="changTypeFn" placeholder="请选择字段类型">
            <el-option v-for="(item) in fieldTypeList" :key="item.type"
              :label="item.label" :value="item.type"></el-option>
          </el-select>
        </el-form-item>
        <div v-if="selectTypeObj.paramList.length > 0" class="field-detail">
          <div v-for="(item) in selectTypeObj.paramList" :key="item">
            <!-- 默认值 -->
            <el-form-item v-if="item == 'defaultValue'" label="默认值">
              <el-input v-model="appForm.params.defaultValue" placeholder="请输入默认值"></el-input>
            </el-form-item>
            <!-- 最小长度 -->
            <el-form-item v-if="item == 'minLength'" label="最小长度">
              <el-input-number v-model="appForm.params.minLength" controls-position="right" :min="1"></el-input-number>
            </el-form-item>
            <!-- 最大长度 -->
            <el-form-item v-if="item == 'maxLength'" label="最大长度">
              <el-input-number v-model="appForm.params.maxLength" controls-position="right" :min="1"></el-input-number>
            </el-form-item>
            <!-- 校验方式 -->
            <el-form-item v-if="item == 'validation'" label="校验方式">
              <el-select multiple  v-model="appForm.params.validation" placeholder="请选择字段校验方式">
                <el-option v-for="(item) in validationOptions" :key="item.name"
                  :label="item.label" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
            <!-- 多选选项 -->
            <div v-if="item === 'checkBoxOptions'" class="add-options">
              <el-form-item label="选项" prop="params.checkBoxOptions" :rules='formRules.checkBoxOptions'>
                <div class="add-options-btn">
                  <el-button @click="addOptionsFn('checkBoxOptions')" type="primary" icon="el-icon-plus">添加</el-button>
                </div>
              </el-form-item>
              <div v-for="(option, index) in appForm.params.checkBoxOptions" :key="index" class="options">
                <el-checkbox v-model="option.isDefault" title="设为默认值"></el-checkbox>
                <el-input v-model="option.label" :placeholder="'选项文本' + (index + 1)"></el-input>
                <el-input v-model="option.value" :placeholder="'选项值' + (index + 1)"></el-input>
                <el-button @click="removeOptionsFn('checkBoxOptions', index)" type="text" icon="el-icon-delete"></el-button>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
        <el-form-item label="布局方式" prop="layout">
          <el-select v-model="appForm.layout" placeholder="请选择字段类型">
            <el-option label="整行" value="整行"></el-option><!--wholeLine-->
            <el-option label="半行" value="半行"></el-option><!--halfLine-->
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAddFieldFn">取 消</el-button>
        <el-button type="primary" @click="confirmAddFieldFn">确 定</el-button>
      </div>
  </el-dialog>

  </div>
</template>

<script type="text/ecmascript-6">
import module from './customerFormDemo2.js';
export default {
  ...module
};
</script>

<style lang="scss" src="./customerFormDemo2.scss" scoped></style>
