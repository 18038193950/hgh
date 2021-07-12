<template>
  <el-dialog
    ref="whDialog"
    class="wh-dialog"
    :width="width"
    :visible.sync="visibleDialog"
    :before-close="closeDialog"
    :close-on-press-escape="waitingDialog"
    :close-on-click-modal="waitingDialog"
    :top="top"
    :fullscreen="fullscreen"
    :modal-append-to-body="toBody"
    :append-to-body="toBody"
  >
    <template v-if="titleText !== false" v-slot:title>
      <span :style="{textAlign:styletext.titleAlign,display:'inline-block', width: '100%'}">{{ titleText }}</span>
    </template>

    <slot v-if="visibleDialog !== false&& slotAll ==='1'" />
    <wh-form
      v-else-if="visibleDialog !== false "
      ref="whForm"
      :size="$attrs.size"
      :rules="$attrs.rules"
      :label-width="$attrs.labelWidth"
      :layout="$attrs.layout || {row : 25,col: 2}"
      :label-position="$attrs.labelPosition"
      :query-config="formObj"
      :params="queryParams"
      @handleChange="handleChange"
    />
    <template v-if="buttonVisible==='1'" v-slot:footer>
      <div :style="{textAlign:styletext.btnAlign}">
        <wh-button :row="queryParams" :button-config="buttonObj.options" :dropdown-title="buttonObj.title || '更多'" :trigger="buttonObj.trigger || 'hover'" :drop-button-type="buttonObj.buttonType || 'primary'" @handleAall="handleEmite" />
      </div>
    </template>
  </el-dialog>
</template>
<script>
export default {
  name: 'WhDialog',
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
      default: () => '50%'
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
        btnAlign: 'right'
      })
    },
    buttonVisible: {
      type: String,
      default: () => '1'
    },
    top: {
      type: String,
      default: () => '15vh'
    },
    fullscreen: {
      type: Boolean,
      default: () => false
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
        if (!rules) return false
      }
      this.$emit('submitDialog', item, row, (val) => {
        Loading(val)
        val === '0' ? this.visibleDialog = false : null
      })
    },
    handleChange(val, item) {
      this.$emit('dialogChange', this.modalKey, val, item)
    }
  }
}
</script>
