<template>
  <div class="app-container">
    <wh-form-tabel
      class="wh-form-tabel table-border-bottom"
      :form-data="formData"
    >
      <template v-slot:headerdel>
        <span @click="formAdd"><i class="el-icon-circle-plus" /></span>
      </template>
      <template v-slot:inlinedel="{row}">
        <span @click="tabelRow(row)"><i class="el-icon-error" /></span>
      </template>
    </wh-form-tabel>
    <el-button style="marginTop:20px" @click="drawer=true">编辑一下</el-button>
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
      // 动态表格的数据
      formData: {
        tableList: [
          {
            Catergory: null,
            Person: null,
            birth: null,
            Numberpeople: null,
            people: null
          },
          {
            Catergory: null,
            Person: null,
            birth: null,
            Numberpeople: null,
            people: null
          }
        ],
        tableConfig: [
          {
            name: 'Catergory',
            label: 'Catergory*',
            width: 200,
            type: 'select',
            options: [
              {
                value: 'A-Directors, Partner & non manual work employee',
                label: 'A-Directors, Partner & non manual work employee'
              },
              {
                value: 'B-Caretakers, Maintemance, Porters & Security',
                label: 'B-Caretakers, Maintemance, Porters & Security'
              },
              {
                value:
                  'C2-Individual Caretakers, Maintemance, Porters & Security',
                label:
                  'C2-Individual Caretakers, Maintemance, Porters & Security'
              }
            ]
          },
          {
            name: 'Person',
            label: 'Insured Person',
            placeholder: ' ',
            type: 'input'
          },
          {
            name: 'birth',
            label: 'Date of birth',
            type: 'input'
          },
          {
            name: 'Numberpeople',
            label: 'Number of people*',
            type: 'input'
          },
          {
            name: 'people',
            label: 'Units per person*',
            type: 'input'
          },
          {
            name: 'del',
            label: '-',
            width: 70,
            type: 'slots'
          }
        ]
      }
    }
  },
  computed: {
    json: {
      get() {
        return this.formData
      },
      set(value) {
        Object.entries(value).forEach(([key, val]) => {
          // eslint-disable-next-line no-prototype-builtins
          if (this.$data.formData.hasOwnProperty(key) && Array.isArray(val)) {
            this.$data.formData[key] = []
            val.forEach((item, i) => {
              this.$set(this.$data.formData[key], i, item)
            })
          }
        })
      }
    }
  },
  methods: {
    tabelRow({ row, $index }) {
      this.$delete(this.formData.tableList, $index)
      console.log(row, $index, '------')
    },

    formAdd() {
      const obj = {
        Catergory: null,
        Person: null,
        birth: null,
        Numberpeople: null,
        people: null
      }
      this.formData.tableList.push(obj)
    }
  }
}
</script>
<style lang='scss' scoped>
.el-icon-circle-plus{
    color: #4ec87e;
    font-size: 24px;
  }
  .el-icon-error{
    color: #EC4949;
    font-size: 24px;
  }
.wh-form-tabel {
  /deep/ .el-input {
     input.el-input__inner {
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      border: 1px solid #d0dde5;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
      color: #333;
    }
  }
  /deep/ .el-table__header th {
    background-color: #d6f0ff;
  }
  /deep/ .el-table {
    * {
      text-align: center !important;
    }
    th {
      border-color: #d6f0ff !important;
    }
    td {
      border-color: #d6f0ff !important;
    }
  }

  /deep/ .el-table::before {
    background-color: #d6f0ff !important;
  }
  /deep/ .el-table--group::after {
    background-color: #d6f0ff !important;
  }
  /deep/ .el-table--border::after {
    background-color: #d6f0ff !important;
  }
  /deep/ .el-table--border {
    border-color: #d6f0ff;
  }
  /deep/ .el-table--group {
    border-color: #d6f0ff;
  }
}
.table-border-bottom {
  /deep/ .el-table td,
  .el-table th.is-leaf {
    border-bottom: none;
  }
  /deep/ .el-table--border th,
  .el-table__fixed-right-patch {
    border-bottom: none;
  }
}
.tabel-btn-add {
  margin-top: 10px;
  border-color: #1f90dd;
  color: #1f90dd;
  background-color: white;
}
.tabel-btn-up {
  margin-top: 10px;
  border-color: #1f90dd;
  background-color: #1f90dd;
}
</style>
