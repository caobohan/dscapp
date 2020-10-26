<!--  -->
<template>
  <div class="detail-container">
    <div class="tab">
      <div>
        <a
          href="#"
          class="iconfont icon-jiantou3"
          onclick="window.history.back()"
        ></a>
      </div>
      <div>商品</div>
      <div>详情</div>
      <div>评论</div>
      <div>
        <a href="#" onclick="window.history.back()">→</a>
      </div>
    </div>
    <div class="detail-swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img :src="'http://localhost:3000/' + goodsdetail.goods_img" alt />
          </div>
          <div class="swiper-slide">
            <img :src="'http://localhost:3000/' + goodsdetail.goods_img" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="text">
      <h1>{{ goodsdetail.shop_price }}</h1>
      <h3>{{ goodsdetail.goods_name }}</h3>
    </div>
    <div class="foot">
      <div>
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
      <div>
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche"></i>
          <div :class="{addNum:flag}" v-show="flag">+1</div>
          <em>{{ count }}</em>
          <span>购物车</span>
        </router-link>
      </div>
      <div @click="addCartFn(goodsdetail)">加入购物车</div>
      <div>立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      flag: false,
      timer: ""
    };
  },
  //监听属性 类似于data概念
  computed: {
    goodsdetail() {
      return this.$store.state.goodsDetails;
    },
    count() {
      let count = 0;
      this.$store.state.carts.forEach(item => {
        count += parseInt(item.value);
      });
      return count;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //添加购物车的方法
    addCartFn(data) {
      this.flag=true
      clearInterval(this.timer)
      this.timer=setInterval(()=>{
        this.flag=false
      },1000)
      var isCart = this.$store.state.carts.find(item => {
        //有---将购物车中的商品数字++
        //没有---新增加一个商品
        if (item.goods_id == data.goods_id) {
          item.value++;
        }
        return item.goods_id == data.goods_id;
      });
      if (!isCart) {
        var cartData = {
          goods_id: data.goods_id,
          goods_img: data.goods_img,
          goods_name: data.goods_name,
          shop_price: data.shop_price,
          value: 1,
          isSelect: false
        };
      }
      this.$store.commit("setCartDatas", cartData);
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("getGoodsDetail", {
      goods_id: this.$route.query.goods_id
    });

    new Swiper(".swiper-container", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.detail-container {
  // position: absolute;
  // top: 0;
  // left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  .tab {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 4.4rem;
    line-height: 4.4rem;
    background-color: hsla(0, 0%, 100%, 0.95);
    display: flex;
    justify-content: center;
    div {
      flex: 1;
      text-align: center;
      font-size: 1.4rem;
      color: #555;
    }
  }
  .detail-swiper {
    width: 100%;
    height: 37.5rem;
    img {
      width: 100%;
      height: 37.5rem;
    }
  }
  .text {
    background: wheat;
    border: 1px solid wheat;
    border-radius: 1rem;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    h3 {
      font-size: 1rem;
      overflow: hidden;
      line-height: 1.5;
      max-height: 5rem;
      font-weight: 400;
    }
    h1 {
      color: red;
      &::before {
        content: "￥";
      }
    }
  }
  .foot {
    background: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    text-align: center;
    height: 4.4rem;
    color: #555;
    div {
      font-size: 1.2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      i {
        font-size: 2rem;
      }
    }
    div:nth-child(1) {
      display: flex;
      flex: 1;
    }
    div:nth-child(2) {
      flex: 1;
    }
    div:nth-child(3) {
      flex: 1;
      position: relative;
      a {
        display: block;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
      em {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        min-width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.8rem;
        background: red;
        color: #fff;
        text-align: center;
        line-height: 1.4rem;
        font-style: normal;
        padding: 0.2rem;
      }
      .addNum {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        min-width: 1.4rem;
        height: 1.4rem;
        color: red;
        text-align: center;
        line-height: 1.4rem;
        font-style: normal;
        padding: 0.2rem;
        animation: moveop 1s linear;
      }
      @keyframes moveop {
        0%{
          top: 1rem;
          opacity: 0;
        }
        50%{
          top:-2rem;
          opacity: 1;
        }
        100%{
          top:-2rem;
          opacity: 0;
        }
      }
    }
    div:nth-child(4) {
      flex: 2;
      font-size: 1.2rem;
      background: red;
      color: wheat;
    }
    div:nth-child(5) {
      flex: 2;
      font-size: 1.2rem;
      background: orangered;
      color: wheat;
    }
  }
}
</style>