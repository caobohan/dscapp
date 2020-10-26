<!--  -->
<template>
  <div class="CategotyRight">
    <div class="lod-img" v-if="dataRight == ''">
      <img :src="imtSrc" alt="" />
    </div>
    <div class="category-img">
      <img :src="ad" alt="" />
    </div>
    <div class="category-right-content">
      <div v-for="lists in dataRight" :key="lists.cat_id">
        <div class="right-title">{{ lists.cat_name }}</div>
        <ul>
          <li v-for="list in lists.child" :key="list.cat_id">
            <router-link :to="'/listdetail?cat_id=' + list.cat_id">
              <img
                src="https://x.dscmall.cn/storage/images/202008/thumb_img/1153_thumb_G_1598580446008.jpg"
                alt=""
              />
              <div>{{ list.cat_name }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imtSrc: require("@/assets/images/timg.gif"),
      // dataRight: [],
      ad: ""
    };
  },
  //监听属性 类似于data概念
  computed: {
    dataRight() {
      return this.$store.state.dataRight;
    }
  },
  //监控data中的数据变化
  watch: {
    $route(to) {
      this.$store.state.dataRight = "";
      var cid = to.params.cid;
      this.gogogo(cid);
      // this.dataRight = [];
      // this.getdataRight(cid);
      // var arr = this.$store.state.catetoryDatas.filter(item => {
      //   return item.category_id == cid;
      // });
      // this.ad = arr[0].menu_img;
    }
  },
  //方法集合
  methods: {
    // getdataRight(cid) {
    //   Axios.get("/api/v1/category/categorylist/" + cid).then(res => {
    //     console.log(res);
    //     if (res.status == 200) {
    //       this.dataRight = res.data.data;
    //       var arr = this.$store.state.catetoryDatas.filter(item => {
    //         return item.category_id==cid
    //       })
    //       this.ad=arr[0].menu_img
    //     }
    //   });
    // }
    gogogo(cid) {
      this.$store.dispatch("actgetdataRight", cid);
      var arr = this.$store.state.catetoryDatas.filter(item => {
        return item.category_id == this.$route.params.cid;
      });
      this.ad = arr[0].menu_img;
    }
  },
  mounted() {
    this.gogogo(this.$route.params.cid);
    // this.getdataRight(this.$route.params.cid);
  }
};
</script>
<style  lang="less">
.CategotyRight {
  overflow-y: scroll;
  flex: 1;
  .lod-img {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -15rem;
    margin-left: -15rem;
    img{
      width: 37rem;
      height: 30rem;
    }
  }
  .category-img {
    img {
      width: 90%;
      margin-left: 5%;
    }
  }
  .category-right-content {
    .right-title {
      font-size: 1.4rem;
      text-align: center;
      height: 4.4rem;
      line-height: 4.4rem;
      color: #666;
    }
    ul {
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33%;
        margin-bottom: 1rem;
        color: #666;

        img {
          width: 5.2rem;
          height: 5.2rem;
        }
      }
    }
  }
}
</style>