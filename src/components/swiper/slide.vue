<template>
	   <div class="swiper-slide slide" :data-id="phone_Ob.id" >
		 <img :src="phone_Ob.pic" :alt="phone_Ob.alt">
	   </div>	
</template>
<script>
	  export default{
         name:"slide",
         props:{
         	phone_Ob:{
         		type:Object,
         		default(){
         			return{}
         		}
         	},
         },
         mounted(){
            console.log(this.phone_Ob)
         },
         method:{

         }


	  }
</script>
<style scoped>
.slide img{
	height: 20rem;
	width:100%;
	vertical-align:middle;

}
</style>