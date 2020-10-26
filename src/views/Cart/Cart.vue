<!--  -->
<template>
  <div class="cart">
    <div class="head">
      <a
        href="#"
        class="iconfont icon-jiantou3"
        onclick="window.history.back()"
      ></a>
      <div>购物车</div>
    </div>
    <div class="lod-img" v-if="this.$store.state.carts == ''">
      <img :src="imtSrc" alt="" />
      <h1>还没有购买任何东西哦！</h1>
    </div>
    <div v-else>
      <div class="cart-content">
        <ul>
          <li v-for="(cart, index) in cartLists" :key="cart.goods_id">
            <div class="select" @click="changeSelect(index)">
              <i class="iconfont icon-danxuankuang" v-if="!cart.isSelect"></i>
              <i
                v-else
                class="iconfont icon-danxuankuangxuanzhong"
                style="color:red"
              ></i>
            </div>
            <div class="cart-img">
              <img :src="'http://localhost:3000//' + cart.goods_img" alt="" />
            </div>
            <div class="cart-info">
              <div class="title">{{ cart.goods_name }}</div>
              <div class="cart-wrap">
                <span class="price">{{ cart.shop_price }}</span>
                <div class="cart-num">
                  <a href="javascript:;" @click="subCart(index)">-</a>
                  <input
                    type="text"
                    value="1"
                    v-model="cart.value"
                    @input="change(index)"
                  />
                  <a href="javascript:;" @click="addCart(index)">+</a>
                  <button
                    class="dele iconfont icon-shanchu1"
                    @click="dele(index)"
                  ></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-foot">
        <div>
          <div class="checkAll">
            <i class="iconfont icon-danxuankuang" v-if="!selectAll"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              v-else
              style="color:red"
            ></i>
            <span @click="selectAllFn">全选</span>
          </div>
        </div>
        <div>
          合计:
          <span style="color:red; font-size:1.6rem">{{ total }}元</span>
        </div>
        <div class="jiesuan">
          去结算
          <span>({{ count }})</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer
  },
  data() {
    //这里存放数据
    return {
      left: true,
      right: false,
      imtSrc: require("@/assets/images/timg2.gif")
    };
  },
  //监听属性 类似于data概念
  computed: {
    cartLists() {
      return this.$store.state.carts;
    },
    selectAll() {
      return this.$store.state.checkAll;
    },
    count() {
      let count = 0;
      this.$store.state.carts.forEach(item => {
        if (item.isSelect) {
          count += parseInt(item.value);
        }
      });
      return count;
    },
    total() {
      let total = 0;
      this.$store.state.carts.forEach(item => {
        if (item.isSelect) {
          total += item.value * item.shop_price; //总价等于 数量乘以价格 所有商品相加
        }
      });
      return total;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations(["addCart", "subCart", "dele", "change", "changeSelect"]),
    selectAllFn() {
      this.$store.commit("selectAllFn");
    }
    // addCart(index) {
    //   this.$store.commit("addCart", index);
    // },
    // subCart(index) {
    //   this.$store.commit("subCart", index);
    // },
    // dele(index) {
    //   this.$store.commit("dele", index);
    // },
    // change(index) {
    //   console.log(this.$store.state.carts[index].value);
    //   this.$store.commit("change", index);
    // },
    // changeSelect(index) {
    //   this.$store.commit("changeSelect", index);
    // }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.head {
  width: 100%;
  height: 4.4rem;
  display: flex;
  a {
    flex: 1;
    text-align: center;
    line-height: 4.4rem;
    font-size: 1.5rem;
  }
  div {
    text-align: center;
    line-height: 4.4rem;
    flex: 5;
    font-size: 1.5rem;
  }
}
.lod-img {
  position: fixed;
  top: 50%-37rem;
  left: 50%-37rem;
  text-align: center;
  img {
    width: 300px;
  }
}
.cart-content {
  ul {
    li {
      height: 10rem;
      border-bottom: 1px solid #efefef;
      display: flex;
      .select {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex: 1;
      }
      .cart-img {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        img {
          width: 100%;
        }
      }
      .cart-info {
        display: flex;
        flex-direction: column;
        flex: 6;
        .title {
          font-size: 1.2rem;
          height: 4rem;
          line-height: 2rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          margin-bottom: 1rem;
        }
        .price {
          color: red;
          font-size: 1.6rem;
          float: left;
          &::before {
            content: "￥";
          }
        }
        .cart-num {
          float: right;
          a {
            width: 2rem;
            height: 2rem;
            background: #ccc;
            text-align: center;
            line-height: 2rem;
            font-size: 1.4rem;
            float: left;
          }
          input {
            width: 3rem;
            height: 2rem;
            float: left;
            border: 1px solid #efefef;
            box-sizing: border-box;
            text-align: center;
          }
          .dele {
            margin-left: 2rem;
            background: transparent;
            color: #999;
          }
        }
      }
    }
  }
}
.cart-foot {
  position: fixed;
  bottom: 4.9rem;
  width: 100%;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  div {
    flex: 1;
    line-height: 4.4rem;
  }
  .jiesuan {
    width: 30%;
    text-align: center;
    color: #fff;
    background-color: #f55;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.4rem;
  }
}
</style>