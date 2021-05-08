<template>
	<div class="main">
      <headers>
         <h3 slot="center" class="title">小米购物app</h3>
       </headers>
		 <nav-bar></nav-bar>
	</div>
</template>
<script>
	  import NavBar from "components/navbar"
     import Headers from "components/header"
	  export default{
         name:"category",
         components:{
         	NavBar,
            Headers,
         },
         mounted(){
         	// console.log("skk")
         	// console.log(this.$route)
         }


	  }
</script>
<style scoped>
</style>	