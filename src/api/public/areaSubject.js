/**
 * @author Jason
 * @description 公共接口 查询
 * @Time 2022-08-12
 * */
import { Request } from '../Request';

const req = new Request('/api/base/');

/**社区列表*/
export const getAreaList = async (params) => {
  return req.get('area/getAreasByAreaCodeAndLevel', params);
};

/**
 * 查询下级子区域及主体
 * @returns {Promise<AxiosResponse<T>>}
 */
export const subAreas = async (params) => {
  return req.get('area/getCurrentAndSubAreaById', params);
};

/**
 * 网格列表
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getGridList = async (params) => {
  return req.get('grid/list', params);
};

/**
 * @description 根据网格id查询网格下的主体
 * */
export const getSubjectByGridId = async (params) => {
  return req.get('grid/getSubjectInfosByGrid', params);
};

const videoReq = new Request('/rtsp/stream/');
export const getVideoUrls = async (params) => {
  return videoReq.post('open', params);
};
//导出
export default {
  getAreaList,
  getVideoUrls,
  getGridList,
  getSubjectByGridId
};
