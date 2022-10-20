import Vue from 'vue';
import MicroServices from '../utils/micro-services';

Vue.use(MicroServices);
const vm = new Vue();

/**
 * @author Jason
 * @description 通过继承 主应用 Request 请求类 实现当前应用的请求类
 * */
export class Request extends vm.$Request {
  constructor(MODELS) {
    super(`${MODELS || ''}`);
  }
}

export default {
  Request
};
