import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Search from "../views/Search/Search.vue"
import Cart from "../views/Cart/Cart.vue"
import Mine from "../views/Mine/Mine.vue"
import Login from "../views/Mine/components/login.vue"
//配置首页的子组件
import Index from "../views/Home/children/Index.vue"
import Ele from "../views/Home/children/Ele.vue"
import Person from "../views/Home/children/Person.vue"
import Box from "../views/Home/children/Box.vue"
import Phone from "../views/Home/children/Phone.vue"
import Computer from "../views/Home/children/Computer.vue"
import House from "../views/Home/children/House.vue"
import Face from "../views/Home/children/Face.vue"
import DemoVuex from "../views/DemoVuex/demo.vue"
import ListDetail from "../views/Category/components/ListDetail.vue"
import GoodsDetail from "../views/GoodsDetail/GoodsDetail"
import Seachlist from "../views/Search/Seachlist"
const routes = [{
  path: "/home",
  name: "home",
  component: Home,
  children: [{
    path: "index",
    component: Index
  }, {
    path: "ele",
    component: Ele
  }, {
    path: "person",
    component: Person
  }, {
    path: "box",
    component: Box
  }, {
    path: "phone",
    component: Phone
  }, {
    path: "computer",
    component: Computer
  }, {
    path: "house",
    component: House
  }, {
    path: "face",
    component: Face
  }, {
    path: "/home",
    redirect: "/home/index"
  }]
}, {
  path: "/category/:cid",
  name: "category",
  component: Category,
}, {
  path: "/mine",
  name: "mine",
  component: Mine
}, {
  path: "/cart",
  name: "cart",
  component: Cart
}, {
  path: "/search",
  name: "search",
  component: Search
}, {
  path: "/",
  redirect: "/home/index",
}, {
  path: "/demo",
  name: "demo",
  component: DemoVuex
}, {
  path: "/Login",
  name: "Login",
  component: Login
},{
  path: "/listDetail",
  name: "listDetail",
  component: ListDetail
},{
  path: "/goodsdetail",
  name: "goodsdetail",
  component: GoodsDetail
},{
  path: "/seachlist",
  name: "seachlist",
  component: Seachlist
}]


const router = new VueRouter({
    // mode: "history",  //hash 模式  地址栏中带有#   history地址栏中去掉#
    routes: routes
})

export default router
