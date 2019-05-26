/*
  Vuex 配置文件
*/
import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import main from './modules/main'
import leftMenu from './modules/leftMenu'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    leftMenu,
    main,
    demo
  }
})
