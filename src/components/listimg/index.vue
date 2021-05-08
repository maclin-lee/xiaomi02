<template>
	<div class="listimg">
		<img :src="img_src" alt="">
	</div>
</template>
<script>
	  export default{
         name:"listimg",
         props:{
         	img_src:{
         		type:String,
         		default:""
         	},
         }
	  }
</script>
<style scoped>
.listimg{
	height:100%;
}
.listimg img{
	max-height:100%;
	border:none;
	width:5rem;
}
</style>