<template>
	<ul class="search_pop"> 
		<slot></slot>
	</ul>
</template>
<script>
	  export default{
         name:"search_pop"
	  }
</script>
<style scoped>
   .search_pop{
       position: absolute;
       left: 3rem;
       top:2rem;
       min-width: 80%;
       border: 1px solid rgba(11,11,11,.9);
       border-radius: .625rem;
   }
</style>