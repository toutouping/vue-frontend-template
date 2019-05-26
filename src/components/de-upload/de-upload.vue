<template>
    <div class="de-upload-contain">
      <!-- :headers="uploadHeaders" -->
      <file-upload v-if="isMultiple && !readonly"
        ref="upload"
        v-model="uploadList"
        accept="doc,docx,txt,xlsx,rar,zip"
        @input-file="inputFileFn"
        @input-filter="inputFilterFn"
        :data="uploadParam"
        :multiple="true"
        :post-action="actionUrl">
        添加附件
      </file-upload>
      <file-upload v-if="!isMultiple && !readonly"
        ref="upload"
        v-model="uploadList"
        accept="doc,docx,txt,xlsx,rar,zip"
        @input-file="inputFileFn"
        @input-filter="inputFilterFn"
        :data="uploadParam"
        :multiple="false"
        :post-action="actionUrl">
        添加附件
      </file-upload>
      <span v-if="!isMultiple" style="vertical-align: top; line-height: 32px; font-size: 12px;">单次仅支持单个文件上传</span>
      <ul class="upload-list list--text">
        <!--- 已经上传至服务器的文件 -->
        <li v-for="file in fileList":key="file.id" class="item is-success">
          <a class="item-name" @click.prevent="downLoadAttrachment(file.id)">
            <i class="el-icon-document"></i>{{file.name}}
          </a>
          <label v-if="!readonly" class="item-status-label" @click.prevent="removeFileFn(file)">
            <i class="el-icon-circle-check upload-success"></i>
          </label>
          <i v-if="!readonly" class="el-icon-close" @click.prevent="removeFileFn(file)"></i>
        </li>
        <!--- 未上传至服务器的文件 -->
        <li v-for="file in uploadList":key="file.id" class="item" :class="{'is-success': file.success, 'is-error': file.error}">
          <a class="item-name">
            <i class="el-icon-document"></i>{{file.name}}
          </a>
          <label class="item-status-label" v-if="!readonly && (file.error || file.success)">
            <i :class="{'upload-success el-icon-circle-check': file.success, 'upload-error el-icon-circle-close': file.error}"></i>
          </label>
          <i class="el-icon-close" v-if="!readonly" @click.prevent="$refs.upload.remove(file)"></i>
          <el-progress
            v-if="!readonly && file.active && file.progress !== '0.00' && file.progress !== '100.00'"
            type="line"
            :stroke-width="2"
            :percentage="parsePercentage(file.progress)">
          </el-progress>
        </li>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
  import model from './de-upload.js';
  export default {
    ...model
  };
</script>

<style lang="stylus" src="./de-upload.styl" scoped></style>