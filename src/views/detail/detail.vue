<template>
	   <div class="detail">
	   	    <div class="img-zone">
	   	       <img :src="img_src" v-if="img_src" alt=""
	   	        @load="handleImg()">	
	   	    </div>
	   	    <div class="content">
	   	       <div class="content-top">
	   	         <h3 class="title">
	   	         	{{detailMat.phone_name}}
	   	       	 </h3>
	   	         <p>
	   	           <span>{{detailMat.slogan}}</span>
	   	         </p>
	   	         <p>
	   	         	<span class="price">
	   	         		{{detailMat.default_price}}
	   	         	</span>
	   	         </p>
	   	       </div>
	   	       <div class="content-body">
	   	       	   <h3>{{verText}}</h3>
	   	       	   <ul class="lists">  	  
	   	       	   	   <ver-item :item="item" 
	   	       	   	   v-for="(item,idx) in 
	   	       	   	   detailMat.version_info"
	   	       	   	   :class="verCurIdx==idx?'active':''"
	   	       	   	   @click.native="verChange(idx)">
	   	       	   	   </ver-item>
	   	       	   </ul>
	   	       	   <h3>{{colorText}}</h3>
	   	       	   <ul class="lists">
	   	       	   	  <cor-item :color="item"
	   	       	   	  v-for="(item,idx) in 
	   	       	   	  detailMat.color"
                      :class="curIdx==idx?'active':''"
	   	       	   	  @click.native="corChange(idx)"
	   	       	   	  >
	   	       	   	  </cor-item>
	   	       	   </ul>
	   	       </div>
	   	       <div class="content-foot">
	   	       	  <button @click="addcar_data()">{{shopText}}</button>
	   	       	  <button @click="addPur_data()">{{buyText}}</button>
	   	       </div>
	   	    </div>
	   </div>
