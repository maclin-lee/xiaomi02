<template>
	 <li class="coloritem">
	 	<span class="itemco">{{color}}</span>
	 </li>
</template>
<script>
	  export default{
         name:"",
         props:{
         	 color:{
         	 	type:String,
         	 	default:"hongse"
         	 }
         }
	  }
</script>
<style scoped>
   .coloritem{
   	   border:1px solid rgba(12,12,12,.8);
   	   padding:.3125rem 2px;
   	   text-align:center;
   }
</style>