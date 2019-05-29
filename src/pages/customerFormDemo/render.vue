<template>
  <Form ref="formValidate" class="b-a" :label-width="100" :model="formData" @submit.native.prevent>
    <p>未绑定数据字典控件无效</p>
    <renders v-for="(element,index) in templateForm" :key="index" :index="index" :ele="element.ele" :obj="element.obj || {}" :data="formData" @handleChangeVal="val => handleChangeVal(val,element)" @changeVisibility="changeVisibility" :value="formData[element.obj.name]" :sortableItem="templateForm">
    </renders>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button type="default" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      templateForm: [],
      formData: {}
    }
  },
  methods: {
    // 控件回填数据
    handleChangeVal(val, element) {
      this.$set(this.formData, element.obj.name, val);
      // this.formData[element.obj.name] = val;
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          window.localStorage.setItem('templateForm', JSON.stringify(this.templateForm));
          this.$Message.success('Success!');
          this.$router.push('/preview');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    // 更改当前渲染字段是否显示
    changeVisibility(index, visibility) {
      this.$set(this.templateForm[index].obj, 'visibility', visibility);
    }
  },
  created() {
    this.templateForm = JSON.parse(localStorage.getItem('templateForm') || '[]');
    for (let i in this.templateForm) {
      this.$set(this.formData, this.templateForm[i].obj.name, this.templateForm[i].obj.value);
    }
  }
}
</script>
<style>
</style>
