import Vue from "vue"
import Router from "vue-router"
import home from "./home"
import category from "./category"
import shopcar from "./shopcar"
import mine from "./mine"
import purchase from "./purchase"
import detail from  "./detail"
Vue.use(Router)
var routes=[
      {
        path:"",
        redirect:"/index"
      },
      home,
      category,
      purchase,
      shopcar,
      mine,
      detail,

]
console.log(routes)
var  VueRouter=new Router({
	mode:"history",
  base: process.env.BASE_URL,
	routes,
})
export default  VueRouter