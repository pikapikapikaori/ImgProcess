# ImgProcess 功能文档

[![GitHub](https://img.shields.io/github/license/pikapikapikaori/ImgProcess?style=plastic)](./LICENSE)
![GitHub last commit](https://img.shields.io/github/last-commit/pikapikapikaori/ImgProcess?style=plastic)
[![Release](https://img.shields.io/github/v/release/pikapikapikaori/ImgProcess?include_prereleases&style=plastic)](https://github.com/pikapikapikaori/ImgProcess/releases/tag/frontV1)
![Python](https://img.shields.io/badge/Python-v3.8-3776AB?style=plastic&logo=python&logoColor=white)
![Vue](https://img.shields.io/badge/Vue.js-v2.6-4FC08D?style=plastic&logo=vuedotjs&logoColor=white)

## 项目成员

- 李亦杨 10195101467: 后端（基于直方图的图像分析与图像增强、图像分割、图像去噪）、前端
- 刁泽皓 10195101470: 后端（图像的基本操作、图像的平滑与锐化、图像形态学操作）


## 项目文件简述

- 后端在根目录下。
- 前端在目录`/static`下。
- 针对年龄变换项目的技术理解报告在`/report`下，可以直接下载[pdf文件](./report/report.pdf)阅读已编译好的pdf文件。
- 项目功能文档为根目录下的[README文件](./README.md)，即本文件，也可以参考前端项目的主界面介绍，可以直接在[Release](https://github.com/pikapikapikaori/ImgProcess/releases/tag/frontV1)中下载编译完成的前端文件。

## 运行方法

- 后端：`cd`到根目录`/ImgProcess`下，使用命令`flask run`启动。请勿改变后端端口。
- 前端：`cd`到目录`/ImgProcess/static`下，使用命令`npm run serve`启动；或者也可以在[Release](https://github.com/pikapikapikaori/ImgProcess/releases/tag/frontV1)下载打包好的前端文件`dist.zip`，解压后使用浏览器打开`dist`文件夹内的`index.html`文件即可。

也可以在选择好安装了Python 3.8与Vue 3的环境后，运行根目录`/ImgProcess`下的`run.sh`来运行。

## 项目配置

### 运行端口

- 前端：9091
- 后端：5000

### 项目环境

- 前端：
  - Vue: 2.6.11
  - element-ui: 2.15.8
  - vue-router: 3.5.4
- 后端：
  - Python: 3.8
  - Flask: 2.1.2
  - Flask-Cord: 3.0.10
  - Pillow: 9.1.1
  - matplotlib: 3.5.2
  - numpy: 1.22.4
  - opencv-python: 4.55.64

## 功能清单

本项目实现了基础的图片处理功能。

项目实现的功能大致可以分为以下几个部分：

- 图像的基本操作
- 基于直方图的图像分析
- 图像分割
- 图像的平滑与锐化
- 图像形态学操作
- 图像去噪

### 图像基本操作

1. **图像的灰度化**

2. **图像的二值化**

3. **两张图片的逻辑与操作**

   仅支持灰度图。

4. **两张图片的逻辑或操作**

   仅支持灰度图。

5. **图片的逻辑非操作**

   仅支持灰度图。

6. **两张图像的加法**

7. **两张图像的减法**

8. **两张图片的乘法**

9. **两张图片的除法**

10. **图像的翻转**

    可自选三种反转方向：水平翻转、垂直翻转、对角翻转。

11. **图像的平移**

    可自选平移的像素值，可自选平移的方向。

12. **图像的旋转**

    可自选旋转的角度，实现了图像旋转后自动调整大小以防止图像部分缺失。

13. **图像的放缩**

    可自选图像在x、y方向上的放缩比例。


### 基于直方图的图像分析与图像增强

1. **图像的灰度直方图**

   同时输出灰度图中像素值的最值。

2. **图像的彩色直方图**

   将图像b、g、r三个通道的直方图绘制于同一张图中，同时输出各自的像素值的最值。


### 图像分割

1. **图像边缘检测**

   实现了基于多种算子的边缘检测功能：

   - Roberts算子

     支持自定义处理后的两张图像的权值与偏置。

   - Sobel算子

     支持自定义处理后的两张图像的权值与偏置。

   - Laplacian算子

     支持自定义高斯滤波的卷积核大小与偏差值，以及Laplacian算子的核大小。

   - LoG算子

   - Canny算子

     支持自定义高斯滤波的卷积核大小与偏差值。

2. **图像的线条变化检测**

   实现了基于`HoughLines`与`HoughLinesP`的线条变化检测功能。

### 图像的平滑与锐化

1. **空域平滑**

   实现了多种平滑方法：

   - 领域平均法

     可自定义计算单元核数。

   - 中值滤波法

     可自定义计算单元核数。

2. **空域锐化**

   实现了基于多种算子的空域锐化方法；

   - Robert算子
   - Laplacian算子
   - Sobel算子
   - Prewitt算子

3. **频域平滑**

   实现了对灰度图的多种平滑方法：

   - 理想低通滤波

     可自定阈值。

   - 巴特沃斯低通滤波

     可自定阈值与阶数。

   - 指数低通滤波

     可自定阈值与阶数。

4. **频域锐化**

   实现了对灰度图的多种锐化方法：

   - 理想高通滤波

     可自定阈值。

   - 巴特沃斯高通滤波

     可自定阈值与阶数。

   - 指数高通滤波

     可自定阈值与阶数。

### 图像形态学操作

1. **腐蚀**
2. **膨胀**
3. **开运算**
4. **闭运算**

以上功能均可自定义结构元类型与大小。

### 图像去噪

1. **添加高斯噪声**

2. **添加椒盐噪声**

   可自定义椒盐噪声范围。

3. **均值滤波**

   实现了多种滤波器：

   - 算术均值滤波器

   - 几何均值滤波器

   - 谐波均值滤波器

     可自定义滤波器大小。


   以上均支持自定义滤波器大小.

4. **统计滤波**

   实现了多种滤波器：

   - 中值滤波器
   - 最大值滤波器
   - 最小值滤波器

5. **频域滤波**

   考虑到低通滤波器、高通滤波器、带通滤波器、带阻滤波器的本质差别只在于允许通过的像素点范围，因而本项目将其综合为一个通用的频域滤波器，可自定义允许通过的一段像素范围，以及未通过的像素的新值。



## 实际应用场景

基于实际应用的考虑，本项目利用Vue实现了一个前端，允许用户在手动上传图片，并跳转到所需执行的功能对应的界面后，选择已上传的图片并自定义部分参数完成对图片的处理功能。

目前而言，本项目已实现的可用于图片处理的功能主要包括：翻转、旋转、灰度化、二值化、反色、去噪、边缘检测等。
