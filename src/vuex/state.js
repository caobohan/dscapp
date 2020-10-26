const state={
    num:1,
    catetoryDatas: [],
    swipeDatas:[],
    dataRight:[],
    userInfo:localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : [],
    goodsLists:[],
    goodsDetails:[],
    carts:localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll:localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    seach:[]
}
export default state