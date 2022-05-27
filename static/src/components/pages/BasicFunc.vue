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

      <el-container style="margin-top: 5%; margin-right: 236px">
        <el-header style="text-align: center; font-size: 36px">
          <div class="heading">
            {{ headmsg }}
          </div>
        </el-header>

        <el-main style="text-align: left; font-size: 18px">
          <el-divider content-position="left">基础功能</el-divider>
          {{ intromsg }}
          <el-tabs type="border-card" style="margin-top: 30px; min-height: 80%">
            <el-tab-pane label="灰度化">
              <el-steps :active="graying_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="graying_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="grayingSelection"/>
              </div>

              <div v-show="graying_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="grayingForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="grayingForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="graying_active === 2"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">原图片</span>
                  <br>
                  <img :src="require('../../../../apps/assets/' + this.displayImg[0].fileName)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <div v-show="graying_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="graying_cancel">取消</el-button>
              <el-button v-show="graying_active <= 2" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="graying_next">下一步
              </el-button>
              <el-button v-show="graying_active >= 3" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="graying_cancel">完成
              </el-button>

            </el-tab-pane>
            <el-tab-pane label="二值化">
              <el-steps :active="thre_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="thre_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="threSelection"/>
              </div>

              <div v-show="thre_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="threForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="threForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="thre_active === 2"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">原图片</span>
                  <br>
                  <img :src="require('../../../../apps/assets/' + this.displayImg[0].fileName)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <div v-show="thre_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="thre_cancel">取消</el-button>
              <el-button v-show="thre_active <= 2" :loading="threLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="thre_next">下一步
              </el-button>
              <el-button v-show="thre_active >= 3" :loading="threLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="thre_cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="逻辑与">
              <el-steps :active="logical_and_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="logical_and_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="logical_andSelection"/>
              </div>

              <div v-show="logical_and_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="logical_andForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="logical_andForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="logical_and_active === 2"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">原图片</span>
                  <br>
                  <img :src="require('../../../../apps/assets/' + this.displayImg[0].fileName)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                  <img :src="require('../../../../apps/assets/' + this.displayImg[1].fileName)" alt=""
                       style="margin-left: 10px; width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <div v-show="logical_and_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="logical_and_cancel">取消</el-button>
              <el-button v-show="logical_and_active <= 2" :loading="logical_andLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_and_next">下一步
              </el-button>
              <el-button v-show="logical_and_active >= 3" :loading="logical_andLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_and_cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="逻辑或">
              <el-steps :active="logical_or_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="logical_or_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="logical_orSelection"/>
              </div>

              <div v-show="logical_or_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="logical_orForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="logical_orForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="logical_or_active === 2"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">原图片</span>
                  <br>
                  <img :src="require('../../../../apps/assets/' + this.displayImg[0].fileName)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                  <img :src="require('../../../../apps/assets/' + this.displayImg[1].fileName)" alt=""
                       style="margin-left: 10px; width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <div v-show="logical_or_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="logical_or_cancel">取消</el-button>
              <el-button v-show="logical_or_active <= 2" :loading="logical_orLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_or_next">下一步
              </el-button>
              <el-button v-show="logical_or_active >= 3" :loading="logical_orLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_or_cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="逻辑非">
              <el-steps :active="logical_not_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="logical_not_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="logical_notSelection"/>
              </div>

              <div v-show="logical_not_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="logical_notForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="logical_notForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="logical_not_active === 2"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">原图片</span>
                  <br>
                  <img :src="require('../../../../apps/assets/' + this.displayImg[0].fileName)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <div v-show="logical_not_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="logical_not_cancel">取消</el-button>
              <el-button v-show="logical_not_active <= 2" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_not_next">下一步
              </el-button>
              <el-button v-show="logical_not_active >= 3" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_not_cancel">完成
              </el-button>

            </el-tab-pane>
            <el-tab-pane label="图像相加">角色管理</el-tab-pane>
            <el-tab-pane label="图像相减">定时任务补偿</el-tab-pane>
            <el-tab-pane label="图像相乘">消息中心</el-tab-pane>
            <el-tab-pane label="图像相除">角色管理</el-tab-pane>
            <el-tab-pane label="图像翻转">定时任务补偿</el-tab-pane>
            <el-tab-pane label="图像平移">消息中心</el-tab-pane>
            <el-tab-pane label="图像旋转">角色管理</el-tab-pane>
            <el-tab-pane label="图像放缩">定时任务补偿</el-tab-pane>
          </el-tabs>
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
import PictureChooseOne from "@/components/global/PictureChooseOne"

