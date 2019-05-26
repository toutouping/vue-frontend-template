import * as commonApi from '@/api/temp'

const state = {
  isAdmin: '', // 管理员
}

const getters = {
  isAdmin: state => state.isAdmin
}

const mutations = {
  setIsGetUserPerm(state, isGetUserPerm) {
    state.isGetUserPerm = isGetUserPerm
  }
}

const actions = {
  getMenu ({ commit }, param) {
    return commonApi.getApiTest()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
