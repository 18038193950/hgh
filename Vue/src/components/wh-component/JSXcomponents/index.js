import Dialog from '../components/dhdialog/Dialog'

const modulesFiles = require.context('../components', true, /\index.jsx$/)

export function dhmixins() {
  const BEFORE = 'before' // 事情之前
  const AFTER = 'after' // 事件之后
  return {
    data() {
      return {
        queryParams: {},
        queryConfig: [
          {
            field: 'id',
            label: 'Id',
            scopedSlots: {
              'prefix': props => {
                return <a-icon type='user' />
              },
              'suffix': props => {
                return <a-icon type='info-circle' />
              }
            }
          },
          {
            field: 'systemCode',
            label: '应用Id'
          },
          {
            field: 'button',
            htmlType: 'button',
            options: [
              {
                name: 'query',
                type: 'primary',
                label: '查询'
              },
              {
                label: '重置',
                type: '-',
                name: 'resetForm'
              }
            ],
            label: ''
          }
        ],
        buttonConfig: [
          {
            label: '新增',
            type: 'primary',
            name: 'add',
            style: 'margin: 10px auto'
          }
        ],
        tableConfig: [
          {
            title: '序号',
            dataIndex: 'id'
          },
          {
            title: '配置类型',
            dataIndex: 'name'
          },
          {
            title: '企业id',
            dataIndex: '企业id'
          },
          {
            title: '创建时间',
            dataIndex: '版本号sss'
          },
          {
            title: '操作',
            align: 'center',
            fixed: 'right',
            customRender: (text, record, index) => {
              return (
                <span>
                  <dh-button {...{ on: { 'handleEvent': ({ props }) => this.handleEvent({ props, row: record }) }}} buttonConfig = {
                    [{
                      type: 'primary',
                      icon: 'edit',
                      name: 'edit',
                      position: 'row',
                      label: '编辑'
                    }, {
                      type: 'danger',
                      name: 'del',
                      htmlType: 'Tooltip',
                      shape: 'circle',
                      icon: 'delete',
                      position: 'row',
                      label: '删除'
                    }]
                  }></dh-button>

                </span>
              )
            }
          }
        ],
        dialogConfig: [
          {
            field: 'Id',
            label: 'Id',
            span: 12,
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
            scopedSlots: {
              'prefix': props => {
                return <a-icon type='user' />
              },
              'suffix': props => {
                return <a-icon type='info-circle' />
              }
            },
            rules: [
              { required: true, message: 'Please input Activity name', trigger: 'blur' },
              { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
            ]
          },
          {
            field: 'systemCode',
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
            span: 12,
            label: '应用Id'
          },
          {
            field: 'systemCode1',
            labelCol: { span: 4 },
            wrapperCol: { span: 20 },
            span: 12,
            label: '应用Id1'
          }
        ],
        page: 1,
        pageSize: 10,
        total: 0,
        dataList: [],
        dialogParams: {},
        initialQuery: true
      }
    },
    computed: {
      handleMapCrud() {
        return new Map([
          ['resetForm', () => this.dhForm.resetFields()],
          ['query', (props) => this.handlequery(props)],
          ['add', (props) => this.handleadd(props)],
          ['edit', (props, row) => this.handleedit(props, row)],
          ['del', (props, row) => this.handledel(props, row)]
        ])
      },
      dhForm() { // dhForm ref
        return this.$refs.dhForm
      },
      params() {
        return {
          page: this.page,
          pageSize: this.pageSize,
          total: this.total,
          param: {
            ...this.queryParams
          }
        }
      },
      pagination: {
        get() {
          return {
            current: this.page,
            pageSize: this.pageSize,
            total: this.total
          }
        }
      }
    },
    created() {
      if (this.initialQuery) {
        this.handleEvent({ props: { name: 'query' }})
      }
    },
    methods: {
      async handlequery() { // 查询
        console.log('查询')
        try {
          const { list, page, pageSize, total } = await this.request('query', { data: this.params })
          this.dataList = list
          this.page = page
          this.pageSize = pageSize
          this.total = total
        } catch (error) {
          console.log(error)
        }
      },
      async handlePageOrSize({ page, pageSize }) { // 分页
        this.page = page
        this.pageSize = pageSize
        this.handlequery()
      },
      async handleEvent({ props, row }) { // 所有的按钮的事件
        const { name } = props
        const handleBefore = this[`${BEFORE}${name}`]
        let rows
        if (handleBefore) { // 事情前是否过滤数据
          rows = await handleBefore(props, row)
        }
        rows = rows || row
        if (name && this.handleMapCrud.has(name)) { // 基本方法和事件
          this.handleMapCrud.get(name)(props, rows)
        } else {
          this.handleOtherEvent(name, props, rows) // 其他方法和事件
        }
      },
      handleOtherEvent(name, props, row) { // 其他方法和事件
        this[`handel${name}`] && this[`handel${name}`](props, row)
      },
      handleadd(props) { // 新增
        this.showDialog(props)
      },
      handleedit(props, row) { // 编辑
        this.showDialog(props, row)
      },
      handledel(props, row) { // 删除
        this.showConfirm(props, row)
      },
      showConfirm(props, row) { // 确认框操作
        const { label, name } = props
        this.$confirm({
          title: '温馨提示',
          content: `确定${label}吗？`,
          onOk: async() => {
            try {
              let rows = { ...row }
              const handleConfirmBefore = this[`${BEFORE}confirm${name}`]
              if (handleConfirmBefore) { // 确认框事情前是否过滤数据
                rows = await handleConfirmBefore(props, rows)
              }
              await this.request(name, { data: rows }) // 弹框的操作
              this.$message.success(`${label}成功`)
              // 判断删除以后还有没有其他操作
              const handleAfter = this[`${AFTER}${props.name}`]
              if (handleAfter) {
                await handleAfter(props, row)
              }
              this.handlequery()
            } catch (error) {
              console.log(error)
            }
          },
          onCancel() {}
        })
      },
      async showDialog(props, row) { // 弹框的操作
        const { label, name } = props
        if (row) {
          this.dialogParams = { ...row } /* 浅拷贝 */
        } else {
          this.dialogParams = {}
        }
        this.$dialog(
          { formConfig: this.dialogConfig, formParams: this.dialogParams
          },
          {
            title: label,
            width: '50%',
            centered: true,
            maskClosable: false,
            on: {
              'dialogEvent': async({ props, refs, close }) => {
                try {
                  const validate = await refs.dhForm.validate()
                  if (validate) {
                    let rows = { ...this.dialogParams }
                    const handleDialogBefore = this[`${BEFORE}dialog${name}`]
                    if (handleDialogBefore) { // 弹框事情前是否过滤数据
                      rows = await handleDialogBefore(props, rows)
                    }
                    await this.request(name, { data: rows }) // 弹框的操作
                    this.$message.success(`${label}成功`)
                    const handleAfter = this[`${AFTER}${props.name}`]
                    if (handleAfter) {
                      await handleAfter(props, row)
                    }
                    this.handlequery()
                  }
                  close()
                } catch (error) {
                  console.log(error, name)
                }
                // close()
                refs.confirmLoading = false
              }
            }
          })
      }
    }
  }
}

export default {
  ...modulesFiles.keys().reduce((prve, next) => {
    const value = modulesFiles(next).default
    value.name && (prve[value.name] = value)
    return prve
  }, {}),
  install(Vue) {
    modulesFiles.keys().forEach((modulePath) => { // 动态注入组件
      const value = modulesFiles(modulePath).default
      value.name ? Vue.component(value.name, value) : null
    })
    Vue.use(Dialog)
  }
}
