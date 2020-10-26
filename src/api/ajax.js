import axios from "axios";
export default function ajax(url="",parmas={},type="get"){
    let promise
    return new Promise((resolve,reject)=>{
        if("get"===type){
            let parmasStr=""
            Object.keys(parmas).forEach(key=>{
                parmasStr+=key+"="+parmas[key]+"&"
            })
            if(parmasStr!==""){
                parmasStr=parmasStr.substr(0,parmasStr.lastIndexOf("&"))
            }
            
            url+="?"+parmasStr
            promise=axios.get(url)
        }else if("post"===type){
            promise=axios.post(url,parmas)
        }
        promise.then((response)=>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}