import toast from "./toast.vue"
import Vue from "vue"
let Toast=(function Toast(){
	let instance=null
	let defaults={
		title:"弹窗",
		content:"内容",
		ok:"确定",
		no:"取消"
       }
   let ToastCon=Vue.extend(toast)
   return function(opts){
        if(instance){
		  return instance
	   }
	   for(var i in opts){
   	     defaults[i]=opts[i]
        }
	   instance=new ToastCon({
		el:document.createElement("div"),
		data(){
            return {
            	title:defaults.title,
            	content:defaults.content,
            	ok:defaults.ok,
            	no:defaults.no,


            }
		},
		methods:{
			handleOk(){			
				opts.handleOk&&opts.handleOk.apply(this,null)
				document.body.removeChild(instance.$el)

			},
			handleNo(){
				opts.handleNo&&opts.handleNo.apply(this,null)
				document.body.removeChild(instance.$el)
			}
		}
	})
	 document.body.appendChild(instance.$el)
	 return instance
	}
 })()
 export default Toast