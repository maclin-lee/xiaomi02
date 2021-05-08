<template>
	 <div class="nav">
	 	<slot name="left"></slot>
	 	<slot name="center"></slot>
	 	<slot name="right"></slot>
	 </div>
</template>
<script>
	  export default{
         name:"nav",
         components:{

         }
	  }
</script>
<style scoped>
  .nav{
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	width: 100%;
  	box-sizing: border-box;
  	padding: 0.3105rem;
  	margin-top: 44px;
  	background-color: red;
  }

</style>