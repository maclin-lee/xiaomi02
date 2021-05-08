<template>
	<div class="swiper-container swiper"
	 @mouseenter="handleEnter()" 
     @mouseleave="handleLeave()"
	 ref="swiper">
		<div class="swiper-wrapper wrapper">
			 <slot></slot>
		</div>
		 <div class="swiper-pagination"></div> 
		<!-- <slot name="swiper-pagination"></slot> -->
		
	    <div class="swiper-button-prev">
	    </div>
	    <div class="swiper-button-next" ref="next"></div>
	</div>
</template>
<script>
	  import Swiper from "swiper"
	  import "swiper/dist/css/swiper.min.css"
	  export default{
         name:"swiper",
         data(){
         	return{
         		swiper:{}
         	}
         },
         mounted(){
         	  setTimeout(()=>{
         	  	let _this=this
                this.swiper=new Swiper(this.$refs.swiper,{
                spaceBetween:30,
                loop:true,
                autoplay:{
                	delay:1000,
                	disableOnInteraction:false,
                	stopOnLastSlide:false,
                },
                effect:"fade",
             	direction:"horizontal",
             	speed:100,
             	observer:true,
             	preventClicksPropagation:false,
             	pagination:{
             		el:".swiper-pagination",
             	    clickable:true,
             	},
             	navigation:{
             		nextEl:".swiper-button-next",
             		prevEl:".swiper-button-prev" 
             	},
                // on:{
                // 	tab:function(swiper,ev){
                //        console.log(swiper)
                // 	}
                // }

                 })
               this.swiper.on("slideChangeTransitionEnd",()=>{
                	if(this.swiper.isEnd){
                		this.swiper.navigation.$nextEl.css("display","none")
                	}else{
                        this.swiper.navigation.$nextEl.css("display","block")
                	}
                	
                })
              this.swiper.on("click",function(swiper,ev){
               let id=this.clickedSlide.attributes["data-id"].value
                   _this.$router.push({
                   	   path:"/detail/"+id
                     })
                })
               

         	  },20)
                
         
             
         },
         methods:{
         	handleEnter(){
         		this.swiper.autoplay.stop()
         	},
         	handleLeave(){
         		this.swiper.autoplay.start()
         	}
         }
	  }
</script>
<style scoped>
    .swiper-button-disabled{
         display:none;
  }
</style>