import { $axios } from './axios'

// 获取左侧菜单数据
export const getMenu = params => {
  return $axios.get('/api/sysmanage/menus/tree/', { params: params })
}
// 获取当前用户的权限列表
export const getCurrentPermission = params => {
  // return $axios.get('/api/sysmanage/users/current_permission/', { params: params })
  return new Promise((resolve, reject) => {
    resolve({ 'message': 'success', 'code': 'OK', 'data': { 'menus': [{ 'id': 1, 'name': 'index', 'parent': null, 'display_name': '首页', 'is_menu': true, 'path': '', 'icon': 'tachometer-alt', 'image_url': 'ico_navbar_quanju_n.png', 'image_h_url': 'ico_navbar_quanju_h.png' }, { 'id': 2, 'name': 'system', 'parent': null, 'display_name': '系统管理', 'is_menu': true, 'path': '', 'icon': 'edit', 'image_url': 'ico_navbar_xitong_n.png', 'image_h_url': 'ico_navbar_xitong_h.png' }, { 'id': 3, 'name': 'user', 'parent': 2, 'display_name': '用户管理', 'is_menu': true, 'path': '/user', 'icon': null, 'image_url': '', 'image_h_url': '' }, { 'id': 4, 'name': 'group', 'parent': 2, 'display_name': '角色管理', 'is_menu': true, 'path': '/group', 'icon': null, 'image_url': '', 'image_h_url': '' }, { 'id': 5, 'name': 'permission', 'parent': 4, 'display_name': '功能权限', 'is_menu': false, 'path': '', 'icon': null, 'image_url': '', 'image_h_url': '' }, { 'id': 6, 'name': 'monitor_panel', 'parent': 1, 'display_name': '监控面板', 'is_menu': true, 'path': '/monitor_panel', 'icon': null, 'image_url': '', 'image_h_url': '' }, { 'id': 7, 'name': 'new', 'parent': 1, 'display_name': '样例页面', 'is_menu': true, 'path': '/new', 'icon': null, 'image_url': '', 'image_h_url': '' }, { 'id': 8, 'name': 'test', 'parent': null, 'display_name': '测试页面', 'is_menu': true, 'path': '/test', 'icon': 'angry', 'image_url': '', 'image_h_url': '' }, { 'id': 9, 'name': 'demo0', 'parent': null, 'display_name': '一级菜单', 'is_menu': true, 'path': '/demo0', 'icon': 'edit', 'image_url': '', 'image_h_url': '' }, { 'id': 10, 'name': 'demo1', 'parent': 9, 'display_name': '二级菜单', 'is_menu': true, 'path': '/demo1', 'icon': 'edit', 'image_url': '', 'image_h_url': '' }], 'permissions': [{ 'codename': 'change_group', 'display_name': '编辑角色中的成员', 'id': 5, 'name': 'Can change group' }, { 'codename': 'delete_group', 'display_name': '删除角色', 'id': 6, 'name': 'Can delete group' }, { 'codename': 'sync_bkuser', 'display_name': '同步用户', 'id': 52, 'name': 'sync_bkuser' }, { 'codename': 'delete_bkuser', 'display_name': '删除用户', 'id': 30, 'name': 'Can delete user' }, { 'codename': 'add_bkuser', 'display_name': '添加用户', 'id': 28, 'name': 'Can add user' }, { 'codename': 'add_group', 'display_name': '新增角色', 'id': 4, 'name': 'Can add group' }, { 'codename': 'change_permission', 'display_name': '修改角色的信息和权限', 'id': 2, 'name': 'Can change permission' }, { 'codename': 'change_bkuser', 'display_name': '编辑用户', 'id': 29, 'name': 'Can change user' }] }, 'result': true })
  })
}

// test
export const getApiTest = params => {
  return $axios.put('/api_test/', { params })
}
