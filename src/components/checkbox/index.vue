<template>
	<div class="checkbox" :class="isShow?'active':''">
		 <img :src="require('../../assets/iconts/check.svg')" alt=""
		 v-if="isShow">
	</div>
</template>
<script>
	  export default{
         name:"checkbox",
         props:{
         	isShow:{
                 type:Boolean,
                 default:false,
         	}
         }
	  }
</script>
<style scoped>
        .checkbox{
        	width:1.25rem;
        	height:1.25rem;
        	border-radius:.625rem;
            line-height:1.25rem;
            text-align:center;
            line-height:1.25rem;
            background-color:white;
            border:1px solid rgba(12,12,12,.8);
            margin-left:.625rem;
            
        }
        .checkbox img{
              border:none;
              width:100%;
              height:100%;
              
        }
        .active{
        	background-color:green;
            border:none;
        }
</style>