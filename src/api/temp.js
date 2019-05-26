import { $axios } from './axios'

// delete请求
export const deleteUser = params => {
  return $axios.delete(`/sysmanage/users/${params.id}/`, params);
}

// post请求
export const postTest = params => {
  return $axios({
    url: '/testUrl/',
    method: 'post',
    data: params
  });
}

// get请求
export const getApiTest = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return $axios.put('/api_test/', {'params': params});
}
