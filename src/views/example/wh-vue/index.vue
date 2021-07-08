<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="参数传递" name="1">
        <pre v-highlight>
                <code class="js" >
                  vm.$attrs
                  vm.$listeners

                 提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的 property 还是可响应的。

                  // 父级组件提供 'foo'
                  var Provider = {
                    provide: {
                      foo: 'bar'
                    },
                    // ...
                  }

                  // 子组件注入 'foo'
                  var Child = {
                    inject: ['foo'],
                    created () {
                      console.log(this.foo) // => "bar"
                    }
                    // ...
                  }
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
