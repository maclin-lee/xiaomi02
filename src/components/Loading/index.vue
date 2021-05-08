<template>
	 <div class="loading">
	 	<div class="loading-imgs">
	 		 <img :src="require('../../assets/imgs/loading.gif')"
	 		  alt="">
	 	</div>
	 	
	 </div>
</template>
<script>
	  export default{
         name:"Loading",
         data(){
         	return {
         	    text:"正在加载中",
         	   
         	}
         },
         methods:{
 
         }
	  }
</script>
<style scoped>
 .loading{
 	width: 100%;
 	height: 100%;
 	background: white;
 	
 }
.loading-imgs{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40%;
}
.loading-imgs img{
	max-width: 50%;
	vertical-align: middle;
}
 
</style>