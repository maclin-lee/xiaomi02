<template>
	 <li class="shopcarItem">
	 	<slot name="left"></slot>
	 	<slot name="center"></slot>
	 	<slot name="right"></slot>
	 </li>
</template>
<script>
	  export default{
         name:"shopcarItem"
	  }
</script>
<style scoped>
   .shopcarItem{
   	display:flex;
   	justify-content:space-around;
   	align-items:center;
   }
</style>