</template>
<script>
	  import {mapActions,mapState} from "vuex"
	  import VerItem from "./listItems/itemver"
	  import CorItem from "./listItems/itemcolor"
	  export default{
         name:"detail",
         props:{
         	detailData:{
         		type:Object,
         		default(){return {}}
         	},
         },
         data(){
             return {
             	curIdx:0,
             	detai_data:{},
                detailMat:{},
                useInfo:{},
                verCurIdx:0,
                colorText:"",
                verText:"",
                shopText:"",
                buyText:"",
             }
         },
         components:{
           VerItem,
           CorItem,
         },
         computed:{
               img_src(){
               	  // console.log(this.detailMat.pics)
               	  return this.detailMat.pics&&this.detailMat.pics[this.curIdx][this.curIdx][this.curIdx]
               }
         },
         created(){
             this.colorText="颜色"
             this.verText="版本"
             this.shopText="加入购物车"
             this.buyText="立即购买"
         },
         methods:{
         	 handleImg(){
                  this.$emit("load")
         	 },
         	 verChange(idx){
                this.verCurIdx=idx
                // this.useInfo.version
         	 },
         	 corChange(idx){
                  this.curIdx=idx
         	 },
         	 setcar_data(pur_data,car_data){
         	 	  // console.log(pur_data)
                  if(pur_data.length>0){
                       let res=this.Iscar_pur(pur_data)
                       if(res.length>0){
                          console.log("已购买")
                       }else{
                           this.add_CarArr(car_data)
                       }

                  }else{
                      this.add_CarArr(car_data)
                  }

         	 },
         	 add_CarArr(car_data){
         	 	  // console.log(car_data.length)
                  if(car_data.length>0){
                     let res=this.Iscar_pur(car_data)
                     if(res.length>0){
                         console.log("已加入购物车")
                     }else{
                        car_data.push(this.useInfo)
                     }
                  }else{
                       car_data.push(this.useInfo)
                  }
                  // console.log(car_data)
                  window.localStorage.setItem("car_data",
                  	JSON.stringify(car_data))
         	 },
         	 Iscar_pur(data){
         	 	// console.log(data)
                return data.filter((item,idx)=>{
                	if(item.version==this.useInfo.version&&item.color==this.useInfo.color){
                		return true
                	}
                })
         	 },
         	 addcar_data(){
         	 	 let car=window.localStorage.getItem("car_data")
         	 	 // console.log(car)
                 let car_data=car==undefined?"[]":car
                 // console.log(car_data)
                 let carArr=JSON.parse(car_data)
                 let pur=window.localStorage.getItem("pur_data")
                 let pur_data=pur==undefined?"[]":pur
                 let purArr=JSON.parse(pur_data)
                 // console.log()
               this.setcar_data(purArr,carArr)
               this.$router.push({
               	   path:"/shopcar"
               }) 
         	 },
         	 addPur_data(){
         	 	let car=window.localStorage.getItem("car_data")
         	 	 // console.log(car)
                 let car_data=car==undefined?"[]":car
                 // console.log(car_data)
                 let carArr=JSON.parse(car_data)
                 let pur=window.localStorage.getItem("pur_data")
                 let pur_data=pur==undefined?"[]":pur
                 let purArr=JSON.parse(pur_data)
                 if(purArr.length>0){
                 	   let res=this.Iscar_pur(carArr)
                 	   if(res.length>0){
                     	 this.removecar_data(carArr)
                        }
                       let arr=this.Iscar_pur(purArr)
                       if(arr.length>0){
                       	  console.log("已购买")
                       }else{
                       	purArr.push(this.useInfo)
                       	window.localStorage.setItem("pur_data",JSON.stringify(purArr))
                       }
                       // console.log(purArr)
                 }else{
                     let arrs=this.Iscar_pur(carArr)
                     if(arrs.length>0){
                     	this.removecar_data(carArr)
                     }
                     purArr.push(this.useInfo)
                     window.localStorage.setItem("pur_data",JSON.stringify(purArr))
                 }
                 this.$router.push({
                 	path:"/purchase"
                 })
         	 },
         	 removecar_data(car_data){
         	 	// console.log(this.useInfo)
                let res=car_data.filter((item,idx)=>{
                	if(item.version==this.useInfo.version&&item.color==this.useInfo.color){
                		return false
                	}
                	return true
                  	
                  })
                // console.log(res)
                window.localStorage.setItem("car_data",JSON.stringify(res))
         	 },
         	 getFormatDet(detda){
         	 	this.detai_data=this.detailData
         	 	 // console.log(detda)
                for( var key in detda){
                     let val=detda[key]
                     if(key=="pics"||key=="color"||key=="version_info"){
                     	val=JSON.parse(val)
                     	this.$set(this.detailMat,key,val)
                     }else{
                        this.$set(this.detailMat,key,val)
                     }
                 
                }
                // console.log(this.detailMat)
         	 },
         	 initUseInfo(matData){
         	  // console.log(matData.pics)
              this.useInfo.isShow=true
              this.useInfo.count=1 
         	  this.useInfo.id=matData.id
              this.useInfo.phone_name=matData.phone_name
              this.useInfo.slogan=matData.slogan
              this.useInfo.default_price=matData.default_price
              this.useInfo.img_src=matData.pics[this.curIdx][this.curIdx][this.curIdx]
              this.useInfo.color=matData.color[this.curIdx]
              // console.log(matData.version_info)
              this.useInfo.version=matData.version_info[this.verCurIdx].version
              this.useInfo.price=matData.version_info[this.verCurIdx].price
              // console.log(this.useInfo)
         	 }
         },
         updated(){
                this.initUseInfo(this.detailMat)
         },
         mounted(){
           

         },
         watch:{
              detailData(){
              	  this.getFormatDet(this.detailData)
              }
         }
	  }
</script>
<style scoped>
    .detail{
    	display:flex;
    	justify-content:space-around;
        width:100%;
        flex-wrap:nowrap;
        margin-top: .625rem;
    }
    .img-zone{
        flex:4;
    }
    .img-zone img{
    	width:100%;
    	height:10rem;
    }
    .content{
    	flex:8;
    	
    }
    .content-top{
    	margin-bottom:.625rem;
    }
    .title{
    	text-indent:2rem;
    	font-size:1.8rem;
    	line-height:2rem;
    	height:2rem;
    }
    .content-top p{
    	text-indent: 1rem;
    	margin-bottom:.3125rem;
    	font-size:1.3rem;
    }
    .price{
    	color:red;
    }
    .content-body{
    	margin-bottom:.625rem
    }
    .content-body h3{
    	margin-bottom:.625rem;
    	font-size:1.8rem;
    	line-height:2rem;
    	height:2rem;
    }
    .lists{
    	display:flex;
    	justify-content:space-around;
    	align-items:center;
    	flex-wrap:wrap;
    	margin-bottom:.625rem;
    }
    .active{
    	border-color:red;
    	color:red;
    }
    .content-foot{
    	 display:flex;
    	 justify-content:space-around;
    	 align-items:center;
    }
    .content-foot button{
    	flex:1;
    	margin-left:.3125rem;
    	height:2rem;
    	line-height:2rem;
    	text-align:center;
    	border:none;
    	border-radius:.625rem;
    }
    .content-foot button:nth-of-type(1){
         background-color:red;
    }
    .content-foot button:last-child{
    	background-color:#000;
    	color:white;
    }

</style>