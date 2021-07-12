<template>
  <div class="app-container">
    <wh-table height="400px" :table-config="tableConfig" :list-query="listQuery" :data-list="dataLists" @submitTable="submitTable">
      <template v-slot:headernickname>
        <el-input v-model="search" size="mini" placeholder="输入关键字(昵称)搜索" />
      </template>
      <template v-slot:inlinenickname="{row}">
        <span>{{ row.row.nickname }}</span>
      </template>
    </wh-table>
    <el-button @click="drawerShow">编辑代码</el-button>
    <wh-json ref="whJson" :json.sync="json" :drawer.sync="drawer" />
    <mark-down />
  </div>
</template>

<script>
import WhJson from '@/components/wh-component/wh-jsonedit'
import markDown from './markdown'

export default {
  components: {
    WhJson,
    markDown
  },
  data() {
    return {
      drawer: false,
      tableConfig: [
        {
          'width': 50,
          name: 'selection',
          'type': 'selection'
        },
        {
          'width': 40,
          'name': 'index',
          'type': 'index',
          'label': '序号',
          fixed: true
        },
        {
          'width': 300,
          'name': 'nickname',
          'type': 'slots',
          'label': '昵称'
        },

        {
          'name': 'headimgurl',

          'label': '用户头像',
          'type': 'avatar'
        },
        {
          'name': 'mpRemark',
          'label': '备注昵称'

        },
        {
          'name': 'sex',
          'label': '性别',
          'type': 'tagAll',
          'map': {
            '0': '未知',
            '1': '男',
            '2': '女',
            '9': '全部'
          }
        },
        {
          'name': 'country',
          'label': '地区'
        },
        {
          'name': 'tagidListCName',
          'label': '标签'
        },
        {
          'name': 'subscribeTime',
          'label': '关注时间',
          'type': 'date'
        },
        {
          'name': 'remark',
          'label': '备注'
        },
        {
          'width': '280',
          'label': '操作',
          name: 'button',
          fixed: 'right',
          'type': 'button',
          options: [
            {
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
              'label': '黑名单',
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
              'label': '黑名单',
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
      search: '',
      dataList: [
        {
          'page': 1,
          'pageSize': 10,
          'id': '2edfbf6f-1130-499e-89ea-f835bd6b81c3',
          'serialNumber': -1,
          'subscribe': '1',
          'openId': 'o2z9201Y59zhBWnBOaY6Q401jzAo',
          'nickname': 'Paranoid',
          'sex': '1',
          'city': '武汉',
          'country': '中国',
          'province': '湖北',
          'language': 'zh_CN',
          'headimgurl': 'http://thirdwx.qlogo.cn/mmopen/WCtuQWyriazxxiaIKEupQflXczRoaXXNINibRWoMtGEEibEnmib8Iw5pWswkERVfBJYdqhbibC4diaCGwNd3lneHZNyEf4QeVgeafLj/132',
          'subscribeTime': 1578931200000,
          'unionid': null,
          'mpRemark': null,
          'gourpid': '115',
          'tagidList': ',115,126,',
          'subscribeScene': 'ADD_SCENE_SEARCH',
          'qrScene': '0',
          'qrSceneStr': null,
          'extUnsubscribeTime': null,
          'extPhoneNumber': null,
          'extEmail': null,
          'extUsername': null,
          'extIdType': null,
          'extIdNum': null,
          'extHandler': null,
          'extType': null,
          'extAddress': null,
          'extArea': null,
          'dateCreated': 1581614826000,
          'lastUpdated': 1581614826000,
          'validFlag': '1',
          'remark': null,
          'version': 4,
          'tagidListCName': '鼎鼎生活圈,视频群发测试',
          'tagsQueryList': null
        },
        {
          'page': 1,
          'pageSize': 10,
          'id': '411c9ab3-5959-4928-8164-489ca2dd6cdb',
          'serialNumber': -1,
          'subscribe': '1',
          'openId': 'o2z9206gCaio_Eif7Gj2cIRc8Fc8',
          'nickname': '陈煜',
          'sex': '1',
          'city': null,
          'country': '中国',
          'province': '北京',
          'language': 'zh_CN',
          'headimgurl': 'http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCD5mqNFnjJUMOCywV80S3xu0pwR0tc1OhVME7dQUPMxXEZTENGBQLJjRhjrcRVibIAjX0yXRp41MQ/132',
          'subscribeTime': 1578153600000,
          'unionid': null,
          'mpRemark': '陈煜',
          'gourpid': '126',
          'tagidList': ',126,124,',
          'subscribeScene': 'ADD_SCENE_PROFILE_CARD',
          'qrScene': '0',
          'qrSceneStr': null,
          'extUnsubscribeTime': 1578153600000,
          'extPhoneNumber': null,
          'extEmail': null,
          'extUsername': 'dsfs',
          'extIdType': null,
          'extIdNum': null,
          'extHandler': null,
          'extType': null,
          'extAddress': null,
          'extArea': null,
          'dateCreated': 1581614826000,
          'lastUpdated': 1581614826000,
          'validFlag': '1',
          'remark': '被移除黑名单',
          'version': 48,
          'tagidListCName': '视频群发测试,ddlife',
          'tagsQueryList': null
        },
        {
          'page': 1,
          'pageSize': 10,
          'id': '394a5b6c-c9a5-464d-aca1-98389cae9817',
          'serialNumber': -1,
          'subscribe': '1',
          'openId': 'o2z92077h1zi6DAUZL-JcDZ5TLKk',
          'nickname': '疯，神',
          'sex': '1',
          'city': '潜江',
          'country': '中国',
          'province': '湖北',
          'language': 'zh_CN',
          'headimgurl': 'http://thirdwx.qlogo.cn/mmopen/YnaceFEyLUsUn46eWEhCg6K3CJYFs7yMHSPIXVFdUS2msO7WtbJZEJd2Cns2CshFuDw5gvuMWgJBFPk2DiaarHz0CwS67uDicl/132',
          'subscribeTime': 1576598400000,
          'unionid': null,
          'mpRemark': '阿斯蒂芬11',
          'gourpid': '115',
          'tagidList': ',115,126,',
          'subscribeScene': 'ADD_SCENE_QR_CODE',
          'qrScene': '0',
          'qrSceneStr': null,
          'extUnsubscribeTime': null,
          'extPhoneNumber': null,
          'extEmail': null,
          'extUsername': null,
          'extIdType': null,
          'extIdNum': null,
          'extHandler': null,
          'extType': null,
          'extAddress': null,
          'extArea': null,
          'dateCreated': 1581614826000,
          'lastUpdated': 1581614826000,
          'validFlag': '1',
          'remark': '被移除黑名单',
          'version': 35,
          'tagidListCName': '鼎鼎生活圈,视频群发测试',
          'tagsQueryList': null
        },
        {
          'page': 1,
          'pageSize': 10,
          'id': '507be779-2bde-45c7-a34f-bdfe5e1a8b6c',
          'serialNumber': -1,
          'subscribe': '1',
          'openId': 'o2z9209-JPPr_v31OnawN-otqzLY',
          'nickname': '陈龙',
          'sex': '0',
          'city': null,
          'country': null,
          'province': null,
          'language': 'zh_CN',
          'headimgurl': 'http://thirdwx.qlogo.cn/mmopen/WCtuQWyriazzvvpkfDuXtPhScuK1pPgMGxL8ictXW4Og6ibLgUDSdh8ZTmxegnyfQ3bEjfwteyJCwv1ib9wpXvLIetAa5picKAKKE/132',
          'subscribeTime': 1524844800000,
          'unionid': null,
          'mpRemark': 'asdfadsf',
          'gourpid': '115',
          'tagidList': ',115,126,',
          'subscribeScene': 'ADD_SCENE_PROFILE_CARD',
          'qrScene': '0',
          'qrSceneStr': null,
          'extUnsubscribeTime': null,
          'extPhoneNumber': null,
          'extEmail': null,
          'extUsername': null,
          'extIdType': null,
          'extIdNum': null,
          'extHandler': null,
          'extType': null,
          'extAddress': null,
          'extArea': null,
          'dateCreated': 1581614826000,
          'lastUpdated': 1581614826000,
          'validFlag': '0',
          'remark': '被加入黑名单',
          'version': 27,
          'tagidListCName': '鼎鼎生活圈,视频群发测试',
          'tagsQueryList': null
        }
      ],
      listQuery: {
        page: 1,
        pageSize: 5,
        pageCount: 100
      }
    }
  },
  computed: {
    dataLists() {
      return this.dataList.filter(data => !this.search || data.nickname.toLowerCase().includes(this.search.toLowerCase()))
    },
    json: {
      get() {
        return {
          tableConfig: this.tableConfig,
          listQuery: this.listQuery
        }
      },
      set(value) {
        Object.entries(value).forEach(([key, val]) => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.$data.hasOwnProperty(key) && Array.isArray(val)) {
            this.$data[key] = []
            val.forEach((item, i) => {
              this.$set(this.$data[key], i, { ...item })
            })
          // eslint-disable-next-line no-prototype-builtins
          } else if (this.$data.hasOwnProperty(key) && typeof val === 'object') {
            this.$data[key] = {}
            Object.entries(val).forEach(([ckey, cval]) => {
              console.log(ckey, '---')
              this.$set(this.$data[key], ckey, cval)
            })
          }
        })
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.visibility()
    })
  },
  methods: {
    // 权限校验
    visibility() {
      this.tableConfig.forEach((item) => {
        if (item.type === 'button') {
          item.options.forEach((obj) => {
            if (obj.type === 'dropdownItem') {
              this.$set(obj, 'visibilityAll', (item, row) => {
                if (row.nickname.includes('疯，神') && item.label === '编辑') {
                  return false
                }
                return true
              })
            }
          })
        }
      })
      // this.tableConfig[6].options.push({
      //   type: 'visibility',
      //   key: 'callback',
      //   callback: (item, row) => {
      //     if (item.label === '更新密码' && row.a) {
      //       return false
      //     }
      //     return true
      //   }

      // })
    },
    submitTable(item, row, i) {
      console.log(item, 'row--------', row)
    },
    drawerShow() {
      this.$refs.whJson.$data.value2 = 4
      this.drawer = true
    }

  }
}
</script>
<style lang='scss' scoped>

</style>
