<template>
	<div class="backtop">
		<img  class="top_img" :src="require('../../assets/iconts/arrow-top.svg')" alt="">
	</div>
</template>
<script>
	  export default{
         name:"backtop"
	  }
</script>
<style scoped>
  .backtop{
  	width:2.2rem;
  	height:2.2rem;
  	border-radius:1.1rem;
  	background-color:rgba(0,0,0,.8);
  	bottom:55px;
    text-align:center;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    right: 20px;
    z-index: 10000;
  }
  
</style>