<template>
	<div class="details">
	     <Header></Header>
	     <Scroll class="scroll"ref="bscroll" >
	     	<Detail :detailData="detail_data"
	     	@load="handleLoading">	
	     	</Detail>
	     </Scroll>
	</div>
</template>
<script>
	  import {getDetailData} from "@/axios/models/detail.js"
 	  import Header from "components/header"
 	  import Detail from "./detail"
	  import Scroll from "components/bScroll"
	  export default{
         name:"detail",
         components:{
         	  Header,
              Scroll,
              Detail,
         },
         data(){
             return {
             	detail_data:{

             	}
             }
         },
         created(){
               let id=this.$router.currentRoute.params.id
               this.getdetail_data(id)
         },
         mounted(){
              // this.bscroll.refresh()
         },
         methods:{
             async getdetail_data(id){
               let res=await getDetailData(id)
               console.log(res)
               this.detail_data=res
             },
             handleLoading(){
                 this.$refs.bscroll.refresh()
             }
         }

	  }
</script>
<style scoped>
   .details{
   	height:100vh;
    width:100%;
    position: relative;
   }
   .scroll{
   	 height:calc(100% - 93px);
   	 margin-top:44px;
   	 overflow: hidden;
   }
</style>