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

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="graying_active <= 2" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="graying_next">下一步
              </el-button>
              <el-button v-show="graying_active >= 3" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
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

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="thre_active <= 2" :loading="threLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="thre_next">下一步
              </el-button>
              <el-button v-show="thre_active >= 3" :loading="threLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
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

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="logical_and_active <= 2" :loading="logical_andLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_and_next">下一步
              </el-button>
              <el-button v-show="logical_and_active >= 3" :loading="logical_andLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
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

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="logical_or_active <= 2" :loading="logical_orLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_or_next">下一步
              </el-button>
              <el-button v-show="logical_or_active >= 3" :loading="logical_orLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
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

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="logical_not_active <= 2" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="logical_not_next">下一步
              </el-button>
              <el-button v-show="logical_not_active >= 3" :loading="grayLoad" style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
              </el-button>

            </el-tab-pane>
            <el-tab-pane label="图像相加">
              <el-steps :active="add_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="add_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="addSelection"/>
              </div>

              <div v-show="add_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="addForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="addForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="add_active === 2"
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

              <div v-show="add_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="add_active <= 2" :loading="addLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="add_next">下一步
              </el-button>
              <el-button v-show="add_active >= 3" :loading="addLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="图像相减">
              <el-steps :active="subtract_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="subtract_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="subtractSelection"/>
              </div>

              <div v-show="subtract_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="subtractForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="subtractForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="subtract_active === 2"
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

              <div v-show="subtract_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="subtract_active <= 2" :loading="subtractLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="subtract_next">下一步
              </el-button>
              <el-button v-show="subtract_active >= 3" :loading="subtractLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="图像相乘">
              <el-steps :active="multiply_active" finish-status="success" simple style="margin-top: 10px">
                <el-step title="选择图片"></el-step>
                <el-step title="输入参数"></el-step>
                <el-step title="处理图片"></el-step>
              </el-steps>

              <div v-show="multiply_active === 0" style="margin-top: 20px;">
                <PictureChooseOne ref="multiplySelection"/>
              </div>

              <div v-show="multiply_active === 1"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div style="margin-left: 20%; margin-right: 20%">
                  <el-form :inline="true" :model="multiplyForm" class="demo-form-inline">
                    <el-form-item label="输出图像名称">
                      <el-input v-model="multiplyForm.res_name">
                        <template slot="append">.jpg</template>
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>

              <div v-show="multiply_active === 2"
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

              <div v-show="multiply_active === 3"
                   style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
                <div>
                  <span class="demonstration">结果图片</span>
                  <br>
                  <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                       style="width: 400px; height:auto; margin-top: 30px">
                </div>
              </div>

              <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
              <el-button v-show="multiply_active <= 2" :loading="multiplyLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="multiply_next">下一步
              </el-button>
              <el-button v-show="multiply_active >= 3" :loading="multiplyLoad"
                         style="margin-left: 10px; margin-top: 10px;"
                         @click="cancel">完成
              </el-button>
            </el-tab-pane>
            <el-tab-pane label="图像相除">
              <el-steps :active="divide_active" finish-status="success" simple style="margin-top: 10px">
               <el-step title="选择图片"></el-step>
               <el-step title="输入参数"></el-step>
               <el-step title="处理图片"></el-step>
             </el-steps>

             <div v-show="divide_active === 0" style="margin-top: 20px;">
               <PictureChooseOne ref="divideSelection"/>
             </div>

             <div v-show="divide_active === 1"
                  style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
               <div style="margin-left: 20%; margin-right: 20%">
                 <el-form :inline="true" :model="divideForm" class="demo-form-inline">
                   <el-form-item label="输出图像名称">
                     <el-input v-model="divideForm.res_name">
                       <template slot="append">.jpg</template>
                     </el-input>
                   </el-form-item>
                 </el-form>
               </div>
             </div>

             <div v-show="divide_active === 2"
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

             <div v-show="divide_active === 3"
                  style="text-align: center; margin-top: 20px; min-height: 375px; max-height: 375px">
               <div>
                 <span class="demonstration">结果图片</span>
                 <br>
                 <img :src="require('../../../../apps/results/' + this.processResult.result_name)" alt=""
                      style="width: 400px; height:auto; margin-top: 30px">
               </div>
             </div>

             <el-button style="margin-left: 80%; margin-top: 10px;" @click="cancel">取消</el-button>
             <el-button v-show="divide_active <= 2" :loading="divideLoad"
                        style="margin-left: 10px; margin-top: 10px;"
                        @click="divide_next">下一步
             </el-button>
             <el-button v-show="divide_active >= 3" :loading="divideLoad"
                        style="margin-left: 10px; margin-top: 10px;"
                        @click="cancel">完成
             </el-button>
            </el-tab-pane>
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
      logical_notLoad: false,
      add_active: 0,
      addForm: {
        res_name: ''
      },
      addLoad: false,
      subtract_active: 0,
      subtractForm: {
        res_name: ''
      },
      subtractLoad: false,
      multiply_active: 0,
      multiplyForm: {
        res_name: ''
      },
      multiplyLoad: false,
      divide_active: 0,
      divideForm: {
        res_name: ''
      },
      divideLoad: false
    }
  },
  components: {
    Head,
    Navigation,
    Copyright,
    PictureChooseOne
  },
  methods: {
    cancel() {

      this.selection = [];
      this.displayImg = [{fileName: 'default_pic.jpg'}, {fileName: 'default_pic.jpg'}];

      this.clear_active();

      this.grayingForm.res_name = '';
      this.threForm.res_name = '';
      this.logical_andForm.res_name = '';
      this.logical_orForm.res_name = '';
      this.logical_notForm.res_name = '';
      this.addForm.res_name = '';
      this.subtractForm.res_name = '';
      this.multiplyForm.res_name = '';
      this.divideForm.res_name = '';

      this.processResult = {
        code: '',
        message: '',
        result_name: 'default_res.jpg'
      };
    },
    clear_active() {
      this.graying_active = 0;
      this.thre_active = 0;
      this.logical_and_active = 0;
      this.logical_or_active = 0;
      this.logical_not_active = 0;
      this.add_active = 0;
      this.subtract_active = 0;
      this.multiply_active = 0;
      this.divideForm = 0;
    },
    async graying_next() {
      let tmp = this.graying_active;
      this.clear_active();
      this.graying_active = tmp;
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
        if (this.grayingForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
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
    async thre_next() {
      let tmp = this.thre_active;
      this.clear_active();
      this.thre_active = tmp;
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
        if (this.threForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
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
    async logical_and_next() {
      let tmp = this.logical_and_active;
      this.clear_active();
      this.logical_and_active = tmp;
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
        if (this.logical_andForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
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
    async logical_or_next() {
      let tmp = this.logical_or_active;
      this.clear_active();
      this.logical_or_active = tmp;
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
        if (this.logical_orForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
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
    async logical_not_next() {
      let tmp = this.logical_not_active;
      this.clear_active();
      this.logical_not_active = tmp;
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
        if (this.logical_notForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
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
    async add_next() {
      let tmp = this.add_active;
      this.clear_active();
      this.add_active = tmp;
      if (this.add_active === 0) {
        this.selection = this.$refs["addSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.add_active === 1) {
        if (this.addForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
        this.addForm.res_name += '.jpg';
      } else if (this.add_active === 2) {
        const axios = require('axios')

        this.addLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/add', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.addForm.res_name
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

        this.addLoad = false;


      } else if (this.add_active === 3) {
        this.add_active = 0;

        return
      }


      this.add_active++;
    },
    async subtract_next() {
      let tmp = this.subtract_active;
      this.clear_active();
      this.subtract_active = tmp;
      if (this.subtract_active === 0) {
        this.selection = this.$refs["subtractSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.subtract_active === 1) {
        if (this.subtractForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
        this.subtractForm.res_name += '.jpg';
      } else if (this.subtract_active === 2) {
        const axios = require('axios')

        this.subtractLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/subtract', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.subtractForm.res_name
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

        this.subtractLoad = false;


      } else if (this.subtract_active === 3) {
        this.subtract_active = 0;

        return
      }


      this.subtract_active++;
    },
    async multiply_next() {
      let tmp = this.multiply_active;
      this.clear_active();
      this.multiply_active = tmp;
      if (this.multiply_active === 0) {
        this.selection = this.$refs["multiplySelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.multiply_active === 1) {
        if (this.multiplyForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
        this.multiplyForm.res_name += '.jpg';
      } else if (this.multiply_active === 2) {
        const axios = require('axios')

        this.multiplyLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/multiply', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.multiplyForm.res_name
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

        this.multiplyLoad = false;


      } else if (this.multiply_active === 3) {
        this.multiply_active = 0;

        return
      }


      this.multiply_active++;
    },
    async divide_next() {
      let tmp = this.divide_active;
      this.clear_active();
      this.divide_active = tmp;
      if (this.divide_active === 0) {
        this.selection = this.$refs["divideSelection"].multipleSelection;
        this.displayImg[0] = this.selection[0];
        this.displayImg[1] = this.selection[1];
        if (this.selection.length !== 2) {
          this.$alert('选择的图片数量不是两张！', '数量错误', {
            confirmButtonText: '确定'
          });
          return
        }

      } else if (this.divide_active === 1) {
        if (this.divideForm.res_name === ''){
          this.$alert('输出图像名称不能为空！', '命名错误', {
            confirmButtonText: '确定'
          });
          return
        }
        this.divideForm.res_name += '.jpg';
      } else if (this.divide_active === 2) {
        const axios = require('axios')

        this.divideLoad = true;

        await axios.get(
            this.constant.data().BaseUrl + '/basic_func/divide', {
              params: {
                img_name1: this.selection[0].fileName,
                img_name2: this.selection[1].fileName,
                result_name: this.divideForm.res_name
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

        this.divideLoad = false;


      } else if (this.divide_active === 3) {
        this.divide_active = 0;

        return
      }


      this.divide_active++;
    }
  }
}
</script>

<style scoped>

</style>