import { getHomeSwipe } from "@/api/index";
import { getCategotyleft } from "@/api/index";
import { getCategotyRight } from "@/api/index";
import { getGoodsList } from "@/api/index";
import { getGoodsDetail } from "@/api/index";
import { getSearch } from "@/api/index";
const actions = {
    actAddNumX(data, data2) {
        data.commit("addNumX", data2)
    },
    // actgetCategoryDatas(sta,data){
    //     sta.commit("getCategoryDatas",data)
    // },
    async actSwipe(sta) {
        var result = await getHomeSwipe()
        sta.commit("getSwipe", result.data)
        // console.log(result);
    },
    async actgetCategoryDatas(sta) {
        var result = await getCategotyleft()
        sta.commit("getCategoryDatas", result.data)
    },
    async actgetdataRight(sta, data) {
        var result = await getCategotyRight(data)
        sta.commit("getdataRight", result.data)

    },
    getUserInfo(sta, data) {
        sta.commit("getUserInfo", data[0])
    },
    delUserInfo(sta) {
        sta.commit("delUserInfo")
    },
    async getGoodsList(sta, data) {
        var result = await getGoodsList(data)
        console.log(result.data);
        sta.commit("getGoodsList", result.data)
    },
    async getGoodsDetail(sta, data) {
        var result = await getGoodsDetail(data)
        // console.log(result);
        sta.commit("getGoodsDetail", result.data[0])
    },
    async getSearch(sta,data){
        var result=await getSearch(data)
        sta.commit("getSearch",result.data)
    }

}
export default actions