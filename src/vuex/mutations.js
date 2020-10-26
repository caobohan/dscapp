import { MessageBox } from 'mint-ui';
const mutatuions = {
    addNum(data) {
        console.log(data);
        data.num++
    },
    addNumX(data, data2) {
        data.num += data2
    },
    getCategoryDatas(sta, data) {
        sta.catetoryDatas = data
    },
    getSwipe(sta, data) {
        sta.swipeDatas = data
    },
    getdataRight(sta, data) {
        sta.dataRight = data
    },
    getUserInfo(sta, data) {
        sta.userInfo = data
        localStorage.setItem("userInfo", JSON.stringify(sta.userInfo))

    },
    delUserInfo(sta) {
        sta.userInfo = ""
        localStorage.removeItem("userInfo")
    },
    getGoodsList(sta, data) {
        console.log(data);
        sta.goodsLists = data
    },
    getGoodsDetail(sta, data) {
        sta.goodsDetails = data
    },
    setCartDatas(sta, data) {
        if (data) {
            sta.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(sta.carts))
    },
    addCart(sta, index) {
        sta.carts[index].value++
        localStorage.setItem("carts", JSON.stringify(sta.carts))
    },
    subCart(sta, index) {
        if (sta.carts[index].value == 1) {
            sta.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: "必须选一个"
            })
            console.log(123456);
        } else {
            sta.carts[index].value--
            localStorage.setItem("carts", JSON.stringify(sta.carts))

        }
    },
    dele(sta, index) {
        MessageBox.confirm("确定要删除吗？").then(() => {
            sta.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(sta.carts))
        }, () => {
            console.log("取消");
        })
    },
    change(sta, index) {
        if (sta.carts[index].value < 0) {
            sta.carts[index].value = 1
            MessageBox({
                title: '提示',
                message: "必须选一个"
            })
            console.log(123456);
        } else {
            localStorage.setItem("carts", JSON.stringify(sta.carts))

        }
    },
    changeSelect(sta, index) {
        sta.carts[index].isSelect = !sta.carts[index].isSelect
        // console.log(sta.carts[index].isSelect);
        //输出的是判断为false则马上跳出循环并return成false
        let isCheck = sta.carts.every(item => {
            return item.isSelect == true
        })
        sta.checkAll = isCheck
        localStorage.setItem("checkAll", sta.checkAll)
        localStorage.setItem("carts", JSON.stringify(sta.carts))

    },
    selectAllFn(sta) {
        sta.checkAll = !sta.checkAll
        sta.carts.forEach(item => {
            item.isSelect = sta.checkAll
        })
        localStorage.setItem("carts", JSON.stringify(sta.carts))
        localStorage.setItem("checkAll", JSON.stringify(sta.checkAll))
    },
    getSearch(sta,data){
        console.log(data);
        sta.seach=data
    }
}
export default mutatuions