<template>
	 <div class="toast" v-if="IsToast">
	 	<h3 class="title">{{title}}</h3>
	 	<div class="content">
	 		{{content}}
	 	</div>
	 	<div class="btns">
	 		<button class="comfir btn" @click="handleOk()">{{ok}}</button>
	 		<button class="cancel btn" @click="handleNo()">{{no}}</button>
	 	</div>
	 </div>
</template>
<script>
	  export default{
         name:"toast",
         data(){
         	return {
         		title:"",
         		content:"",
         		ok:"",
         		no:"",
            IsToast:true,
         	}
         },
        methods:{
              handleOk(){

              },
              handleNo(){

              }
        }
	  }
</script>
<style scoped>
   .toast{
   	 width: 200px;
   	 min-height:100px;
   	 position: absolute;
   	 top:50%;
   	 margin-top: -100px;
   	 left: 50%;
   	 margin-left: -100px;
   	 border: 1px solid rgb(123,123,123,.3);
   	 border-radius: 10px;
   	 background: white;
     z-index: 100000;
   }
   .title{
      border-bottom: 1px solid rgba(123,123,123,.3);
      text-align: center;
   }
   .content{
   	box-sizing: border-box;
   	padding: 10px 0;
   	border-bottom: 1px solid rgba(123,123,123,.3);
    text-indent:10px;

   	
   }
   .btns{
   	display: flex;
   	justify-content:space-between;
   	align-items: center;
    padding: 10px 0

   }
   .btn{
   	flex:1;
   	height: 30px;
   	line-height: 30px;
   	text-align: center;
   	border-radius: 5px;
   	border:1px solid rgba(123,123,123,.3);
   	margin: 0 10px;

   }
   .confirm{
   	  background:rgba(123,123,123,.3);
   }
   .cancel{
   	background:rgba(221,221,221,8);
   }

</style>