import axios from "axios"
let toLogin=()=>{
      router.replace({
      	 path:"/login",
      	 query:{
      	 	origin:router.currentRoute.fullPath
      	 }
      })
}
let handleError=(status)=>{
	   switch(status){
	   	  case 401:
	   	   toLogin()
	   	   break;
	   	   case 403:
	   	   toast({
	   	   	content:"登入过期"
	   	   })
	   	   window.localStorage.removeItem("token")
	   	   console.log("修改store状态")
	   	   setTimeout(()=>{
	   	   	 toLogin()
	   	   },100)
	   	   break;
	   	   case 404:
             toast({
             	content:"你访问的页面不存在"
             })
           default:
             console.log("其他错位。。")
	   }
}
let axiosIns=axios.create()
axiosIns.defaults.timout=1000
axiosIns.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"
axiosIns.interceptors.request.use((config)=>{
	     let token=window.localStorage.getItem("token")
	     token&&(config.headers.Autorizaton=token)
	     return config
},(error)=>{
	Promise.reject(error)
})
axiosIns.interceptors.response.use((res)=>{
     return res=res.status===200?Promise.resolve(res):Promise.reject(res)

},(err)=>{
	 let {response}=error
	 if(response){
	 	handleError(response.status,other)
	    Promise.reject(response)
	 }else{
	 	store.commit("netWork",null)
	 }
	 
})
export default axiosIns