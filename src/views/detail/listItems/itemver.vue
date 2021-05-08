<template>
	   <li class="veritem">
	   	  <span class="version">{{item.version}}</span>
	   	  <span class="price">{{item.price}}</span>
	   </li>
</template>
<script>
	  export default{
         name:"verItem",
         props:{
         	item:{
         		type:Object,
         		default(){return {}}
         	}
         },
         data(){
         	return{
         		currentIndex:0
         	}
         }
	  }
</script>
<style scoped>
.veritem{
	border:1px solid rgba(12,12,12,.8);
	flex:1;
	margin-bottom:.625rem;
	padding:.3125rem .625rem;
	display:flex;
	align-items:center;
}
.veritem span{
   margin-left:1rem;
   display:inline-block;
}

.price{
	color:red;
}
</style>