<template>
	 <li class="search-pop-item">
	 	<span>{{phone_arr.phone_name}}</span>
	 </li>
</template>
<script>
	  export default{
         name:"search_pop_item",
         props:{
         	phone_arr:{
         		type:Object,
         		dafault(){
         			return []
         		}
         		
         	}
         },
	  }
</script>
<style scoped>
	.search-pop-item{
		height: 2rem;
		line-height: 2rem;
		padding-left:.625rem;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(12,12,12,.9);
	}
	.search-pop-item:nth-of-type(1){
          border-radius:.625rem .625rem 0 0;
          /*background-color: red;*/
	}
	.search-pop-item:last-child{
		border-bottom: none;
		border-radius: 0  0 .625rem .625rem
		/*border-color: red;*/
	}
	.search-pop-item:hover{
		background-color: red;
	}
</style>