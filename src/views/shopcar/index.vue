<template>
	<div class="main">
       <headers>
         <h3 slot="center" class="title">小米购物app</h3>
       </headers>
       <Scroll class="scroll" ref="scroll">
          <div class="lists" v-if="car_data&&car_data.length>0">
             <list-item v-for="(item,idx) in car_data">
               <check-box slot="left" 
               :isShow="item.isShow"
               @click.native.stop="handlCheck(item)">
               </check-box>
               <list-img slot="center" 
               :img_src="item.img_src"
               @click.native="handleList(item)">
               </list-img>
               <div class="list-con" slot="right">
                    <div class="list-con-title"
                    @click="handleList(item)">
                        <p>{{item.slogan}}</p>
                    </div>
                    <div class="list-con-body">
                         <div class="price">
                             <span>{{item.price}}</span>
                         </div>
                         <div class="con-body-right">
                              <span class="red" 
                              @click.stop="reduce(item)">
                              </span>
                              <input type="text"  
                              v-model="item.count">
                              <span 
                              class="inc"
                              @click.stop="incre(item)">
                              </span>
                         </div>
                    </div>          
               </div>
            </list-item>
          </div>
          <div class="tip" v-else>
               <p>购物车中没有相关数据</p>
          </div>
          <div class="checkout">
               <check-box class="allcheckbox" 
               :isShow="isAll"
                @click.native.stop="checkAllBtn()">
                </check-box>
               <div class="purbtn">
                 <span>{{totalPrice}}</span>
                 <button>{{totalText}}</button>
               </div>
            </div>
       </Scroll>
	  <nav-bar></nav-bar>
	</div>
</template>
<script>
	   import NavBar from "components/navbar"
     import Scroll from "components/bScroll"
     import ListItem from "./shopcarItem"
     import CheckBox from "components/checkbox"
     import ListImg from "components/listimg"
     import Headers from "components/header"
	   export default{
         name:"shopcar",
         components:{
         	  NavBar,
            Scroll,
            ListItem,
            CheckBox,
            ListImg,
            Headers,
         },
         data(){
             return {
               car_data:[],
               checkArr:[],
               totalPrice:0,
               totalText:"结算",
               isAll:""
             }
         },
         computed:{
        
          
         },
         activated(){
          let car_data=window.localStorage.getItem("car_data")

          this.car_data=car_data?JSON.parse(car_data):"[]"
               // console.log(car_data)
          this.$nextTick(()=>{
                // console.log("active..refresh")
                this.$refs.scroll.refresh()
              })
         },
         mounted(){  
               // console.log("mounted")  	
         },
         watch:{
               car_data(){
                    // console.log("dkksk")
                     this.getcheckedArr()
                     this.getAll()
                     this.getTotalPrice()
               },
         },
         methods:{
           getAll(){
                if(this.car_data.length>0&&this.checkArr.length==this.car_data.length){
                  this.isAll=true 
                }else{
                  this.isAll=false;
                }
            },

            handleList(item){
                this.$router.push({
                  path:"/detail/"+item.id,
                })
               // console.log(item)
            },
            getcheckedArr(){
              // console.log(this.car_data)
               this.checkArr=this.car_data.filter((item,idx)=>{
                   if(item.isShow){
                      return true
                   }else{
                    return false
                   }
               })
               // console.log(this.checkArr)
            },
            handlCheck(item){
                this.$set(item,"isShow",!item.isShow)
                this.getcheckedArr()
                this.getAll()
                this.getTotalPrice()
                window.localStorage.setItem('car_data',
                  JSON.stringify(this.car_data))
            },
            getTotalPrice(){
              this.totalPrice=0
               // console.log(this.totalPrice)
               this.checkArr.forEach((items,idx)=>{
                  this.totalPrice+=items.count*items.price
                })

            },
            incre(item){
                item.count++
                this.$set(item,"count",item.count)
                this.getcheckedArr()
                this.getAll()
                this.getTotalPrice()
                window.localStorage.setItem('car_data',
                  JSON.stringify(this.car_data))
            },
            reduce(item){
                item.count--
                item.count=item.count<0?0:item.count
                this.$set(item,"count",item.count)
                this.getcheckedArr()
                this.getAll()
                this.getTotalPrice()
                window.localStorage.setItem('car_data',
                  JSON.stringify(this.car_data))
            },
            checkAllBtn(){
                   this.isAll=!this.isAll;
                   // console.log(this.isAll)
                   this.car_data.forEach((item,idx)=>{
                       this.$set(item,"isShow",this.isAll)
                   })
                   if(!this.isAll){
                    this.checkArr=[]
                   }else{
                     this.getcheckedArr()
                   }
                   this.getTotalPrice()

                   // console.log(this.checkArr)

            }
         }
	  }
</script>
<style scoped>
  .main{
    height:100vh;
  }
  .scroll{
    height:calc(100% - 93px);
    margin-top:44px;
  }
  .list-con{
    flex:1;
  }
  .list-con-title{
      height:3rem;
      overflow:hidden;
  }
  .list-con-title p{
    line-height:1.5rem;
  }
  .list-con-body{
    margin-top:.625rem;
    display:flex;
    justify-content:center;
    align-items:center;

  }
  .price{
    margin-right:auto;
    color:red;
  }
.con-body-right{
   display:flex;
   align-items:center;
   height:2rem;
   border:1px solid #515151;
}
.con-body-right span{
    width:2rem;
    height:2rem;
    background-size:2rem;
    background-position:center;
}
.con-body-right input{
    height:2rem;
    width:3rem;
    text-align:center;
    border:none;
}
.con-body-right input:focus{
   outline:none;
}
.inc{
  background-image:url("~assets/iconts/inc.svg")

}
.red{
  background-image:url("~assets/iconts/red.svg")
}
.checkout{
  position:fixed;
  bottom:50px;
  left:0;
  height:2.5rem;
  width:100%;
  background-color:red;
  z-index:1000;
  padding:.625rem 0;
  
}
.allcheckbox{
  position:absolute;
  left:0;
  top:.625rem;
  bottom:.625rem;

}
.purbtn{
   position:absolute;
   top:.625rem;
  bottom:.625rem;
   right:0;
   top:0;
}

</style>	