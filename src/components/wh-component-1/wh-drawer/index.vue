<template>
  <div>
    <el-drawer
      ref="whDrawer"
      class="wh-drawer"
      :visible.sync="visibleDialog"
      :wrapper-closable="waitingDialog"
      :close-on-press-escape="waitingDialog"
      :modal-append-to-body="toBody"
      :append-to-body="toBody"
      :direction="direction"
      :size="width"
      :before-close="closeDialog"
    >
      <template v-if="withHeader" v-slot:title>
        <span :style="{textAlign:styletext.titleAlign,display:'inline-block', width: '100%'}">{{ titleText }}</span>
      </template>

      <slot v-if="visibleDialog !== false&& slotAll ==='1'" />
      <wh-form
        v-else-if="visibleDialog !== false "
        ref="whForm"
        :size="$attrs.size ||'small'"
        :rules="$attrs.rules || {}"
        :label-width="$attrs.labelWidth || '200px'"
        :layout="$attrs.layout || {row : 25,col: 2}"
        :label-position="$attrs.labelPosition || 'left'"
        :query-config="formObj"
        :params="queryParams"
        @handleChange="handleChange"
      />
      <template v-if="buttonVisible==='1'">
        <div :style="{textAlign:styletext.btnAlign}">
          <wh-button :row="queryParams" :button-config="buttonObj.options" :dropdown-title="buttonObj.title || '更多'" :trigger="buttonObj.trigger || 'hover'" :drop-button-type="buttonObj.buttonType || 'primary'" @handleAall="handleEmite" />
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'WhDrawer',
  props: {
    modalKey: {
      type: String,
      default: () => undefined
    },
    titleText: {
      type: [Boolean, String],
      default: () => '标题'
    },
    dialogType: {
      type: String,
      default: () => 'close'
    },
    width: {
      type: String,
      default: () => '35%'
    },
    direction: {
      type: String,
      default: () => 'rtl'
      //   rtl / ltr / ttb / btt
    },
    waitingDialog: {
      type: Boolean,
      default: () => false
    },
    toBody: {
      type: Boolean,
      default: () => true
    },
    styletext: {
      type: Object,
      default: () => ({
        titleAlign: 'left',
        btnAlign: 'center'
      })
    },
    withHeader: {
      type: Boolean,
      default: () => true
    },
    buttonVisible: {
      type: String,
      default: () => '1'
    },
    slotAll: {
      type: String,
      default: () => '0'
    },
    queryConfig: {
      type: Array,
      default: () => []
    },
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    visibleDialog: {
      get() {
        return this.dialogType !== 'close'
      },
      set(value) {
        if (value === false) this.$emit('update:dialogType', 'close')
      }
    },
    buttonObj() {
      return this.queryConfig.find((item) => item.type === 'button') || {}
    },
    formObj() {
      return this.queryConfig.filter((item) => item.type !== 'button') || []
    }
  },
  methods: {
    closeDialog(done) {
      if (done) done()
      this.$emit('update:dialogType', 'close')
    },
    async handleEmite(item, row, Loading) {
      if (item.name === 'close') {
        this.closeDialog()
        return
      }
      if (this.slotAll === '0') {
        const rules = await this.$refs.whForm.submitForm()
        if (!rules) return
      }
      this.$emit('submitDrawer', item, row, (val) => {
        Loading(val)
        val === '0' ? this.visibleDialog = false : null
      })
    },
    handleChange(val, item) {
      this.$emit('drawerChange', this.modalKey, val, item)
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
