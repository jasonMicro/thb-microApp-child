import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import './theme/index.css';
import MicroServices from './utils/micro-services'; //微应用服务
/**注册公共组件 自定义组件*/
import PublicComponents from './components';

Vue.config.productionTip = false;

Vue.use(PublicComponents);
Vue.use(ElementUI);

Vue.use(MicroServices); //微应用服务

const app = new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
// 监听卸载操作 微应用
window.addEventListener('unmount', function () {
  app.$destroy();
});
