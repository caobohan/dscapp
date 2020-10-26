<!--  -->
<template>
  <div class="miaosha">
    <div class="img">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
        alt=""
      />
    </div>
    <div class="ms">
      <span class="text-span">距离结束还剩</span>
      <span class="ms1">{{ dd }}</span>
      <span class="ms2"> : </span>
      <span class="ms1">{{ hh }}</span>
      <span class="ms2"> : </span>
      <span class="ms1">{{ mm }}</span>
      <span class="ms2"> : </span>
      <span class="ms1">{{ ss }}</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      timer: "",
      dd: "0",
      hh: "0",
      mm: "0",
      ss: "0"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      var date = new Date();
      var satrTime = date.getTime();
      var endDate = new Date("2020-10-9 18:00:00");
      var endTime = endDate.getTime();

      var otime = endTime - satrTime;

      this.dd = Math.floor(otime / 1000 / 60 / 60 / 24);
      this.hh = Math.floor((otime / 1000 / 60 / 60) % 24);
      this.mm = Math.floor((otime / 1000 / 60) % 60);
      this.ss = Math.floor((otime / 1000) % 60);
    }
  },
  mounted() {
    this.timer=setInterval(this.timeFn, 1000);
  },
  destroyed(){
      clearInterval(this.timer)
  }
};
</script>
<style lang="less">
.miaosha {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  .img {
    line-height: 6rem;
    img {
      width: 10rem;
    }
  }
  .ms {
    display: flex;
    align-items: center;
    .text-span {
      color: #333;
    }
    .ms1 {
      text-align: center;
      line-height: 2rem;
      width: 2rem;
      height: 2rem;
      background: red;
      color: white;
      border: 1px solid red;
      border-radius: 10%;
    }
    .ms2 {
      width: 1rem;
      color: red;
      font-size: 2rem;
      text-align: center;
    }
  }
}
</style>