<template>
	 <div class="search">
	 	<input type="text" class="search-input" @input="handleInput()" v-model="val" placeholder="请输入你要查询的内容" @blur="handleBlur()" @focus="handleFocus">
	 	<i class="iconfont icon-Search icon" @click="search()"></i>
    <slot></slot>
	 </div>
</template>
<script>
    import {throttle,trim} from "@/utils/tool"
    
	  export default{
         name:"search",
         props:{
            phone_data:{
            	type:Array,
            	default(){
            		return []
            	}
            },
         },
         data(){
         	return {
         		val:"",
            throttle:""
         	 }
         },
         methods:{
          changeInput(){
               this.getResult()
               this.$emit("changeInput",this.phone_result) 
               
            },
          handleFocus(){
              this.val=""
          },
          handleInput(){
               this.throttle()
               
            },
          handleBlur(){
            this.$emit("blur")
          },
          getResult(){
              this.phone_result=this.phone_data.filter((item,idx)=>{
                 if(this.val==""){return false}
                 return item.phone_name.includes(trim(this.val))
               })
          },
          search(){
              // if(this.val==="")return
              this.$emit("search",this.phone_result)
          },
         },

         mounted(){
              this.throttle=throttle(this.changeInput,1000)
         }


	  }
</script>
<style scoped>
.search{
	flex:1;
	display: flex;
	justify-content: center;
	align-content: center;
  position: relative;
}
.search-input{
	  min-width: 70%;
    border: none;
    height: 2rem;
    line-height: 2rem;
    border-radius: .625rem 0 0 .625rem;
    padding-left: .625rem;
}
.search-input:focus{
	border:none;
	outline: none;
}
.icon{
   height:2rem;
   line-height: 2rem;
   display: inline-block;
   font-size: 2rem;
   border-radius:0 0.625rem  0.625rem 0;
   background-color: rgba(212,212,212,.8);
}


</style>