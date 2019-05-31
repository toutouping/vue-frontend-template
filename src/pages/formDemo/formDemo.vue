<template>
  <div class="app-blank-demo">
    <el-form :model="appForm" :rules="formRules" ref="appForm" label-width="100px" class="demo-app-form">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="appForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="appForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="附件" style="relative">
         <!-- 使用方式： this.$refs.deUpload.uploadFn -->
         <!-- uploadFinishFn(response) -->
         <!-- uploadErrorFn(response) -->
        <de-upload ref="deUpload"
          action-url="api/meeting/AddOrUpdateMeeting"
          :upload-param="uploadParam"
          :file-list="fileList"
          @upload-finish="uploadFinishFn"
          @upload-error="uploadErrorFn"></de-upload>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="appForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="appForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="appForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="appForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="appForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="appForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="列表">
      </el-form-item>
      <div class="item-list">
        <div v-for="(item, index) in appForm.itemList" :key="index" class="item">
          <el-form-item :prop="'itemList.' + index + '.a'" :rules='formRules.a'>
            <el-input v-model="item.a"></el-input>
          </el-form-item>
          <el-form-item :prop="'itemList.' + index + '.b'" :rules='formRules.b'>
            <el-input v-model="item.b"></el-input>
          </el-form-item>
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('appForm')">立即创建</el-button>
        <el-button @click="resetForm('appForm')">重置</el-button>
        <el-button @click="openDialogFn">弹框示例</el-button>

      </el-form-item>
    </el-form>
    <duty-dialog
      :show-select-duty="showSelectDuty"
      :tree-duty-list="treeDutyList" :tree-select-list="treeSelectList"
      @dialog-confirm="dialogConfirm"
      @dialog-cancel="dialogCancel"></duty-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import module from './formDemo.js';
  export default {
    ...module
  };
</script>

<style lang="scss" src="./formDemo.scss" scoped></style>
