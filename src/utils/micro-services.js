const MicroServices = {
  /**
   * @author Jason
   * @description 微应用服务注册
   * install方法是必需的
   * 包含两个参数：Vue 构造器，一个可选的选项对象
   * */
  install(Vue, options) {
    if (window.__MICRO_APP_ENVIRONMENT__) {
      const globalData = window.microApp.getGlobalData(); //主应用全局发送 获取全局数据
      Vue.prototype.$globalData = globalData;
      const { Request, xlsxExport, phoneDesense, IdCardDesense, nameDesense } =
        window.microApp.getData(); // 返回基座下发的data数据
      Vue.prototype.$Request = Request; //请求
      Vue.prototype.$xlsxExport = xlsxExport; //前端导出
      Vue.prototype.$phoneDesense = phoneDesense; //手机号脱敏
      Vue.prototype.$IdCardDesense = IdCardDesense; //身份证号脱敏
      Vue.prototype.$nameDesense = nameDesense; //姓名脱敏
    }
  }
};
export default MicroServices;
