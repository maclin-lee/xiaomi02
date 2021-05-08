<template>
	<div class="navbtn">
		<i class="icon"></i>
	</div>
</template>
<script>
	  export default{
         name:"navbtn"
	  }
</script>
<style scoped>
.navbtn{
	text-align: center;
	margin-left: 0.625rem;
	margin-right: .625rem;
}
.icon{
	display: inline-block;
	width: 2.5rem;
	height: 2rem;
	background-size: 2rem;
	background-position: center;
	background-image: url("~assets/iconts/list.svg");
	background-repeat: no-repeat;
}

</style>