export default {
  name: "BasicFunc",
  data() {
    return {
      headmsg: '基础功能',
      intromsg: '\xa0\xa0\xa0\xa0\xa0\xa0\xa0主要包含了图像的灰度化与二值化、逻辑运算、四则运算、翻转、平移、放缩等功能。',
      graying_active: 0,
      selection: [],
      displayImg: [
        {
          fileName: 'default_pic.jpg'
        },
        {
          fileName: 'default_pic2.jpg'
        }
      ],
      grayingForm: {
        res_name: ''
      },
      processResult: {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      },
      grayLoad: false,
      thre_active: 0,
      threForm: {
        res_name: ''
      },
      threLoad: false,
      logical_and_active: 0,
      logical_andForm: {
        res_name: ''
      },
      logical_andLoad: false,
      logical_or_active: 0,
      logical_orForm: {
        res_name: ''
      },
      logical_orLoad: false,
      logical_not_active: 0,
      logical_notForm: {
        res_name: ''
      },
      logical_notLoad: false
    }
  },
  components: {
    Head,
    Navigation,
    Copyright,
    PictureChooseOne
  },
  methods: {
    async graying_next() {
      if (this.graying_active === 0) {
        this.selection = this.$refs["grayingSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        if (this.selection.length !== 1) {
          this.$alert('选择的图片数量不是一张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.graying_active === 1) {
        this.grayingForm.res_name += '.jpg';
      } else if (this.graying_active === 2) {
        const axios = require('axios')

        this.grayLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/graying', {
              params: {
                img_name: this.selection[0].fileName,
                result_name: this.grayingForm.res_name
              }
            }
        ).then(
            (res) => {
              this.processResult = res.data;
              if (this.processResult.code === '1') {
                this.$message({
                  message: '图片处理成功！',
                  type: 'success'
                });
              } else if (this.processResult.code === '2') {
                this.$message.error('图片处理成功！');
              }
            }
        )

        this.grayLoad = false;


      } else if (this.graying_active === 3) {
        this.graying_active = 0;

        return
      }


      this.graying_active++;
    },
    graying_cancel() {
      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];
      this.graying_active = 0;
      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    },
    async thre_next() {
      if (this.thre_active === 0) {
        this.selection = this.$refs["threSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        if (this.selection.length !== 1) {
          this.$alert('选择的图片数量不是一张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.thre_active === 1) {
        this.threForm.res_name += '.jpg';
      } else if (this.thre_active === 2) {
        const axios = require('axios')

        this.threLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/thresholding', {
              params: {
                img_name: this.selection[0].fileName,
                result_name: this.threForm.res_name
              }
            }
        ).then(
            (res) => {
              this.processResult = res.data;
              if (this.processResult.code === '1') {
                this.$message({
                  message: '图片处理成功！',
                  type: 'success'
                });
              } else if (this.processResult.code === '2') {
                this.$message.error('图片处理成功！');
              }
            }
        )

        this.threLoad = false;


      } else if (this.thre_active === 3) {
        this.thre_active = 0;

        return
      }


      this.thre_active++;
    },
    thre_cancel() {
      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];
      this.thre_active = 0;
      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    },
    async logical_and_next() {
      if (this.logical_and_active === 0) {
        this.selection = this.$refs["logical_andSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.logical_and_active === 1) {
        this.logical_andForm.res_name += '.jpg';
      } else if (this.logical_and_active === 2) {
        const axios = require('axios')

        this.logical_andLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/logical_and', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.logical_andForm.res_name
              }
            }
        ).then(
            (res) => {
              this.processResult = res.data;
              if (this.processResult.code === '1') {
                this.$message({
                  message: '图片处理成功！',
                  type: 'success'
                });
              } else if (this.processResult.code === '2') {
                this.$message.error('图片处理成功！');
              }
            }
        )

        this.logical_andLoad = false;


      } else if (this.logical_and_active === 3) {
        this.logical_and_active = 0;

        return
      }


      this.logical_and_active++;
    },
    logical_and_cancel() {
      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];
      this.logical_and_active = 0;
      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    },
    async logical_or_next() {
      if (this.logical_or_active === 0) {
        this.selection = this.$refs["logical_orSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.logical_or_active === 1) {
        this.logical_orForm.res_name += '.jpg';
      } else if (this.logical_or_active === 2) {
        const axios = require('axios')

        this.logical_orLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/logical_or', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.logical_orForm.res_name
              }
            }
        ).then(
            (res) => {
              this.processResult = res.data;
              if (this.processResult.code === '1') {
                this.$message({
                  message: '图片处理成功！',
                  type: 'success'
                });
              } else if (this.processResult.code === '2') {
                this.$message.error('图片处理成功！');
              }
            }
        )

        this.logical_orLoad = false;


      } else if (this.logical_or_active === 3) {
        this.logical_or_active = 0;

        return
      }


      this.logical_or_active++;
    },
    logical_or_cancel() {
      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];
      this.logical_or_active = 0;
      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    },
    async logical_not_next() {
      if (this.logical_not_active === 0) {
        this.selection = this.$refs["logical_notSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        if (this.selection.length !== 1) {
          this.$alert('选择的图片数量不是一张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.logical_not_active === 1) {
        this.logical_notForm.res_name += '.jpg';
      } else if (this.logical_not_active === 2) {
        const axios = require('axios')

        this.grayLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/logical_not', {
              params: {
                img_name: this.selection[0].fileName,
                result_name: this.logical_notForm.res_name
              }
            }
        ).then(
            (res) => {
              this.processResult = res.data;
              if (this.processResult.code === '1') {
                this.$message({
                  message: '图片处理成功！',
                  type: 'success'
                });
              } else if (this.processResult.code === '2') {
                this.$message.error('图片处理成功！');
              }
            }
        )

        this.grayLoad = false;


      } else if (this.logical_not_active === 3) {
        this.logical_not_active = 0;

        return
      }


      this.logical_not_active++;
    },
    logical_not_cancel() {
      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];
      this.logical_not_active = 0;
      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    }
  }
}
</script>

<style scoped>

</style>