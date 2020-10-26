<!--  -->
<template>
  <div class="mine">
    <div v-if="!userInfo.user_id">
      <SelectLogin />
    </div>
    <div v-else class="SelectLogin">
      <h2>您已登录</h2>
      <h2>用户:{{ userInfo.user_name }}您好！</h2>
      <div class="logo">
        <img src="@/assets/azazaz.png" alt="" />
      </div>
      <h2>您需要什么服务？</h2>
      <h2 @click="goHome">返回主页</h2>
      <button @click="delUserInfo">退出登录</button>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
import SelectLogin from "./components/SelectLogin";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    SelectLogin
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHome(){
          this.$router.push("/home")
      },
    delUserInfo() {
      this.$store.dispatch("delUserInfo");
      console.log(this.$store.state.userInfo);
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this.$store.state.userInfo);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.SelectLogin {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 10rem;
    height: 10rem;
    border: 5px solid #cccccc;
    border-radius: 50%;
    text-align: center;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  h2 {
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.5rem;
  }
  button {
    width: 20rem;
    height: 4.4rem;
    background: red;
    font-size: 1.5rem;
    color: white;
  }
}
</style>