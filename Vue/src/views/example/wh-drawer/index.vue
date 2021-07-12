<template>
  <div class="app-container">
    <el-button type="primary" plain @click="dialogType='add'">OpenDrawer</el-button>
    <wh-drawer slot-all="1" :width="width" :title-text="titleText" :top="top" :styletext="styletext" :dialog-type.sync="dialogType">
      <wh-form
        ref="whform"
        :query-config="queryConfig"
        :params="queryParams"
        :label-width="labelWidth"
        :layout="layout"
        @handleChange="drawerChange"
        @submitForm="submitDrawer"
      />
      <wh-json ref="whJson" :direction="direction" :json.sync="json" :drawer.sync="drawer " />
    </wh-drawer>
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
      dialogType: 'close',
      direction: 'ltr',
      titleText: '编辑一下',
      width: '50%',
      top: '15vh',
      styletext: {
        titleAlign: 'left',
        btnAlign: 'right'
      },
      labelWidth: '100px',
      queryConfig: [
        {
          name: 'nickname',
          label: 'input',
          span: 12
        },
        {
          name: 'number',
          type: 'number',
          label: 'number',
          span: 12
        },
        {
          name: 'password',
          type: 'password',
          label: 'password',
          span: 12
        },
        {
          name: 'date',
          type: 'date',
          format: 'yyyy-MM-dd',
          valueFormat: 'yyyy-MM-dd',
          label: 'date',
          span: 12
        },
        {
          name: 'collapse',
          type: 'collapse',
          inco: '1',
          incopos: '1',
          label:
            'collapse select radio 如果change 设置true 触发change 事件 可以根据 relationDetail 控制表单的显示隐藏',
          span: 24,
          relationDetail: {
            '0': [],
            '1': ['date', 'select', 'selectfilter']
          }
        },

        {
          name: 'select',
          type: 'select',
          label: 'select',
          change: true,
          span: 20,
          relationDetail: {
            '0': ['checkbox', 'checkbox1'],
            '1': ['radio', 'checkbox1'],
            '2': ['checkbox', 'radio']
          },
          options: [
            {
              label: 'select1',
              value: '0'
            },
            {
              label: 'select2',
              value: '1'
            },
            {
              label: 'select3',
              value: '2'
            }
          ]
        },
        {
          name: 'selectfilter',
          type: 'selectfilter',
          label: 'selectfilter',
          span: 17,
          options: [
            {
              label: 'selectfilter1',
              value: '1'
            },
            {
              label: 'selectfilter2',
              value: '2'
            },
            {
              label: 'selectfilter3',
              value: '0'
            }
          ]
        },
        {
          name: 'radio',
          type: 'radio',
          label: 'radio',
          span: 18,
          change: true,
          relationDetail: {
            '0': ['select', 'selectfilter'],
            '1': ['date', 'selectfilter'],
            '2': ['select', 'date']
          },
          options: [
            {
              label: 'radio1',
              value: '1'
            },
            {
              label: 'radio2',
              value: '2'
            },
            {
              label: 'radio3',
              value: '0'
            }
          ]
        },
        {
          name: 'checkbox',
          type: 'checkbox',
          label: 'checkbox',
          span: 18,
          options: [
            {
              label: 'checkbox1',
              value: '1'
            },
            {
              label: 'checkbox2',
              value: '2'
            },
            {
              label: 'checkbox3',
              value: '0'
            }
          ]
        },
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'checkbox',
          span: 24,
          options: [
            {
              label: 'checkbox1',
              value: '0'
            },
            {
              label: 'checkbox2',
              value: '1'
            },
            {
              label: 'checkbox3',
              value: '2'
            },
            {
              label: 'checkbox4',
              value: '3'
            },
            {
              label: 'checkbox5',
              value: '4'
            },
            {
              label: 'checkbox6',
              value: '5'
            },
            {
              label: 'checkbox7',
              value: '6'
            },
            {
              label: 'checkbox8',
              value: '7'
            }
          ]
        },
        {
          name: 'textarea',
          type: 'textarea',
          label: 'textarea',
          resize: 'vertical',
          autosize: { minRows: 4, maxRows: 6 },
          span: 24
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
              label: '编辑代码'
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
      layout: {
        row: 20,
        col: 1
      },
      queryParams: {
        textarea: ''
      }
    }
  },
  computed: {
    queryParamsAll() {
      if (!this.queryParams) return false
      const list = (Object.keys(this.queryParams)).filter(item => item !== 'textarea').map((parm) => ({ parm: this.queryParams[parm] }))
      return list
    },
    json: {
      get() {
        return {
          titleText: this.titleText,
          width: this.width,
          styletext: this.styletext,
          queryConfig: this.queryConfig,
          layout: this.layout,
          labelWidth: this.labelWidth
        }
      },
      set(value) {
        Object.entries(value).forEach(([key, val]) => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.$data.hasOwnProperty(key) && Array.isArray(val)) {
            this.$data[key] = []
            val.forEach((item, i) => {
              this.$set(this.$data[key], i, item)
            })
            // eslint-disable-next-line no-prototype-builtins
          } else if (this.$data.hasOwnProperty(key) && typeof val === 'object') {
            this.$data[key] = {}
            Object.entries(val).forEach(([ckey, cval]) => {
              this.$set(this.$data[key], ckey, cval)
            })
          } else {
            this.$set(this.$data, key, val)
          }
        })
      }
    }
  },
  watch: {
    queryParamsAll: {
      deep: true,
      handler(val) {
        this.queryParams.textarea = JSON.stringify(val)
      }
    },
    'drawer': {
      handler(val) {
        if (val === false) {
          this.top = '15vh'
        }
      }
    }
  },
  methods: {
    submitDrawer(item, row, Loading) {
      Loading('1')
      setTimeout(() => {
        // this.dialogType = 'close'
        this.top = '0'
        this.drawer = true
        this.$nextTick(() => {
          this.$refs.whJson.$data.value2 = 5
        })
        Loading('0')
      }, 500)
    },
    drawerChange(val, item) {
      console.log(item, '------')
      if (item.type === 'collapse') {
        const value = val && val === '0' ? '1' : '0'
        this.$set(item, 'incopos', value)
        this.visibilityAll(Object.values(item.relationDetail), item.relationDetail[value], this.queryConfig)
      } else {
        const value = val
        this.visibilityAll(Object.values(item.relationDetail), item.relationDetail[value], this.queryConfig)
      }
    },
    // 控制显示和隐藏的方法
    visibilityAll(relationDetail, value, list) {
      const relationDetailFlat = relationDetail.flat()
      const showItem = value
      const queryConfig = list
      queryConfig.forEach((item) => {
        const name = item.name
        if (relationDetailFlat.includes(name) && !(showItem.includes(name))) {
          this.$set(item, 'visibility', '0')
        } else if (showItem.length > 0 && showItem.includes(name)) {
          this.$set(item, 'visibility', '1')
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
