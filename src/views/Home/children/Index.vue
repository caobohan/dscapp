<!--  -->
<template>
  <div class="home-index">
    <div class="swipe-wrap">
      <Swipe />
    </div>
    <QuickNav />
    <SwipeNews/>
    <MiaoSha/>
    <SwipeList :swipeListDatas="swipeListDatas" />
    <SwipeList :swipeListDatas="swipeListDatas" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';handleChange
import Swipe from "@/components/Swipe.vue";
import QuickNav from "../components/QuickNav";
import SwipeNews from "../components/SwipeNews";
import SwipeList from "../components/SwipeList";
import MiaoSha from "../components/MiaoSha";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swipe,
    QuickNav,
    SwipeNews,
    SwipeList,
    MiaoSha
  },
  data() {
    //这里存放数据
    return {
      swipeListDatas:[{
        id:1,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲1"
      },{
        id:2,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲2"
      },{
        id:3,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲3"
      },{
        id:4,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲4"
      },{
        id:5,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲5"
      },{
        id:6,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲6"
      },{
        id:7,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲7"
      },{
        id:8,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲8"
      },{
        id:9,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲9"
      },{
        id:10,
        imgsrc:"https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175230574.jpg",
        title:"电饭煲10"
      },]
    };
  }
};
</script>

<style lang="less">
.swipe-wrap {
  margin: 0px 10px;
  div {
    border-radius: 10px !important;
  }
}
</style>