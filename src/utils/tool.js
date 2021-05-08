function trim(str){
    return str.replace(/\s+/g,"")
}
function  throttle(fn,delay){
       let time=null
       let preTime=new Date().getTime()
       return function(){
          let _this=this
          let arr=arguments
          let curTime=new Date().getTime()
          if(time){
          	clearTimeout(time)
          }
          if(curTime-preTime>delay){
             fn.apply(_this,arguments)
             preTime=curTime
          }else{
              time=setTimeout(()=>{
                  fn.apply(_this,arguments)
              },delay)
          }
       }
}
export {
	throttle,
	trim,
}