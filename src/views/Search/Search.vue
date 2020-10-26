<!--  -->
<template>
  <div class="search">
    <div class="CategotyHeader">
      <header>
        <a
          href="#"
          class="iconfont icon-jiantou3"
          onclick="window.history.back()"
        ></a>
        <form action="">
          <input type="text" placeholder="请输入关键字" v-model="text" />
          <i class="iconfont icon-sousuo2"></i>
        </form>
        <a @click="getSearch" href="javascript:;">搜索</a>
      </header>
    </div>
    <div class="search-wrap">
      <div class="title">
        <div>最近搜索</div>
        <div class="dele iconfont icon-shanchu1"></div>
      </div>
      <div class="ss">
        <ul class="list">
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
        </ul>
      </div>
    </div>
    <div class="search-wrap">
      <div class="title">
        <div>热搜</div>
        <div class="dele iconfont icon-shanchu1"></div>
      </div>
      <div class="ss">
        <ul class="list">
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
          <li>就这</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer
  },
  data() {
    //这里存放数据
    return {
      text: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getSearch() {
      if (this.text) {
        this.$store.dispatch("getSearch", { keywords: this.text });
        this.$router.push("/seachlist");
      }
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
.search-wrap {
  margin-top: 4.4rem;
  .title {
    display: flex;
    justify-content: space-between;
    height: 4.4rem;
    line-height: 4.4rem;
    margin: 0 10px;
    font-size: 1.6rem;
  }
  .ss {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 20%;
        height: 3rem;
        text-align: center;
        background: #efefef;
        border: 1px solid #cccccc;
        line-height: 3rem;
        box-sizing: border-box;
        margin: 1% 2.5%;
      }
    }
  }
}
</style>