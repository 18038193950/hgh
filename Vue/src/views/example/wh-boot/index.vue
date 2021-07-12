<template>
  <div class="app-container">
    <wh-boot
      :queryConfig="queryConfig"
      :queryParams="queryParams"
      :rules="rules"
      :layout="layout"
      :size="size"
      :labelWidth="labelWidth"
      :labelPosition="labelPosition"
      @submitForm="submitForm"
      @handleChange="handleChange"

      :buttonConfig="buttonConfig"
      @handleAall="handleAall"
      :heigth="heigth"
      :maxHeight="maxHeight"
      :border="border"
      :tagColor="tagColor"
      :tableConfig="tableConfig"
      :dataList="dataList"
      :listQuery="listQuery"
      :paginationShow="paginationShow"

      @submitTable="submitTable"
      @onSelectedList="onSelectedList"

      :modalConfig="modalConfig"
      @submitDialog="submitDialog"
      @submitDrawer="submitDrawer"
      @dialogChange="dialogChange"
      @drawerChange="drawerChange"
    >
      <template v-slot:top-btn-left>
        <el-button type="primary" plain @click="drawer=true">Open-JSON-Edit-All</el-button>
        <el-alert title="自定义 样式内容" type="success" close-text="知道了"></el-alert>
      </template>
      <template v-slot:top-btn-right>
        <el-alert title="自定义 texthtml" type="info" close-text="知道了"></el-alert>
      </template>
      <template v-slot:dialogedit="{row}">
        <div>
          <wh-form
            ref="whform"
            :query-config="row.queryConfig | queryConfiglist"
            :params="row.queryParams"
            :rules="row.rules||{}"
            :label-width="row.labelWidth ||'100px'"
            :layout="row.layout"
            @handleChange="handleChange"
          />
          <wh-form-tabel class="wh-form-tabel table-border-bottom" :form-data="formData">
            <template v-slot:headerdel>
              <span @click="formAdd">
                <i class="el-icon-circle-plus" />
              </span>
            </template>
            <template v-slot:inlinedel="{row}">
              <span @click="tabelRow(row)">
                <i class="el-icon-error" />
              </span>
            </template>
          </wh-form-tabel>
        </div>
      </template>
      <template v-slot:dialogupload>
        <div>
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </template>
    </wh-boot>
    <wh-json ref="whJson" :json.sync="json" :drawer.sync="drawer " />
    <mark-down />
  </div>
</template>

<script>
import servie from "./servie";

import WhJson from './addedit'
import markDown from './markdown'

