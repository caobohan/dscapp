<!--  -->
<template>
  <div>
    <div class="swipe-list-wrap">
      <div class="swipe-wrap2" :style="styleobj2">
        <div
          class="swipe-item"
          v-for="swipelist in swipeListDatas"
          :key="swipelist.id"
        >
          <img :src="swipelist.imgsrc" alt="" />
          <span>{{ swipelist.title }}</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="styleobj"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    swipeListDatas: Array
  },
  components: {},
  data() {
    //这里存放数据
    return {
        //屏幕宽度
        screenW:document.documentElement.clientWidth,
        scrollContentW:1100,//滚动内容宽度
        bgBarW:100,//进度条背景宽度
        barW:20,//进度条长度
        startX:0,//进度条起点
        endX:0,//进度条终点
        barMoveW:0,//移动的距离
        contentMoveW:0,//内容滚动的距离
        contentMove:0
    };
  },
  methods:{
     touchstartFn(e){//开始触摸
        console.log(e.touches[0].pageX);
        let touch=e.touches[0]
        this.startX=Number(touch.pageX)
     },
     touchmoveFn(e){
         let touch=e.touches[0]
         //移动的距离
         let moveWidth=Number(touch.pageX)-this.startX
        //  console.log(moveWidth);
        this.contentMove=moveWidth+this.contentMoveW
         this.barMoveW=-(this.bgBarW/this.scrollContentW)*moveWidth+this.endX
         console.log(this.endX);
        // this.barMoveW=-moveWidth
         if(this.barMoveW<=0){
            this.barMoveW=0
        }else if(this.barMoveW>this.bgBarW-this.barW){
            this.barMoveW=this.bgBarW-this.barW
        }
        if(this.contentMove>=0){
            this.contentMove=0
        }else if(this.contentMove<=this.screenW-this.scrollContentW){
            this.contentMove=this.screenW-this.scrollContentW
        }
     },
     getBarWidth(){
       this.barW=this.bgBarW*this.screenW/this.scrollContentW
     },
     touchendFn(){
         this.endX=this.barMoveW
         this.contentMoveW = this.contentMove;
         console.log(this.endX);
     },
     bindEvent(){
         this.$el.addEventListener("touchstart",this.touchstartFn,false)
         this.$el.addEventListener("touchmove",this.touchmoveFn,false)
         this.$el.addEventListener("touchend",this.touchendFn,false)
     }
  },
  computed:{
      styleobj(){
          return{
              width:`${this.barW}px`,
              left: `${this.barMoveW}px`,
          }
      },
      styleobj2(){
        return{
          left: `${this.contentMove}px`,
        }
      }
  },
  mounted(){
      console.log(this);
      console.log(this.$el);
      this.bindEvent()
      this.getBarWidth()

  }
};
</script>
<style lang="less">
.swipe-list-wrap {
  width: 100%;
  height: 19rem;
  background: #ccc;
  position: relative;
  left: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  .swipe-wrap2 {
    width: 110rem;
    height: 19rem;
    position: absolute;
    left: 0;
    top: 0;
    .swipe-item {
      width: 11rem;
      height: 19rem;
      background: #ffffff;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    img {
      width: 10rem;
    }
  }
}
.swipe-list-wrap::-webkit-scrollbar {
  display: none;
}
.progress {
  width: 100px;
  height: 5px;
  background: #ccc;
  position: absolute;
  left: 50%;
  z-index: 1;
  margin-left: -50px;
  .progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    background: red;
  }
}
</style>