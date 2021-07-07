<template>
  <el-form
    ref="whForm"
    :model="params"
    :label-width="labelWidth"
    :label-position="labelPosition"
    class="wh-form app-container"
    :rules="rules"
    :size="size"
  >
    <el-row v-for="(item, index) in querys" :key="index" :gutter="layout.row || 20">
      <el-col
        v-for="(param, i) in item"
        :key="i+param.name"
        :span="param.span || parseInt(24 / layout.col)"
      >
        <transition name="el-zoom-in-top">
          <!-- 输入框 -->
          <el-form-item
            v-if="(!param.type || param.type === 'input' || param.type === 'number')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-input
              v-model="params[param.name]"
              :type="param.type || 'input'"
              :clearable="!param.clearable || param.clearable==='1'"
              :disabled="param.disabled && (param.disabled === '1')"
              :placeholder="(param.placeholder || '请输入'+ param.label ) | placeholderIi8n"
            />
          </el-form-item>
          <!-- text -->
          <el-form-item
            v-else-if="(param.type==='text')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"

            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <span class="wh-form-text" v-text="params[param.name]" />
          </el-form-item>

          <el-form-item
            v-else-if="(param.type==='money')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-input
              v-model="params[param.name]"
              :type="param.type || 'input'"
              :clearable="!param.clearable || param.clearable==='1'"
              :disabled="param.disabled && (param.disabled === '1')"
              :placeholder="(param.placeholder || '请输入'+ param.label ) | placeholderIi8n"
              @blur="inputMoney($event,param.name)"
            />
          </el-form-item>

          <!-- 密码框 -->
          <el-form-item
            v-else-if="(param.type === 'password')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-input
              v-model="params[param.name]"
              show-password
              :disabled="param.disabled && (param.disabled === '1')"
              :placeholder="(param.placeholder || '请输入'+ param.label ) | placeholderIi8n"
            />
          </el-form-item>

          <!-- 多行文本域 -->
          <el-form-item
            v-else-if="(param.type === 'textarea')&&(!param.visibility || param.visibility ==='1' ) "
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-input
              v-model="params[param.name]"
              type="textarea"
              :resize="param.resize"
              :disabled="param.disabled && (param.disabled === '1')"
              :autosize="param.autosize || { minRows: 4, maxRows: 4}"
              :placeholder="(param.placeholder || '请输入'+ param.label ) | placeholderIi8n"
            />
          </el-form-item>

          <!--  date 时间  -->
          <el-form-item
            v-else-if="(['date','week','month','year','dates'].includes(param.type))&&(!param.visibility || param.visibility ==='1' ) "
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth || null"
          >
            <el-date-picker
              v-model="params[param.name]"
              :type="param.type"
              :disabled="param.disabled && (param.disabled === '1')"
              :value-format="param.valueFormat || `yyyy-MM-dd`"
              :format="param.format || `yyyy-MM-dd`"
              :placeholder="(param.placeholder || '请选择'+ param.label ) | placeholderIi8n"
            />
          </el-form-item>
          <!--  有事件的下拉 select 下拉框 -->
          <el-form-item
            v-else-if="(param.type === 'select' && param.change)&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-select
              v-model="params[param.name]"
              :placeholder="(param.placeholder || '请选择'+ param.label ) | placeholderIi8n"
              :clearable="!param.clearable || param.clearable==='1'"
              :disabled="param.disabled && (param.disabled === '1')"
              @change="(val)=>handleChange(val,param)"
            >
              <el-option
                v-for="ite in param.options"
                :key="ite.value"
                :label="ite.label"
                :value="ite.value"
              />
            </el-select>
          </el-form-item>
          <!--  select 下拉框 -->
          <el-form-item
            v-else-if="(param.type === 'select') &&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-select
              v-model="params[param.name]"
              :placeholder="(param.placeholder || '请选择'+ param.label ) | placeholderIi8n"
              :clearable="!param.clearable || param.clearable==='1'"
              :disabled="param.disabled && (param.disabled === '1')"
            >
              <el-option
                v-for="ite in param.options"
                :key="ite.value"
                :label="ite.label"
                :value="ite.value"
              />
            </el-select>
          </el-form-item>

          <!--  select 下拉框 多选 -->
          <el-form-item
            v-else-if="(param.type === 'selectfilter')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-select
              v-model="params[param.name]"
              :disabled="param.disabled && (param.disabled === '1')"
              multiple
              filterable
              :clearable="!param.clearable || param.clearable==='1'"
              allow-create
              default-first-option
              :placeholder="(param.placeholder || '请输入'+ param.label ) | placeholderIi8n"
            >
              <el-option
                v-for="ite in param.options"
                :key="ite.value"
                :label="ite.label"
                :value="ite.value"
              />
            </el-select>
          </el-form-item>

          <!-- 有事件的单选 按钮 -->
          <el-form-item
            v-else-if="(param.type === 'radio' && param.change)&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-radio-group v-model="params[param.name]" @change="(val)=>handleChange(val,param)">
              <el-radio
                v-for="ite in param.options"
                :key="ite.value"
                :disabled="param.disabled && (param.disabled === '1')"
                :label="ite.value"
              >{{ ite.label || ite.value }}</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 单选 按钮 -->
          <el-form-item
            v-else-if="(param.type === 'radio')&&(!param.visibility || param.visibility ==='1' )"
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-radio-group v-model="params[param.name]">
              <el-radio
                v-for="ite in param.options"
                :key="ite.value"
                :disabled="param.disabled && (param.disabled === '1')"
                :label="ite.value"
              >{{ ite.label || ite.value }}</el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 多选 按钮 -->
          <el-form-item
            v-else-if="(param.type === 'checkbox')&&(!param.visibility || param.visibility ==='1' ) "
            :label="param.label | labelIi8n"
            :prop="param.name"
            :rules="param.rules|| rules[param.name]"
            :label-width="param.labelWidth"
          >
            <el-checkbox-group v-model="params[param.name]">
              <el-checkbox
                v-for="ite in param.options"
                :key="ite.label"
                :disabled="param.disabled && (param.disabled === '1')"
                :name="param.name"
                :label="ite.value"
              >{{ ite.label || ite.value }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <!--  折叠面板 -->
          <div
            v-else-if="param.type === 'collapse'&&(!param.visibility || param.visibility ==='1' )"
            class="collapse"
            @click="()=>handleChange(param.incopos,param)"
          >
            <span>{{ param.label | labelIi8n }}</span>
            <i
              v-if="(!param.inco || param.inco ==='1' )"
              :class="{'el-icon-arrow-up':true,'is-active':param.incopos&&param.incopos==='0'}"
            />
          </div>
          <!-- 槽口 -->
          <div
            v-else-if="param.type === 'slot'&&(!param.visibility || param.visibility ==='1' )"
          >
            <slot :name="param.name" :item="param" />
          </div>

          <!--  button 按钮 -->
          <el-form-item v-else-if="param.type === 'button'" :label-width="param.labelWidth || null" class="form-item-button">
            <div :style="{textAlign:param.btnAlign || 'center',width: '100%'}">
              <wh-button :row="params" :button-config="param.options" @handleAall="handleEmite" />
            </div>
          </el-form-item>
        </transition>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'WhForm',
  filters: {
    labelIi8n: label => {
      return typeof label === 'function' ? label() : label
    },
    placeholderIi8n(placeholder) {
      return typeof placeholder === 'function' ? placeholder() : placeholder
    }
  },
  props: {
    queryConfig: {
      type: Array,
      default: () => []
    },
    params: {
      type: Object,
      default: () => {},
      required: true
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
    rules: {
      type: Object,
      default: () => ({})
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
    }
  },
  data() {
    return {}
  },
  computed: {
    querys: {
      get() {
        let i = -1
        let span = 0
        const col = parseInt(24 / this.layout.col)
        return this.queryConfig.reduce((perv, next, index) => {
          const row = next.span ? span + next.span : span + col
          if (span % 24 === 0 || row > 24) {
            perv.push([])
            i++
            span = 0
          }
          next.span ? span += next.span : span += col
          perv[i].push(next)
          return perv
        }, [])
      },
      set(value) {}
    }
  },
  created() {
    // 初始化加载 过滤 数据
    for (const item of this.queryConfig) {
      if (item.type === 'checkbox' || item.type === 'selectfilter') {
        this.$set(
          this.params,
          item.name,
          item.value || this.params[item.name] || []
        )
      } else {
        if (item.name) {
          this.$set(
            this.params,
            item.name,
            item.value || this.params[item.name] || null
          )
        }
      }
    }
  },

  methods: {
    //  提交
    submitForm(formName = 'whForm', item, row, callback) {
      return new Promise((resolve, reject) => {
        this.$refs[formName].validate(valid => {
          if (valid) {
            resolve(true)
            if (item) {
              this.$emit('submitForm', item, row, callback)
            }
          } else {
            console.log('error submit!!')
            resolve(false)
          }
        })
      })
    },
    // 重置
    resetForm(formName = 'whForm') {
      this.$refs[formName].resetFields()
    },
    handleEmite(item, row, callback) {
      if (item.name === 'resetForm') {
        this.resetForm()
      } else {
        this.submitForm('whForm', item, row, callback)
      }
    },
    handleChange(val, param) {
      this.$emit('handleChange', val, param)
    },
    inputMoney(val, name) {
      // 金额添加千分位
      const comdify = function(e) {
        if (!e) return e
        const n = e.toString()
        const str = n.split('.')
        const re = /\d{1,3}(?=(\d{3})+$)/g
        const n1 = str[0].replace(re, '$&,')
        return str.length > 1 && str[1] ? `${n1}.${str[1]}` : `${n1}.00`
      }
      const value = comdify(val.target.value)
      this.$set(this.params, name, value)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-date-editor {
  width: 100%;
}
  .wh-form-text{
    width: 100%;
      display: inline-block;
      border-bottom: 1px solid #d0dde5;
  }
.el-select {
  width: 100%;
}
.el-autocomplete {
  width: 100%;
}
.collapse {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2f8fb;
  height: 36px;
  margin-bottom: 22px;
  .el-icon-arrow-up {
    color: #006cb7;
    font-size: 30px;
    transition: transform 0.3s;
  }
  .el-icon-arrow-up.is-active {
    transform: rotate(180deg);
  }
}
</style>
<style lang="scss">
.form-item-button {
  padding-right: 5%;
  text-align: right;
  > div:first-child {
    display: flex;
  }
}
</style>

