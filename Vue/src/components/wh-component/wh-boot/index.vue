<template>
  <div class="wh-boot" ref="whBoot">
    <!--  头部的内容 -->
    <wh-form
      :rules="rules"
      :query-config="queryConfig"
      :params="queryParams"
      :size="size"
      :layout="layout"
      :labelWidth="labelWidth"
      :labelPosition="labelPosition"
       v-on="$listeners"
    />
    <wh-button
     v-on="$listeners" 
    :buttonConfig="buttonConfig"
    >
      <!--   zk-button 的槽口 -->
      <template slot="btn-left">
        <slot name="top-btn-left" />
      </template>
       <template slot="btn-right">
        <slot name="top-btn-right" />
      </template>
    </wh-button>
    <wh-table
      :data-key="dataKey"
      :table-config="tableConfig"
      :data-list="dataList"
      :list-query="listQuery"
      :heigth="$attrs.heigth"
      :maxHeight="$attrs.maxHeight"
      :border="$attrs.border"
      :tagColor="$attrs.tagColor"
      :paginationShow="paginationShow"
       v-on="$listeners"
    >
    </wh-table>
    <!-- 模态框 -->
    <template  v-if="dialogItemAll">
        
      <template v-for="(val,key) in modalConfig">
      <wh-dialog
        :key="key"
        v-if="!val.type || val.type ==='dialog'"
        :modalKey="key"
        :fullscreen="val.fullscreen"
        :styletext="val.styletext"
        :waitingDialog="val.waitingDialog"
        :width="val.width"
        :toBody="val.toBody"
        :top="val.top"
        :dialogType="val.dialogType"
        :titleText="val.titleText"
        :size="val.size"
        :rules="val.rules"
        :labelWidth="val.labelWidth"
        :layout="val.layout"
        :labelPosition="val.labelPosition"
        :query-config="val.queryConfig"
        :query-params="val.queryParams"
        :slotAll="val.slotAll"
        :buttonVisible="val.buttonVisible || '1'"
         v-on:update:dialogType="val.dialogType = $event"
         v-on="$listeners"
      >
        <template v-if="val.slotAll&& val.slotAll ==='1'">
          <slot :name="'dialog'+val.slotName" :row="val">
            {{ val.slotName }}
          </slot>
        </template>
      </wh-dialog>
      <wh-drawer
         v-else
        :key="key"
        :modalKey="key"
        :styletext="val.styletext"
        :waitingDialog="val.waitingDialog"
        :withHeader="val.withHeader"
        :width="val.width"
        :dialogType="val.dialogType"
        :titleText="val.titleText"
        :direction="val.direction"
        :size="val.size"
        :rules="val.rules"
        :toBody="val.toBody"
        :labelWidth="val.labelWidth"
        :layout="val.layout"
        :labelPosition="val.labelPosition"
        :query-config="val.queryConfig"
        :query-params="val.queryParams"
        :slotAll="val.slotAll"
        :buttonVisible="val.buttonVisible"
         v-on:update:dialogType="val.dialogType = $event"
         v-on="$listeners"
      >
        <template v-if="val.slotAll&& val.slotAll ==='1'">
          <slot :name="'drawer'+val.slotName" :row="val">
            {{ val.slotName }}
          </slot>
        </template>
      
      </wh-drawer>
      </template>

    </template>
    </div>
</template>
<script>
export default {
  name: 'WhBoot',
  props: {
    /* form 参数 */
    queryConfig: {
      type: Array,
      default: () => []
    },
    queryParams: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => {}
    },
    size: {
      // medium / small / mini
      type: String,
      default: () => 'medium'
    },
    labelWidth: {
      type: String,
      default: () => '100px'
    },
    labelPosition: {
      type: String,
      default: () => 'left'
    },
    layout: {
      type: Object,
      default: () => {
        return {
          row: 20,
          col: 4
        }
      }
     },
    /* 按钮参数 */
    buttonConfig: {
      type: Array,
      default: () => []
    },

    /* 表格参数 */
    tableConfig: {
      type: Array,
      default: () => []
    },
    paginationShow: {
      type: Boolean,
      default: () => true
    },
    dataList: {
      type: Array,
      default: () => []
    },
    dataKey: {
      type: String,
      default: () => 'id'
    },
    listQuery: {
      type: Object,
      default: () => ({})
    },
    // 弹窗的 对象
    modalConfig:{
      type:[Object,Boolean],
      default:() => false
    }
  },
  inheritAttrs: false,
  computed: {
    /* 模态框的参数 */
    dialogItemAll(){
      return Object.keys(this.modalConfig).length>0   || false
    },
  },
  methods:{
  }
  
}
</script>
