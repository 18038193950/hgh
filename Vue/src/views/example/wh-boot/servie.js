export default {
  "routename": "/weixinplatform/usermanage",
  "routeValue": "微信-用户管理",
  "remark": "hgh",
  "validFlag": "1",
  "apiConfig": [
    {
      "method": "post",
      "apiname": "001",
      "remark": "新增标签",
      "name": "save",
      "url": "/weixin/user/tags/post"
    },
    {
      "method": "post",
      "apiname": "002",
      "remark": "查询",
      "name": "queryList",
      "url": "weixin/user/list"
    },
    {
      "method": "post",
      "apiname": "004",
      "remark": "修改备注名",
      "name": "edit",
      "url": "weixin/user/remark/put"
    },
    {
      "method": "post",
      "apiname": "003",
      "remark": "加入黑名单",
      "name": "palus",
      "url": "/weixin/user/blacklist/post"
    },
    {
      "method": "post",
      "apiname": "005",
      "remark": "移除黑名单",
      "name": "del",
      "url": "/weixin/user/blacklist/del"
    },
    {
      "method": "post",
      "apiname": "006",
      "remark": "用户同步",
      "name": "add",
      "url": "/weixin/user/sync"
    },
    {
      "method": "post",
      "apiname": "007",
      "remark": "移除标签",
      "name": "del",
      "url": "/weixin/user/tags/del"
    },
    {
      "method": "post",
      "apiname": "008",
      "remark": "用户编辑",
      "name": "edit",
      "url": "/weixin/user/put"
    }
  ],
  "buttonConfig": [
    {
      "popup": "modal",
      "modalKey": "modalKey001",
      "selection": true,
      "apiKey": "001",
      "label": "打标签",
      'type': 'dropdown',
      "emit": true,
      "name": "save",
      "order": 1
    },
    {
      "popup": "modal",
      "modalKey": "modalKey007",
      "apiKey": "006",
      "position": "top",
      icon:'el-icon-plus',
      type:'success',
      "label": "新增",
      "name": "adds",
      "order": 1
    },
    {
      "popup": "modal",
      "modalKey": "modalKey005",
      "apiKey": "006",
      "position": "top",
      tooltip:'1',
      icon:'el-icon-share',
      type:'warning',
      "label": "同步用户",
      "name": "sync",
      "order": 1
    },
    {
      "popup": "",
      "modalKey": "",
      "apiKey": "",
      "position": "top",
      "label": "同步进度",
      icon:'el-icon-loading',
      circle:'1',
      type:'text',
      "emit": true,
      "name": "async",
      "order": 1
    },
    {
      "popup": "modal",
      "modalKey": "modalKey004",
      "apiKey": "",
      "position": "top",
      "label": "导入名单设置标签",
      type:"danger",
      icon:'el-icon-download',
      "emit": true,
      "name": "import",
      "order": 1
    },
    {
      "popup": "confirm",
      "modalKey": "",
      "selection": true,
      "apiKey": "003",
      "position": "top",
      "label": "加入黑名单",
      "icon": "el-icon-plus",
      'type': 'dropdown',
      "emit": true,
      "name": "add",
      "order": 1
    },
    {
      "popup": "confirm",
      "modalKey": "",
      "selection": true,
      "apiKey": "005",
      "icon": "el-icon-minus",
      "position": "top",
      "label": "移除黑名单",
      'type': 'dropdown',
      "emit": true,
      "name": "add",
      "order": 1
    },
    {
      'type': 'dropdownItem',
      'visibility': '0'
    }
  ],
  "tableConfig": [
    {
      "width": 100,
      name: "selection",
      "type": "selection"
    },
    {
      "width": 100,
      "type": "index",
      "name": "index",
      "label": "序号"
    },
    {
      "name": "openId",
      "label": "OpenId"
    },
    {
      "name": "nickname",
      "label": "昵称"
    },
    {
      "name": "headimgurl",
      "label": "用户头像",
      "type": "avatar"
    },
    {
      "name": "mpRemark",
      "label": "备注昵称"
    },
    {
      "name": "sex",
      "label": "性别",
      "type": "tagAll",
      "map": {
        "0": "未知",
        "1": "男",
        "2": "女",
        "9": "全部"
      }
    },
    {
      "name": "country",
      "label": "地区"
    },
    {
      "name": "tagidListCName",
      "label": "标签"
    },
    {
      "name": "subscribeTime",
      "label": "关注时间",
      "type": "date"
    },
    {
      "name": "remark",
      "label": "备注"
    },
    {
      "width": "280",
      "label": "操作",
      name: "selection",
      "type": "button",
      options: [{
        'popup': 'modal',
        'modalKey': 'modalKey002',
        'apiKey': '001',
        'position': 'row',
        'label': '打标签',
        'fromData': true,
        'emit': true,
        'name': 'save',
        'order': 1
      },
      {
        'popup': 'modal',
        'modalKey': 'modalKey006',
        'apiKey': '008',
        'position': 'row',
        'label': '编辑',
        'emit': true,
        'fromData': true,
        'name': 'save',
        'order': 1
      },
      {
        'popup': 'modal',
        'modalKey': 'modalKey003',
        'apiKey': '004',
        'type': 'dropdown',
        'position': 'row',
        'label': '备注名',
        'fromData': true,
        'name': 'edit',
        'order': 1
      },
      {
        'popup': 'confirm',
        'modalKey': '',
        'apiKey': '003',
        'type': 'dropdown',
        'icon': 'el-icon-plus',
        'position': 'row',
        'label': '加入黑名单',
        'fromData': true,
        'emit': true,
        'name': 'ediat',
        'order': 1
      },
      {
        'popup': 'confirm',
        'modalKey': '',
        'apiKey': '005',
        'type': 'dropdown',
        'icon': 'el-icon-minus',
        'position': 'row',
        'label': '移除黑名单',
        'fromData': true,
        'emit': true,
        'name': 'edist',
        'order': 1
      },
      {
        'type': 'dropdownItem',
        trigger: 'hover',
        dropdownSize: 'medium',
        loading: '0',
        disabled: '0',
        label: '更多',
        btnType: 'text',
        btnSize: 'small'
      }
      ]
    }
  ],
  "queryConfig": [
    {
      "name": "nickname",
      "label": "input"
    },
    {
      "name": "number",
      type: 'number',
      "label": "number"
    },
    {
      "name": "password",
      type: 'password',
      "label": "password"
    },
    {
      "name": "collapse",
      type: 'collapse',
      inco: '1',
      incopos: '1',
      "label": "collapse select radio 如果change 设置true 触发change 事件 可以根据 relationDetail 控制表单的显示隐藏",
      span: 24,
      relationDetail: {
        '0': [],
        '1': ['date', 'select', 'selectfilter']
      }
    },
    {
      "name": "date",
      type: 'date',
      format: 'yyyy-MM-dd',
      valueFormat: 'yyyy-MM-dd',
      "label": "date",
    },
    {
      "name": "select",
      type: 'select',
      "label": "select",
      change: true,
      relationDetail: {
        '0': ['checkbox', 'checkbox1'],
        '1': ['radio', 'checkbox1'],
        '2': ['checkbox', 'radio'],
      },
      "options": [
        {
          "label": "select1",
          "value": "0"
        },
        {
          "label": "select2",
          "value": "1"
        },
        {
          "label": "select3",
          "value": "2"
        }
      ],
    },
    {
      "name": "selectfilter",
      type: 'selectfilter',
      "label": "selectfilter",
      "options": [
        {
          "label": "selectfilter1",
          "value": "1"
        },
        {
          "label": "selectfilter2",
          "value": "2"
        },
        {
          "label": "selectfilter3",
          "value": "0"
        }
      ],
    },

    {
      "name": "radio",
      type: 'radio',
      "label": "radio",
      span: 8,
      change: true,
      relationDetail: {
        '0': ['select', 'selectfilter'],
        '1': ['date', 'selectfilter'],
        '2': ['select', 'date'],
      },
      "options": [
        {
          "label": "radio1",
          "value": "1"
        },
        {
          "label": "radio2",
          "value": "2"
        },
        {
          "label": "radio3",
          "value": "0"
        }
      ],
    },
    {
      "name": "checkbox",
      type: 'checkbox',
      "label": "checkbox",
      span: 16,
      "options": [
        {
          "label": "checkbox1",
          "value": "1"
        },
        {
          "label": "checkbox2",
          "value": "2"
        },
        {
          "label": "checkbox3",
          "value": "0"
        }
      ],
    },
    {
      "name": "checkbox1",
      type: 'checkbox',
      "label": "checkbox",
      span: 24,
      "options": [
        {
          "label": "checkbox1",
          "value": "0"
        },
        {
          "label": "checkbox2",
          "value": "1"
        },
        {
          "label": "checkbox3",
          "value": "2"
        },
        {
          "label": "checkbox4",
          "value": "3"
        }, {
          "label": "checkbox5",
          "value": "4"
        }, {
          "label": "checkbox6",
          "value": "5"
        }, {
          "label": "checkbox7",
          "value": "6"
        }, {
          "label": "checkbox8",
          "value": "7"
        }
      ],
    },
    {
      "name": "textarea",
      type: 'textarea',
      "label": "textarea",
      resize: 'vertical',
      autosize: { minRows: 4, maxRows: 6 },
      span: 24,

    },
    {
      type: 'button',
      name: 'button',
      span: 24,
      labelWidth: '0px',
      options: [
        {
          key: 'query',
          name: 'query',
          size: 'medium',
          label: '查询'
        },
        {
          key: 'resetForm',
          size: 'medium',
          label: '重置',
          type: '-',
          name: 'resetForm'
        }
      ]
    }
  ],
  "modalConfig": {
    "modalKey001": {
      "dialogType": "close",
      "queryConfig": [
        {
          "name": "tagId",
          "options": [
            { value: '1', label: 'hhh' },
            { value: '2', label: '333' },
          ],
          "label": "标签名称",
          "type": "select",
          "span": 24
        },
        {
          "name": "tagState",
          "options": [
            {
              "label": "新增标签",
              "value": "001"
            },
            {
              "label": "移除标签",
              "value": "007"
            }
          ],
          "labelWidth": "320",
          "label": "批量新增移除标签",
          "type": "radio",
          "span": 24
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '打标签'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }

      ],
      "formDataApiname": "001",
      "titleText": "批量打标签",
      "queryParams": {},
      "rules": {
        "tagId": {
          "trigger": "change",
          "message": "请选择标签名称",
          "required": true
        },
        "tagState": {
          "trigger": "change",
          "message": "请选择批量新增移除标签",
          "required": true
        }
      },
      "apiType": "save"
    },
    "modalKey002": {
      "dialogType": "close",
      "queryConfig": [
        {
          "name": "tagId",
          "options": [
            { value: '1', label: 'hhh' },
            { value: '2', label: '333' },
          ],
          "label": "标签名称",
          "type": "select",
          "span": 24
        },
        {
          "name": "tagState",
          "options": [
            {
              "label": "新增标签",
              "value": "001"
            },
            {
              "label": "移除标签",
              "value": "007"
            }
          ],
          "label": "新增移除标签",
          "type": "radio",
          "span": 24
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '打标签'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }
      ],
      "formDataApiname": "002",
      "titleText": "打标签",
      "queryParams": {},
      "rules": {
        "tagId": {
          "trigger": "change",
          "message": "请选择标签名称",
          "required": true
        },
        "tagState": {
          "trigger": "change",
          "message": "请选择批量新增移除标签",
          "required": true
        }
      },
      "labelWidth": "150px",
      "apiType": "save"
    },
    "modalKey003": {
      "dialogType": "close",
      "queryConfig": [
        {
          "name": "mpRemark",
          "label": "备注昵称"
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '修改'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }
      ],
      "formDataApiname": "004",
      "titleText": "修改备注",
      "rules": {
        "mpRemark": {
          "trigger": "blur",
          "message": "请输入备注昵称",
          "required": true
        }
      },
      "queryParams": {},
      "apiType": "edit"
    },
    "modalKey004": {
      "dialogType": "close",
      "slotAll": "1",
      "slotName": "upload",
      "queryConfig": [],
      "formDataApiname": "",
      "titleText": "上传",
      "queryParams": {},
      "apiType": "save"
    },
    "modalKey005": {
      "dialogType": "close",
      "queryConfig": [
        {
          "name": "max",
          "label": "最大数量",
          "type": "number"
        },
        {
          "name": "openId",
          "label": "openId",
          "span": 24
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '同步'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }
      ],
      "formDataApiname": "006",
      "titleText": "同步用户",
      "queryParams": {},
      rules: {
        openId: { required: true, message: "请输入openId", trigger: 'blur' }
      },
      "apiType": "edit"
    },
    "modalKey006": {
      "dialogType": "close",
      "slotAll": "1",
      "slotName": "edit",
      "queryConfig": [
        {
          "name": "nickname",
          "label": "昵称"
        },
        {
          "name": "mpRemark",
          "label": "备注昵称"
        },
        {
          "name": "openId",
          "label": "openId"
        },
        {
          "name": "sex",
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "男",
              "value": "1"
            },
            {
              "label": "女",
              "value": "2"
            },
            {
              "label": "未知",
              "value": "0"
            }
          ],
          "label": "性别",
          "type": "select"
        },
        {
          "name": "tagsQueryList",
          "options": [],
          "label": "用户标签",
          "type": "selectfilter"
        },
        {
          "name": "subscribe",
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "已关注",
              "value": "1"
            },
            {
              "label": "未关注",
              "value": "0"
            }
          ],
          "label": "关注状态",
          "type": "select"
        },
        {
          "name": "validFlag",
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "否",
              "value": "1"
            },
            {
              "label": "是",
              "value": "0"
            }
          ],
          "label": "是否拉黑",
          "type": "select",
          "value": "9"
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '编辑'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }
      ],
      "layout": { row: 20, col: 4 },
      "formDataApiname": "008",
      "width": "80%",
      "titleText": "编辑用户",
      "queryParams": {},
      "apiType": "save"
    },
    "modalKey007": {
      "dialogType": "close",
      "type": "drawer",
      "queryConfig": [
        {
          "name": "nickname",
          "span": 12,
          "label": "昵称"
        },
        {
          "name": "mpRemark",
          "span": 13,
          "label": "备注昵称"
        },
        {
          "name": "openId",
          "span": 15,
          "label": "openId"
        },
        {
          "name": "sex",
          "span": 20,
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "男",
              "value": "1"
            },
            {
              "label": "女",
              "value": "2"
            },
            {
              "label": "未知",
              "value": "0"
            }
          ],
          "label": "性别",
          "type": "select"
        },
        {
          "name": "tagsQueryList",
          "span": 17,
          "options": [],
          "label": "用户标签",
          "type": "selectfilter"
        },
        {
          "name": "subscribe",
          "span": 22,
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "已关注",
              "value": "1"
            },
            {
              "label": "未关注",
              "value": "0"
            }
          ],
          "label": "关注状态",
          "type": "select"
        },
        {
          "name": "validFlag",
          "span": 24,
          "options": [
            {
              "label": "全部",
              "value": "9"
            },
            {
              "label": "否",
              "value": "1"
            },
            {
              "label": "是",
              "value": "0"
            }
          ],
          "label": "是否拉黑",
          "type": "select",
          "value": "9"
        },
        {
          type: 'button',
          name: 'button',
          span: 24,
          labelWidth: '0px',
          options: [
            {
              key: 'save',
              name: 'save',
              size: 'medium',
              label: '新增'
            },
            {
              key: 'close',
              name: 'close',
              size: 'medium',
              label: '关闭',
              type: '-',
            }
          ]
        }
      ],
      "layout": { row: 20, col: 1 },
      "labelWidth": "100px",
      "formDataApiname": "008",
      "width": "35%",
      "titleText": "新增用户",
      "queryParams": {},
      "apiType": "save"
    }
  }
}