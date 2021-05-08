<template>
	<div class="header">
		<slot name="left"></slot>
		<slot name="center">
			<p class="title">小米购物app</p>
		</slot>
		<slot name="right"></slot>
	</div>
</template>
<script>
	  export default{
         name:"header"
	  }
</script>
<style scoped>
    .header{
    	position: fixed;
    	top:0;
    	left: 0;
    	background:blue;
    	width: 100%;
    	height: 44px;
    	display: flex;
    	align-items: center;
        z-index: 1000;
    
    }
    .header .title{
    	text-align: center;
    	flex: 1;
    	text-align: center;
    	letter-spacing: 2px;
        color: #000;
    }
</style>