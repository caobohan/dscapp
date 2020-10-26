import ajax from "./ajax"
const Base_url="/api"
export const getHomeSwipe=()=>ajax(Base_url+"/v1/index/swipe")
export const getCategotyleft=()=>ajax(Base_url+"/v1/category")
export const loginUser=(user_name,password,captcha)=>ajax(Base_url+"/v1/users/login",{user_name,login_password:password,captcha},"post")
export const getCategotyRight=(cid)=>ajax(Base_url+"/v1/category/categorylist/"+cid )
export const getGoodsList = (params) => ajax(Base_url + "/v1/category/goodslist", params)
export const getGoodsDetail = (params) => ajax(Base_url + "/v1/category/goodsdetail", params)
export const getSearch = (params) => ajax("http://39.101.210.136:3000/api/v1/search", params)