export default {
  components: {
    WhJson,
    markDown
  },
  filters: {
    queryConfiglist(list) {
      return list.filter(item => item.type !== "button");
    }
  },
  data() {
    return {
      queryParams: {
        'textarea': ''
      },
      queryConfig: servie.queryConfig,
      buttonConfig: servie.buttonConfig,
      tableConfig: servie.tableConfig,
      rules:{
      },
      layout:{
        row: 20,
        col: 3
      },
      size:'medium',
      labelWidth:'100px',
      labelPosition:"left",
      listQuery: {
        page: 1,
        pageSize: 5,
        pageCount: 10
      },
      modalConfig: servie.modalConfig,
      dataList: [
        {
          page: 1,
          pageSize: 10,
          id: "2edfbf6f-1130-499e-89ea-f835bd6b81c3",
          serialNumber: -1,
          subscribe: "1",
          openId: "o2z9201Y59zhBWnBOaY6Q401jzAo",
          nickname: "Paranoid",
          sex: "1",
          city: "武汉",
          country: "中国",
          province: "湖北",
          language: "zh_CN",
          headimgurl:
            "http://thirdwx.qlogo.cn/mmopen/WCtuQWyriazxxiaIKEupQflXczRoaXXNINibRWoMtGEEibEnmib8Iw5pWswkERVfBJYdqhbibC4diaCGwNd3lneHZNyEf4QeVgeafLj/132",
          subscribeTime: 1578931200000,
          unionid: null,
          mpRemark: null,
          gourpid: "115",
          tagidList: ",115,126,",
          subscribeScene: "ADD_SCENE_SEARCH",
          qrScene: "0",
          qrSceneStr: null,
          extUnsubscribeTime: null,
          extPhoneNumber: null,
          extEmail: null,
          extUsername: null,
          extIdType: null,
          extIdNum: null,
          extHandler: null,
          extType: null,
          extAddress: null,
          extArea: null,
          dateCreated: 1581614826000,
          lastUpdated: 1581614826000,
          validFlag: "1",
          remark: null,
          version: 4,
          tagidListCName: "鼎鼎生活圈,视频群发测试",
          tagsQueryList: null
        },
        {
          page: 1,
          pageSize: 10,
          id: "411c9ab3-5959-4928-8164-489ca2dd6cdb",
          serialNumber: -1,
          subscribe: "1",
          openId: "o2z9206gCaio_Eif7Gj2cIRc8Fc8",
          nickname: "陈煜",
          sex: "1",
          city: null,
          country: "中国",
          province: "北京",
          language: "zh_CN",
          headimgurl:
            "http://thirdwx.qlogo.cn/mmopen/ajNVdqHZLLCD5mqNFnjJUMOCywV80S3xu0pwR0tc1OhVME7dQUPMxXEZTENGBQLJjRhjrcRVibIAjX0yXRp41MQ/132",
          subscribeTime: 1578153600000,
          unionid: null,
          mpRemark: "陈煜",
          gourpid: "126",
          tagidList: ",126,124,",
          subscribeScene: "ADD_SCENE_PROFILE_CARD",
          qrScene: "0",
          qrSceneStr: null,
          extUnsubscribeTime: 1578153600000,
          extPhoneNumber: null,
          extEmail: null,
          extUsername: "dsfs",
          extIdType: null,
          extIdNum: null,
          extHandler: null,
          extType: null,
          extAddress: null,
          extArea: null,
          dateCreated: 1581614826000,
          lastUpdated: 1581614826000,
          validFlag: "1",
          remark: "被移除黑名单",
          version: 48,
          tagidListCName: "视频群发测试,ddlife",
          tagsQueryList: null
        },
        {
          page: 1,
          pageSize: 10,
          id: "394a5b6c-c9a5-464d-aca1-98389cae9817",
          serialNumber: -1,
          subscribe: "1",
          openId: "o2z92077h1zi6DAUZL-JcDZ5TLKk",
          nickname: "疯，神",
          sex: "1",
          city: "潜江",
          country: "中国",
          province: "湖北",
          language: "zh_CN",
          headimgurl:
            "http://thirdwx.qlogo.cn/mmopen/YnaceFEyLUsUn46eWEhCg6K3CJYFs7yMHSPIXVFdUS2msO7WtbJZEJd2Cns2CshFuDw5gvuMWgJBFPk2DiaarHz0CwS67uDicl/132",
          subscribeTime: 1576598400000,
          unionid: null,
          mpRemark: "阿斯蒂芬11",
          gourpid: "115",
          tagidList: ",115,126,",
          subscribeScene: "ADD_SCENE_QR_CODE",
          qrScene: "0",
          qrSceneStr: null,
          extUnsubscribeTime: null,
          extPhoneNumber: null,
          extEmail: null,
          extUsername: null,
          extIdType: null,
          extIdNum: null,
          extHandler: null,
          extType: null,
          extAddress: null,
          extArea: null,
          dateCreated: 1581614826000,
          lastUpdated: 1581614826000,
          validFlag: "1",
          remark: "被移除黑名单",
          version: 35,
          tagidListCName: "鼎鼎生活圈,视频群发测试",
          tagsQueryList: null
        },
        {
          page: 1,
          pageSize: 10,
          id: "507be779-2bde-45c7-a34f-bdfe5e1a8b6c",
          serialNumber: -1,
          subscribe: "1",
          openId: "o2z9209-JPPr_v31OnawN-otqzLY",
          nickname: "陈龙",
          sex: "0",
          city: null,
          country: null,
          province: null,
          language: "zh_CN",
          headimgurl:
            "http://thirdwx.qlogo.cn/mmopen/WCtuQWyriazzvvpkfDuXtPhScuK1pPgMGxL8ictXW4Og6ibLgUDSdh8ZTmxegnyfQ3bEjfwteyJCwv1ib9wpXvLIetAa5picKAKKE/132",
          subscribeTime: 1524844800000,
          unionid: null,
          mpRemark: "asdfadsf",
          gourpid: "115",
          tagidList: ",115,126,",
          subscribeScene: "ADD_SCENE_PROFILE_CARD",
          qrScene: "0",
          qrSceneStr: null,
          extUnsubscribeTime: null,
          extPhoneNumber: null,
          extEmail: null,
          extUsername: null,
          extIdType: null,
          extIdNum: null,
          extHandler: null,
          extType: null,
          extAddress: null,
          extArea: null,
          dateCreated: 1581614826000,
          lastUpdated: 1581614826000,
          validFlag: "0",
          remark: "被加入黑名单",
          version: 27,
          tagidListCName: "鼎鼎生活圈,视频群发测试",
          tagsQueryList: null
        }
      ],
      heigth:'300px',
      maxHeight:'500px',
      border:false,
      tagColor:{ 0: 'danger',1: null,2: 'success',3: 'info', 4: 'warning' },
      paginationShow:true,
      selectList: [],
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
            name: "Catergory",
            label: "Catergory*",
            width: 200,
            type: "select",
            options: [
              {
                value: "A-Directors, Partner & non manual work employee",
                label: "A-Directors, Partner & non manual work employee"
              },
              {
                value: "B-Caretakers, Maintemance, Porters & Security",
                label: "B-Caretakers, Maintemance, Porters & Security"
              },
              {
                value:
                  "C2-Individual Caretakers, Maintemance, Porters & Security",
                label:
                  "C2-Individual Caretakers, Maintemance, Porters & Security"
              }
            ]
          },
          {
            name: "Person",
            label: "Insured Person",
            type: "input"
          },
          {
            name: "birth",
            label: "Date of birth",
            type: "input"
          },
          {
            name: "Numberpeople",
            label: "Number of people*",
            type: "input"
          },
          {
            name: "people",
            label: "Units per person*",
            type: "input"
          },
          {
            name: "del",
            label: "-",
            width: 70,
            type: "slots"
          }
        ]
      },
      drawer: false
    };
  },
  watch: {
    selectList: {
      immediate: true,
      handler(val) {
        this.buttonConfig.forEach(item => {
          if (item.type === "dropdownItem") {
            this.$set(item, "visibility", val.length > 0 ? "1" : "0");
          }
        });
      }
    },
    queryParamsAll:{
      deep:true,
      handler(val){
        this.queryParams.textarea = JSON.stringify(val)
      }
    }
  },
  computed: {
     queryParamsAll(){
       if(!this.queryParams) return false
       let list = (Object.keys(this.queryParams)).filter(item =>item!=='textarea').map((parm)=>({parm:this.queryParams[parm]}))
       return list
     },
    json: {
      get() {
        return {
          queryConfig: this.queryConfig,
          buttonConfig: this.buttonConfig,
          tableConfig: this.tableConfig,
          modalConfig: this.modalConfig
        };
      },
      set(value) {
        Object.entries(value).forEach(([key, val]) => {
          if (this.$data.hasOwnProperty(key) && Array.isArray(val)) {
            this.$data[key] = [];
            val.forEach((item, i) => {
              this.$set(this.$data[key], i, item);
            });
          } else if (
            this.$data.hasOwnProperty(key) &&
            typeof val === "object"
          ) {
            this.$data[key] = {};
            Object.entries(val).forEach(([ckey, cval]) => {
              this.$set(this.$data[key], ckey, cval);
            });
          }
        });
        if (Object.keys(value).includes("buttonConfig")) {
        }
      }
    }
  },
  methods: {
    submitForm(item, row, Loading) {
      Loading("1");
      console.log(item, row);
      setTimeout(() => Loading("0"), 500);
    },
    handleChange(val, item) {
      if(item.type ==='collapse'){
        const value = val&&val ==='0'? '1' : '0'
        this.$set(item ,'incopos' , value)
        this.visibilityAll(Object.values(item.relationDetail),item.relationDetail[value],this.queryConfig )
      } else {
        const value = val
        this.visibilityAll(Object.values(item.relationDetail),item.relationDetail[value],this.queryConfig )
      }
    },
     // 控制显示和隐藏的方法
    visibilityAll(relationDetail, value , list) {
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
    },
    handleAall(item, row, Loading) {
      item.modalKey
        ? (this.modalConfig[item.modalKey].dialogType = "1")
        : (this.confirmShow(item, row, Loading), Loading("1"));
    },
    submitTable(item, row, index) {
      if (item === "row") return;
      item.modalKey
        ? ((this.modalConfig[item.modalKey].dialogType = "1"),
          (this.modalConfig[item.modalKey].queryParams = row))
        : this.confirmShow(item, row);
    },
    submitDialog(item, row, Loading) {
      console.log('xxx')
      Loading("1");
      item.modalKey ? (this.modalConfig[item.modalKey].dialogType = "1") : null;
      setTimeout(() => {
        Loading("0");
      }, 1000);
    },
    submitDrawer(item, row, Loading) {
      console.log('xxx')
      Loading("1");
      item.modalKey ? (this.modalConfig[item.modalKey].dialogType = "1") : null;
      setTimeout(() => {
        Loading("0");
      }, 1000);
    },
    dialogChange(key,val,item){

    },
    drawerChange(key,val,item){

    },
    tabelRow({ row, $index }) {
      this.$delete(this.formData.tableList, $index);
      console.log(row, $index, "------");
    },
    formAdd() {
      const obj = {
        Catergory: null,
        Person: null,
        birth: null,
        Numberpeople: null,
        people: null
      };
      this.formData.tableList.push(obj);
    },
    onSelectedList(list) {
      this.selectList = list;
    },
    confirmShow(item, row, Loading) {
      // 普通弹窗
      this.$confirm(`确定${item.label}吗?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          setTimeout(() => {
            this.$message.success(`${item.label}成功`);
            typeof Loading === "function" ? Loading("0") : null;
          }, 1000);
        })
        .catch(error => {
          console.info(error);
          Loading("0");
          this.$message("已取消");
        });
    }
  }
};
</script>
<style lang='scss' scoped>
.el-icon-circle-plus {
  color: #4ec87e;
  font-size: 24px;
}
.el-icon-error {
  color: #ec4949;
  font-size: 24px;
}
.app-container {
  /deep/ .wh-form {
    width: 90%;
    margin: 10px auto;
    /* margin: 10px; */
    border: 1px solid #ecf5ff;
    border-radius: 5px;
  }
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

