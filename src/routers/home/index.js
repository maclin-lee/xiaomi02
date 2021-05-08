export default{
	path:"/index",
	name:"index",
	component:()=>{return import("views/home")},
    children:[
           {
           	name:"list",
           	path:"list",
           	component:()=>import("views/home/children/list.vue")
           }
    ]
}