<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="淘宝镜像" name="1">
        <pre v-highlight>
                <code class="js">
                  <!-- 临时使用淘宝源 -->
                  npm --registry https://registry.npm.taobao.org install node-red-contrib-composer@latest
                    
                  <!-- 全局配置切换到淘宝源 -->
                  npm config set registry https://registry.npm.taobao.org
                  
                  <!-- 全局配置切换到官方源 -->

                  npm config set registry http://www.npmjs.org
                  npm config set registry http://registry.npmjs.org

                  <!-- 检测是否切换到了淘宝源 -->
                  npm info underscore

                  npm root -g 查看全局安装路径

                  which node 查看node 安装路径

                  # mirror config

                  sharp_dist_base_url = https://npm.taobao.org/mirrors/sharp-libvips/v8.9.1/

                  profiler_binary_host_mirror = https://npm.taobao.org/mirrors/node-inspector/

                  fse_binary_host_mirror = https://npm.taobao.org/mirrors/fsevents

                  node_sqlite3_binary_host_mirror = https://npm.taobao.org/mirrors

                  sqlite3_binary_host_mirror = https://npm.taobao.org/mirrors

                  sqlite3_binary_site = https://npm.taobao.org/mirrors/sqlite3

                  sass_binary_site = https://npm.taobao.org/mirrors/node-sass

                  electron_mirror = https://npm.taobao.org/mirrors/electron/

                  puppeteer_download_host = https://npm.taobao.org/mirrors

                  chromedriver_cdnurl = https://npm.taobao.org/mirrors/chromedriver

                  operadriver_cdnurl = https://npm.taobao.org/mirrors/operadriver

                  phantomjs_cdnurl = https://npm.taobao.org/mirrors/phantomjs

                  python_mirror = https://npm.taobao.org/mirrors/python

                  registry = https://registry.npm.taobao.org/

                  disturl = https://npm.taobao.org/dist

                  npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass
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
