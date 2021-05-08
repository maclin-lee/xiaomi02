import axios from "axios"
let jsonp=function(url,data){
         if(!url){
         	throw new Error("url is must")
         }
         let callback="callback"+Math.random().toString().substr(9,18)
         let headOb=document.getElementsByTagName("head")[0]
         let script=document.createElement("script")
         script.setAttribute("type","text/javascript")
         let param=""
         if(typeof data==="string"){
               param+=`&${data}`
         }else if(typeof data==="object"){
              for(var key in data){
              	let val=encodeURIComponent(data[key])
              	param+=`&${key}=${val}`
              }
         }
         let time=Date.now()
         // param+="&_time"+time
         script.src=`${url}&${param}`
         window[callback]=(res)=>{
         	return new Promise((resolve,reject)=>{
         		if(res){
         			resolve(res)
         			headOb.removeChild(script)
         			delete window[callback]
         		}
         		
         	})
         }
         headOb.appendChild(script)
}
export default jsonp