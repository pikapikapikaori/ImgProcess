<template>
  <div class="basic" style="background: #fff; min-height: 100%">
    <el-container style="position: absolute; height: 95%; width: 100%; border: 0">
      <el-aside width="236px" style="margin-top: 5%; margin-left: 20px">
        <div class="aside">
          <div class="head">
            <Head/>
          </div>
          <Navigation/>
        </div>
      </el-aside>
      <el-container style="margin-top: 5%;">
        <el-header style="text-align: center; font-size: 36px">
          <div class="heading">
            {{ headmsg }}
          </div>
        </el-header>

        <el-main style="text-align: left; font-size: 18px">
          <el-divider content-position="left">项目介绍</el-divider>
          {{ intromsg }}
        </el-main>

        <el-footer height="10px">
          <Copyright/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navigation from "@/components/global/Navigation"
import Copyright from "@/components/global/Copyright"
import Head from "@/components/global/Head"

export default {
  name: "Home",
  data() {
    return {
      headmsg: '图像处理系统',
      intromsg: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0一个简单的图像处理系统。'
    }
  },
  methods: {

  },
  components: {
    Head,
    Navigation,
    Copyright
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
