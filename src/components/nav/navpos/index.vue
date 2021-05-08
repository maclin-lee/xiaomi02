<template>
	<div class="navpos">
		<span>{{adr?adr:"北京"}}</span>
	</div>
</template>
<script>
	  export default{
         name:"navpos",
         props:{
             adr:{
             	type:String,
             	default:"北京"
             }
         },
         data(){
         	return {
         		// content:
         	}
         }
	  }
</script>
<style scoped>
   .navpos{
   	width: 3.75rem;
   	text-align: center;
   	line-height: 2rem;
   	line-height: 2rem;
   	margin-right: .625rem;
   }
</style>