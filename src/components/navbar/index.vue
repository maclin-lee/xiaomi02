<template>
	<ul class="navbar">
		<router-link tag="li" :to="{path:'/index'}"  class="navbar-item">
			<i class="iconfont icon-index"></i>
			<span>首页</span>
		</router-link>
		<router-link tag="li" :to="{path:'/category'}" class="navbar-item">
			<i class="iconfont icon-category"></i>
			<span>分类</span>
		</router-link>
		<router-link tag="li" class="navbar-item" :to="{path:'/shopcar'}">
			<i
			 class="iconfont icon-shopcar"></i>
			<span>购物车</span>
		</router-link>
		<router-link tag="li" class="navbar-item" :to="{path:'/mine'}">
			<i class="iconfont icon-mine"></i>
			<span>我的</span>
		</router-link>
	</ul>
</template>
<script>
	  export default{
         name:"navbar"
	  }
</script>
<style scoped>
   .navbar{
   	position: fixed;
   	bottom: 0;
   	left: 0;
   	height: 49px;
   	width:100%;
   	background: white;
   	border-top: 1px solid rgba(123,123,123,.3);
   	display:flex;
   	align-items: center;
   }
   .navbar-item{
      display: flex;
      flex:1;
      flex-direction:column;
      align-items:center;

   }
   .navbar-item i{
   	display:inline-block;
   	font-size: 25px;
   }
   li.router-link-active{
   	color:#f03d37;
   }
</style>	