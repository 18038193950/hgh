<template>
  <el-form :model="formData" :rules="rules">
    <el-table
      :data="formData.tableList"
      :show-header="false"
      style="width: 100%"
    >
      <el-table-column>
        <template slot-scope="scope">
          <el-form-item
            :prop="'tableList.' + scope.$index + '.dateTime'"
            :rules="rules.dateTime"
          >
            <el-date-picker
              v-model="scope.row.dateTime"
              size="mini"
              type="date"
              value-format="timestamp"
              placeholder="请选择日期"
            />
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-form-item
            :prop="'tableList.' + scope.$index + '.num'"
            :rules="rules.num"
          >
            <el-input
              v-model="scope.row.num"
              type="text"
              size="mini"
            />
          </el-form-item>
        </template>
      </el-table-column>
    </el-table>
  </el-form>
</template>

<script>
export default {
  name: 'ComponentName',
  data() {
    return {
      formData: {
        tableList: [
          {
            dateTime: '',
            num: ''
          },
          {
            dateTime: '',
            num: ''
          }
        ]
      }
    }
  },
  computed: {
    rules() {
      const checkDateTime = (rule, value, callback) => {
        if (value == null || value === '') {
          callback(new Error('请选择日期'))
        } else {
          callback()
        }
      }
      const checkNum = (rule, value, callback) => {
        if (value == null || value === '') {
          callback(new Error('请输入'))
        } else if (!new RegExp(/(^[1-9]([0-9]{1,7})$|^[1-9]$)/).test(value)) {
          callback(new Error('请输入1-8位数字'))
        } else {
          callback()
        }
      }
      const obj = {
        dateTime: [
          { validator: checkDateTime, trigger: ['change', 'blur'] }
        ],
        num: [
          { validator: checkNum, trigger: 'blur' }
        ]
      }
      return obj
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
