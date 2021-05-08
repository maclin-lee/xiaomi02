<template>
	  <div class="list-item">
	  	    <div class="img-zone">
	  	  		<img :src="phone_item.pics|format_pics" alt="">
	  	  	</div>
	  	  	<div class="content">
	  	  	     <h3>{{phone_item.phone_name}}</h3>
	  	  	     <p><span>{{phone_item.slogan}}</span></p>
	  	  	     <p>
	  	  	     <span class="price">
	  	  	     {{phone_item.default_price}}
	  	  	     </span>
	  	  	     </p>
	  	  	</div>
	   </div>
</template>
<script>
	  export default{
         name:"listitem",
         props:{
         	phone_item:{
         		type:Object,
         		default(){
         			return {}
         		}
         	}
         },
         filters:{
         	format_pics(pics){
               return JSON.parse(pics)[0][0][0]
         	}
         }
	  }
</script>
<style scoped>
    .list-item{
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    	box-sizing: border-box;
        margin-bottom: .625rem;
    }
    .list-item .img-zone{
           width:10rem;
    }
    .list-item .img-zone img{
           max-width: 100%;
    }
    .content{
    	 flex:1;
    }
    .content h3{
        text-indent: 1.3rem;
    }
    .conten p{
         height: 2rem;
         line-height: 2rem;	
         text-align: center;
    }
    .content p .price{
    	
    	color:blue;
    }
</style>	