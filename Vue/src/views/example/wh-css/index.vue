<template>
  <div class="app-container">
    <el-collapse v-model="activeNames">
      <el-collapse-item title="css" name="1">
        <pre v-highlight>
                <code class="js">
                  滚动条的设计
                ï 整体部分，::-webkit-scrollbar;
                ï 两端按钮，::-webkit-scrollbar-button;
                ï外层轨道，::-webkit-scrollbar-track; 
                ï 内层轨道，::-webkit-scrollbar-track-piece; 
                ï 滚动滑块，::-webkit-scrollbar-thumb;
                ï 边角，::-webkit-scrollbar-corner。 

                文本垂直居中对齐
                vertical-align ：center  -25%;

                边框透明
                border-color: transparent;


                隐藏属性
                  •	visibility:hidden  
                margin:auto 加绝对定位  可以保持居中

                导入字体
                @font-face {
                      font-family: ICON;
                      src: url('icon.eot') format('eot');
                      src: local('☺'),
                          url('icon.woff2') format("woff2")
                          url('icon.woff') format("woff"),
                          url('icon.ttf') format("typetrue");
                } 

                letter-spacing 与字符间距 
                ‘
                换行
                word-wrap 

                文本两端对齐
                .justify {
                      text-align: justify;
                      text-justify: inter-ideograph;
                }   

                  CSS实现单行、多行文本溢出显示省略号（…）

                  overflow: hidden;
                  text-overflow:ellipsis;
                  white-space: nowrap;

                  多行
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  overflow: hidden;

                  -webkit-overflow-scrolling:touch;
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
