<!--  -->
<template>
  <div class="SelectLogin">
      <h2 @click="goHome">返回主页</h2>
    <div class="logo">
      <img src="@/assets/azazaz.png" alt="" />
    </div>
    <h2>请选择登录方式</h2>
    <router-link to="/login" tag="button">手机登录</router-link>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      goHome(){
          this.$router.push("/home")
      }
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