import { Request } from './Request';

const req = new Request('/api/ucenter/');

export const getMenuResource = async () => {
  return req.get('menu/menu-resource');
};
export default { getMenuResource };
