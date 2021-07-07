<template>
  <el-drawer
    :title="title"
    :visible.sync="isdrawer"
    :size="size"
    :modal="false"
    :wrapper-closable="false"
    :destroy-on-close="true"
    :direction="direction"
    :style="{opacity:value1/100}"
    :before-close="handleClose"
  >
    <div v-loading="!isdrawer" class="wh-json-edit warp">
      <div class="block">
        <span class="demonstration">宽度:</span>
        <el-input-number v-model="value2" :min="1" :max="10" size="medium" />
      </div>
      <div class="block">
        <span class="demonstration">透明度:</span>
        <el-slider v-model="value1" :min="20" style="width:70%" />
      </div>
          <div class="nav-warp">
        <el-button style="margin:3px" icon="el-icon-edit" plain type="primary" @click="editJson('queryConfig')">queryConfig</el-button>
        <el-button style="margin:3px" icon="el-icon-edit" plain type="success" @click="editJson('buttonConfig')">buttonConfig</el-button>
        <el-button style="margin:3px" icon="el-icon-edit" plain type="info" @click="editJson('tableConfig')">tableConfig</el-button>
        <el-button style="margin:3px" icon="el-icon-edit" plain type="warning" @click="editJson('modalConfig')">modalConfig</el-button>
        <el-button style="margin:3px" icon="el-icon-edit" plain type="danger" @click="editJson('All')">All 全部</el-button>
      </div>
      <div class="nav-warp">
        <el-button circle icon="el-icon-edit" plain type="primary" @click="showText('text')">text</el-button>
        <el-button circle icon="el-icon-edit" plain type="success" @click="showText('form')">form</el-button>
        <el-button circle icon="el-icon-edit" plain type="info" @click="showText('code')">json</el-button>
        <el-button circle icon="el-icon-edit" plain type="warning" @click="showText('tree')">tree</el-button>
        <el-button circle icon="el-icon-edit" plain type="danger" @click="showText('view')">view</el-button>
        <el-button type="primary" style="margin-left:20px" @click="syncValue">同步数据</el-button>
      </div>
      <div id="wh_editor_holder" ref="wh_editor_holder" />
    </div>
  </el-drawer>
</template>

<script>
/* eslint-disable */
function isJson(josn) {
  try {
    if (typeof JSON.parse(josn) === "object") {
      return JSON.parse(josn);
    }
  } catch (error) {
    return false;
  }
}
export default {
  name: "WhJsonedit",
  props: {
    direction: {
      type: String,
      default: () => "ltr"
      //   rtl / ltr / ttb / btt
    },
    title: {
      type: String,
      default: () => "编辑json"
    },
    drawer: {
      type: Boolean,
      default: () => false
    },
    json: {
      type: [Array, Object],
      default: () => ({ val: 1 })
    }
  },
  computed: {
    isdrawer: {
      get() {
        return this.drawer === true;
      },
      set(value) {
        this.$emit("update:drawer", value);
      }
    },
    size() {
      return (this.value2).toString() + "0%";
    }
  },
  watch: {
    isdrawer: {
      immediate: true,
      handler(val) {
        if (val) {
          this.initJson();
        }
      }
    }
  },
  data() {
    return {
      jsonedit: "",
      value1: 100,
      value2: 5
    };
  },
  methods: {
    initJson() {
      const throttle = (func, delay) => {
        let timer = null;
        return (...arg) => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => func(...arg), delay);
        };
      };
      const throttltime = throttle((json) => {
        this.$emit("update:json", json);
        // 这里可以可以设置同步数据
      }, 3000);
      this.$nextTick(() => {
        const options = {
          mode: "code",
          //   modes: ['code', 'form', 'text', 'tree', 'view'], // allowed modes
          onError: err => {
            this.$message.error("当前json格式错误！！！！！");
          },
          onChange: () => {
            const json = isJson(this.jsonedit.getText());
            if (!json) return;
            try {
              throttltime(json);
            } catch (error) {
              console.info(error, "-----");
            }
          }
        };
        const container1 = document.querySelector("#wh_editor_holder");
        this.jsonedit = new window.JSONEditor(container1, options);
        this.jsonedit.set(this.json);
      });
    },
    showText(val) {
      this.jsonedit.setMode(val);
    },
    syncValue() {
      try {
        const json = this.jsonedit.get();
        this.$emit("update:json", json);
      } catch (error) {
        this.$message.error("当前json格式错误！！！！！");
      }
    },
    handleClose(done) {
      const json = isJson(this.jsonedit.getText());
      if (!json) return this.$message.error("当前json格式错误！！！！！");
      done();
    },
    editJson(val){
        let json = {}
     if(val!=='All'){
         json[val] = this.json[val]
         this.jsonedit.set({...json});
     } else {
         this.jsonedit.set({...this.json});
     }
    }
  },
  beforeDestroy() {
    // this.jsonedit && this.jsonedit.destroy();
  }
};
</script>
<style lang='scss' scoped>
.warp {
  position: relative;
  height: 100%;
  .nav-warp {
    width: 300px;
    display: flex;
    justify-content: space-between;
    left: 10px;
    text-align: center;
  }
  .block {
    display: flex;
    align-items: center;
    .demonstration {
      margin: 0 20px;
    }
  }
}

#wh_editor_holder {
  // height: calc(100vh - 180px);
  height: calc(100% - 120px);
  overflow-y: scroll;
  /deep/ div.jsoneditor-menu {
    // display: none;
    background: #ccc;
    border: none;
    .jsoneditor-sort {
      display: none;
    }
    .jsoneditor-transform {
      display: none;
    }
    .jsoneditor-search {
      display: none;
    }
  }
}
</style>
