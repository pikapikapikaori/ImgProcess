<template>
  <div class="navigator">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router="true">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">主页</span>
      </el-menu-item>

      <el-menu-item index="/basic_func">
        <i class="el-icon-picture-outline"></i>
        <span slot="title">基础功能</span>
      </el-menu-item>

      <el-menu-item index="/histogram">
        <i class="el-icon-s-data"></i>
        <span slot="title">图像分析</span>
      </el-menu-item>

      <el-menu-item index="/segmentation">
        <i class="el-icon-scissors"></i>
        <span slot="title">图像分割</span>
      </el-menu-item>

      <el-submenu index="/smooth_sharpen">
        <template slot="title">
          <i class="el-icon-s-operation"></i>
          <span slot="title">图像平滑与锐化</span>
        </template>

        <el-menu-item index="/smooth_sharpen/smooth">图像平滑</el-menu-item>
        <el-menu-item index="/smooth_sharpen/sharpen">图像锐化</el-menu-item>

      </el-submenu>

      <el-menu-item index="/morphological">
        <i class="el-icon-magic-stick"></i>
        <span slot="title">图像形态学</span>
      </el-menu-item>

      <el-submenu index="/fix">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i>
        <span slot="title">图像修复</span>
        </template>

        <el-menu-item index="/fix/noise">添加噪声</el-menu-item>
        <el-menu-item index="/fix/repair">图像去噪</el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.navigator{
  margin-top: 20px;
}
</style>
