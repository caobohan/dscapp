<!--  -->
<template>
  <div class="category-wrap">
    <div class="category-left">
      <ul>
        <li v-for="list in catetoryDatas" :key="list.category_id">
          <router-link :to="'/category/'+list.category_id">{{list.menu_name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axiox from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
    };
  },
  //监听属性 类似于data概念
  computed: {
    catetoryDatas(){
      return this.$store.state.catetoryDatas
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // getCategoryDatas() {
    //   Axiox.get("/api/v1/category").then(res => {
    //     if (res.data.status == 200) {
    //       this.$store.dispatch("actgetCategoryDatas",res.data.data)
    //     }
    //   });
    // }
  },
  mounted() {
    // this.getCategoryDatas();
    this.$store.dispatch("actgetCategoryDatas")
  }
};
</script>
<style lang="less">
.category-wrap {
  height: 100%;
  .category-left {
    height: 100%;
    width: 8.4rem;
    background: #efefef;
    overflow-y: scroll;
    ul {
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-active {
        display: block;
        background: #fff;
        color: #f23030;
      }
    }
  }
}
</style>