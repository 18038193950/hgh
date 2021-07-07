
export default {
  data() {
    return {
      queryParams: {},
      queryConfig: [],
      buttonConfig: [],
      tableConfig: [],
      size: 'medium',
      rules: {},
      layout: {
        row: 20,
        col: 3
      },
      labelWidth: '100px',
      labelPosition: 'left',
      listQuery: {
        page: 1,
        pageSize: 5,
        pageCount: 10
      },
      modalConfig: [],
      dataList: [],
      heigth: '300px',
      maxHeight: '500px',
      border: false,
      tagColor: { 0: 'danger', 1: null, 2: 'success', 3: 'info', 4: 'warning' },
      paginationShow: true,
      selectList: []
    }
  },
  watch: {
    selectList: {
      handler(val) {
        this.buttonConfig.forEach(item => {
          if (item.type === 'dropdownItem') {
            this.$set(item, 'visibility', val.length > 0 ? '1' : '0')
          }
        })
      }
    },
    methods: {
    // queryConfig 的事件
      submitForm(item, row, Loading) {
        Loading('1')
        setTimeout(() => Loading('0'), 500)
      },
      handleChange(val, item) {
        if (item.change && item.relationDetail) {
          if (item.type === 'collapse') {
            const value = val && val === '0' ? '1' : '0'
            this.$set(item, 'incopos', value)
            this.visibilityAll(Object.values(item.relationDetail), item.relationDetail[value], this.queryConfig)
          } else {
            const value = val
            this.visibilityAll(Object.values(item.relationDetail), item.relationDetail[value], this.queryConfig)
          }
        }
      },
      // buttonConfig 的事件
      handleAall(item, row, Loading) {
      },
      // 是否要显示 confirm
      confirmShow(item, row, Loading) {
      // 普通弹窗
        this.$confirm(`确定${item.remark}吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(async() => {
            setTimeout(() => {
              this.$message.success(`${item.remark}成功`)
              typeof Loading === 'function' ? Loading('0') : null
            }, 1000)
          })
          .catch(error => {
            console.info(error)
            Loading('0')
          })
      },
      // 点击表格行 或者表格按钮的方事件
      submitTable(item, row, index) {
        if (item === 'row') return
        item.modalKey
          ? ((this.modalConfig[item.modalKey].dialogType = '1'),
          (this.modalConfig[item.modalKey].queryParams = row))
          : this.confirmShow(item, row)
      },
      // dialog 按钮提交的事件
      submitDialog(item, row, Loading) {
        Loading('1')
        item.modalKey ? (this.modalConfig[item.modalKey].dialogType = '1') : null
        setTimeout(() => {
          Loading('0')
        }, 1000)
      },
      // drawer 按钮提交的事件
      submitDrawer(item, row, Loading) {
        Loading('1')
        item.modalKey ? (this.modalConfig[item.modalKey].dialogType = '1') : null
        setTimeout(() => {
          Loading('0')
        }, 1000)
      },
      // dialog 表单的change 事件
      dialogChange(key, val, item) {

      },
      // drawer 表单的change 事件
      drawerChange(key, val, item) {

      },
      // 清空form数据 的方法
      formDataClear(formData, params) { // 所有数据清空
        Object.entries(formData).forEach(([key, val]) => {
          if (Array.isArray(val)) {
            this.$set(params, key, [])
          } else if (typeof val === 'object' && val !== null) {
            this.$set(params, key, {})
          } else if (typeof item === 'string') {
            this.$set(params, key, null)
          }
        })
      },
      // 控制显示和隐藏的方法
      visibilityAll(relationDetail, value, list, params) {
        const relationDetailFlat = relationDetail.flat()
        const showItem = value
        const queryConfig = list
        queryConfig.forEach((item) => {
          const name = item.name
          if (relationDetailFlat.includes(name) && !(showItem.includes(name))) {
            this.$set(item, 'visibility', '0')
            this.formDataClear({ name: params[name] }, params)
          } else if (showItem.length > 0 && showItem.includes(name)) {
            this.$set(item, 'visibility', '1')
          }
        })
      },
      // 表格 多选的事件
      onSelectedList(list) {
        this.selectList = list
      }

    }
  }
}
