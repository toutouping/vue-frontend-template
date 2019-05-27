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
        'id': 0,
        'name': '0',
        'parent': null,
        'display_name': '案例',
        'is_menu': true,
        'path': '',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': 11,
        'name': '11',
        'parent': 0,
        'display_name': '表单案例',
        'is_menu': true,
        'path': '/formDemo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': 12,
        'name': '12',
        'parent': 0,
        'display_name': '表格案例',
        'is_menu': true,
        'path': '/tableDemo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': 2,
        'name': '2',
        'parent': null,
        'display_name': '一级菜单',
        'is_menu': true,
        'path': '',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': 3,
        'name': 'blankDemo',
        'parent': 2,
        'display_name': '二级菜单',
        'is_menu': true,
        'path': '/blankDemo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      }
    ],
    'permissions': [
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