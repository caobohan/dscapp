<!--  -->
<template>
  <div class="CategotyHeader">
    <header>
      <a
        href="#"
        class="iconfont icon-jiantou3"
        onclick="window.history.back()"
      ></a>
      <form action="">
        <input type="text" placeholder="请输入关键字" @click="runUrl" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
    </header>
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
    runUrl() {
      this.$router.push("/search");
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
.CategotyHeader {
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 4.4rem;
  header {
    display: flex;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #cccccc;
    form {
      position: relative;
      width: 80%;
      height: 3.4rem;
      input {
        width: 100%;
        height: 3rem;
        border: 1px solid #cccccc;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        top: 0;
        width: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #cccccc;
      }
    }
    a {
      width: 15%;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>