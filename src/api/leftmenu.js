import { $axios } from './axios'

// 获取左侧菜单数据
export const getMenu = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return $axios.get('/api/sysmanage/menus/tree/', { params: params })
}
// 获取当前用户的权限列表
export const getCurrentPermission = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return $axios.get('/api/current_permission/', { params: params })
}

// test
export const getApiTest = params => {
  return $axios.put('/api_test/', { params })
}
