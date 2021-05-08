<template>
	  <div class="list">
	  	  <div class="title">
		   	   <span class="text">{{texts}}</span>
		   	   <span class="more">{{more}}</span>
	      </div>
	  	  <slot name="list-item"></slot>
	  </div>
</template>
<script>
	  export default{
         name:"list",
         props:{
         	item:{
         		type:Object,
         		default(){return {}}
         	},
         },
         data(){
            return{
            	more:"更多>>>",
            	text:"标题",
            }
         },
         computed:{
             texts(){
             	// console.log(this.item)
             	if(this.item.most_value==="1"){
             		this.text="最具价值"
             		return this.text
             	}else if(this.item.new==="1"){
             		this.text="最新上架"
             		return this.text
             	}else if(this.item.recom=="1"){
                     this.text="推荐"
                     return this.text
             	}else{
             		return this.text
             	}
             } 
         }
	  }
</script>
<style scoped>
    .list{
    	margin-bottom:.625rem;
    	border-bottom: 1px solid rgba(12,12,12,.3);
    	box-sizing: border-box;
    	width: 100%; 
    }
    .list:nth-of-type(1){
    	margin-top: .625rem;
    	border-top: 1px solid rgba(12,12,12,.3);
    }
    .list:last-child{
       border-bottom:none;
    }
  .list .title{
   	display:flex;
   	align-items: center;
    box-sizing: border-box;
    padding:0 .625rem;
    font-size: 1.5rem;
    border-bottom: 1px solid rgba(12,12,12,.3);
    background-color: rgba(132,132,132,.8);
    margin-bottom: .625rem;
   }
  .list .title span{
      display:inline-block; 
   }
  .list .title .text{
   	   margin-right: auto;
   }

</style>