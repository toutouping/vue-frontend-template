// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import VueBus from '@/eventbus/bus'
import '@/api/axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'
import 'iview/dist/styles/iview.css'
import iview from 'iview';
import cascaderMulti from 'cascader-multi';
import iviewArea from 'iview-area';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faEdit, faAngry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vPermission from '@/directive/permissions/permission'
import customForm from '@/components/customForm';

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'small' });
Vue.use(vPermission);
Vue.use(iview);
Vue.use(iviewArea);
Vue.use(cascaderMulti);
Vue.use(VueBus);
Vue.use(customForm);
// Vue.prototype.$ = $;

library.add(faTachometerAlt, faEdit, faAngry)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
