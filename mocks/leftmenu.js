/**
 * 配置管理模块 > 菜单列表信息
 * @url /current_permission/
 * Here you can write a detailed description
 * of the parameters of the information.
 */
module.exports = {
  'message': 'success',
  'code': 'OK',
  'data': {
    'menus': [
      {
        'id': 1,
        'name': 'demo0',
        'parent': null,
        'display_name': '一级菜单',
        'is_menu': true,
        'path': '',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': 2,
        'name': 'demo',
        'parent': 1,
        'display_name': '二级菜单',
        'is_menu': true,
        'path': '/demo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      }
    ],
    'permissions': [{
        'codename': 'change_group',
        'display_name': '编辑角色中的成员',
        'id': 5,
        'name': 'Can change group'
      },
      {
        'codename': 'delete_group',
        'display_name': '删除角色',
        'id': 6,
        'name': 'Can delete group'
      }
    ]
  },
  'result': true
}