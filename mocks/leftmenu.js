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
        'id': '1-1',
        'name': '1-1',
        'parent': 0,
        'display_name': '表单案例',
        'is_menu': true,
        'path': '/formDemo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-2',
        'name': '1-2',
        'parent': 0,
        'display_name': '表格案例',
        'is_menu': true,
        'path': '/tableDemo',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-3',
        'name': '1-3',
        'parent': 0,
        'display_name': '自定义表单1',
        'is_menu': true,
        'path': '/customerForm',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-3-1',
        'name': '1-3-1',
        'parent': 0,
        'display_name': '自定义表单2',
        'is_menu': true,
        'path': '/customerForm2',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-4',
        'name': '1-4',
        'parent': 0,
        'display_name': '预览表单1',
        'is_menu': true,
        'path': '/previewForm',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-5',
        'name': '1-5',
        'parent': 0,
        'display_name': '表单渲染1',
        'is_menu': true,
        'path': '/renderForm',
        'icon': 'edit',
        'image_url': '',
        'image_h_url': ''
      },
      {
        'id': '1-6',
        'name': '1-6',
        'parent': 0,
        'display_name': '顺序流程图',
        'is_menu': true,
        'path': '/seqFlow',
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
        'id': '2-1',
        'name': '2-1',
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