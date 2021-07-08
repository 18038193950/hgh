<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="js" name="1">
        <pre v-highlight>
                <code class="js" v-html="
                 `
                 <h1>111</h1>
                 `
                ">
                </code>
           </pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: []
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
