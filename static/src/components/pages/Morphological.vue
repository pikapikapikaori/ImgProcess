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

      <el-container style="margin-top: 5%; margin-right: 236px"">
        <el-header style="text-align: center; font-size: 36px">
          <div class="heading">
            {{ headmsg }}
          </div>
        </el-header>

        <el-main style="text-align: left; font-size: 18px">

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
  name: "Morphological",
  data() {
    return {
      headmsg: '图像形态学'
    }
  },
  components: {
    Head,
    Navigation,
    Copyright
  }
}
</script>

<style scoped>

</style>