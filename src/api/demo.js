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
export const getOrgList = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return new Promise(function(resolve, reject) {
      resolve([{
        name: '一级 1',
        children: [{
          name: '二级 1-1',
          children: [{
            name: '三级 1-1-1'
          }]
        }]
      }, {
        name: '一级 2',
        children: [{
          name: '二级 2-1',
          children: [{
            name: '三级 2-1-1'
          }]
        }, {
          name: '二级 2-2',
          children: [{
            name: '三级 2-2-1'
          }]
        }]
      }, {
        name: '一级 3',
        children: [{
          name: '二级 3-1',
          children: [{
            name: '三级 3-1-1'
          }]
        }, {
          name: '二级 3-2',
          children: [{
            name: '三级 3-2-1'
          }]
        }]
      }])
    });
}

// get请求
export const getUserListByOrgId = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return new Promise(function(resolve, reject) {
    resolve([{
      id: 1,
      name: 'xxx'
    }]);
  });
}

// get请求
export const getApiTest = params => {
  params = params || {};
  Object.assign(params, {t: new Date().getTime()});
  return $axios.put('/api_test/', {'params': params});
}

export default {
  getOrgList,
  getUserListByOrgId,
  getApiTest
}
