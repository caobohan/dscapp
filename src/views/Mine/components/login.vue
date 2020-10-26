<!--  -->
<template>
  <div class="login">
    <h2 class="iconfont icon-jiantou3" @click="goHome"></h2>
    <div class="inner">
      <div class="logo">
        <img src="@/assets/azazaz.png" alt="" />
      </div>
      <div class="login-tab">
        <button :class="{ active: !tabFlag }" @click="tabChange">
          短信登陆
        </button>
        <button :class="{ active: tabFlag }" @click="tabChange">
          手机号登录
        </button>
      </div>
      <div class="login-content">
        <div class="DX" v-if="!tabFlag">
          <section>
            <input
              type="text"
              placeholder="手机号"
              maxlength="11"
              v-model="phone"
            />
            <input type="text" placeholder="请输入验证码" />
            <a href="javascript:;" v-if="!yanzhengma" @click="Yanzhengma"
              >获取验证码</a
            >
            <a href="javascript:;" v-else>已发送{{ yanzhengma }}</a>
          </section>
        </div>
        <div class="SJ" v-if="tabFlag">
          <section>
            <input
              type="text"
              placeholder="用户名/邮箱/手机号"
              v-model="user_name"
            />
            <section>
              <input
                type="password"
                placeholder="密码"
                v-model="password"
                v-if="passFlag"
              />
              <input
                type="text"
                placeholder="密码"
                v-model="password"
                v-if="!passFlag"
              />
              <button
                class="iconfont icon-yincang"
                v-if="passFlag"
                @click="passChange"
              ></button>
              <button
                class="iconfont icon-xianshi"
                v-if="!passFlag"
                @click="passChange"
              ></button>
            </section>
          </section>
          <section>
            <input
              type="text"
              placeholder="请输入验证码"
              maxlength="10"
              v-model="captcha"
            />
            <img
              ref="captcha"
              src="http://localhost:3000/api/v1/users/captcha"
              @click="getCaptcha"
              alt
            />
          </section>
        </div>
      </div>
      <button class="login-btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Toast } from "mint-ui";
import { loginUser } from "@/api/index.js";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tabFlag: true,
      password: "",
      passFlag: true,
      yanzhengma: 0,
      timer: "",
      phone: "",
      user_name: "",
      captcha: "",
      userinfo: {},
    };
  },
  //监听属性 类似于data概念
  computed: {
    identifyPhone() {
      return /^[1][3,5,7,8,9][0-9]{9}$/.test(this.phone);
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goHome() {
      this.$router.push("/mine");
    },
    tabChange() {
      this.tabFlag = !this.tabFlag;
    },
    getCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:3000/api/v1/users/captcha?t" + new Date().getTime();
    },
    passChange() {
      this.passFlag = !this.passFlag;
    },
    Yanzhengma() {
      if (this.identifyPhone) {
        this.yanzhengma = 10;
        this.timer = setInterval(() => {
          // console.log(this);
          this.yanzhengma--;
          console.log(this.yanzhengma);
          if (this.yanzhengma == 0) {
            clearInterval(this.timer);
          }
        }, 1000);
      } else {
        Toast("手机号格式不正确");
      }
    },
    async login() {
      if (!this.user_name) {
        Toast("请输入用户名");
      } else if (!this.password) {
        Toast("请输入密码");
      } else if (!this.captcha) {
        Toast("请输入验证码");
        return;
      }
      const result = await loginUser(this.user_name, this.password, this.captcha);
      console.log(result.data);
      if (result.err_code == 0) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000
        });
      }
      if (result.status == 500) {
        Toast({
          message: result.msg,
          position: "center",
          duration: 3000
        });
      }
      if (result.status == 200) {
        console.log(result.data[0]);
        this.$store.dispatch("getUserInfo", result.data);
        // console.log(this.$store.state.userInfo);
        this.$router.push("/home");
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
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background: white;
  .inner {
    width: 85%;
    margin: 100px auto;
    .logo {
      width: 10rem;
      height: 10rem;
      border: 5px solid #cccccc;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .login-tab {
      width: 100%;
      display: flex;
      justify-content: space-between;
      button {
        width: 45%;
        height: 4.4rem;
        background: #666;
        font-size: 1.5rem;
        color: white;
      }
      .active {
        background: red;
      }
    }
    .login-content {
      margin-top: 1rem;
      .DX {
        section {
          position: relative;
          a {
            position: absolute;
            top: 1.5rem;
            right: 5px;
          }
        }
      }
    }
    .SJ {
      section {
        position: relative;
        button {
          position: absolute;
          top: 1.5rem;
          right: 10px;
        }
        img {
          position: absolute;
          top: 0px;
          right: 10px;
        }
      }
    }
    .login-btn {
      width: 100%;
      height: 4.4rem;
      background: red;
      font-size: 1.5rem;
      color: white;
      border-radius: 1rem;
    }
    input {
      width: 100%;
      height: 4.4rem;
      border: 1px solid #cccccc;
      border-radius: 0.5rem;
      text-indent: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>