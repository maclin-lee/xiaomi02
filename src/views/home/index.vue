<template>
	<div class="main">
		 <headers>
		 	<h3 slot="center" class="title">小米购物app</h3>
		 </headers>
       <Nav class="navfix" v-show="isNav">
          <nav-pos :adr="cityVal" slot="left"></nav-pos>
          <Search slot="center" 
          :phone_data="phone_data"
          @changeInput="getInputRes"
          @blur="handleBlur"
          @search="handleSearch">
             <search-pop v-if="phone_arr.length>0&&isPop">
                 <SearchItem 
                 v-for="(item,index) in phone_arr"
                 :phone_arr="item"
                 @click.native="goBack(item)"
                 >  
                 </SearchItem>
            </search-pop>
          </Search>
          <nav-btn slot="right"></nav-btn>
       </Nav>
       <BScroll
       ref="BScroll" 
       @scrollEnd="loadingMore"
       @scroll="handleScroll"
       :data="phone_data"
       >
         <Nav>
          <nav-pos :adr="cityVal" slot="left"></nav-pos>
          <Search slot="center" 
          :phone_data="phone_data"
          @changeInput="getInputRes"
          @blur="handleBlur"
          @search="handleSearch">
             <search-pop v-if="phone_arr.length>0&&isPop">
                 <SearchItem 
                 v-for="(item,index) in phone_arr"
                 :phone_arr="item"
                 @click.native="goBack(item)"
                 >  
                 </SearchItem>
            </search-pop>
          </Search>
          <nav-btn slot="right"></nav-btn>
        </Nav>
         <Swiper v-if="swiper_data.length>0">
             <Slide v-for="(item,idx) in swiper_data"
              :phone_Ob="item">
              </Slide>
         </Swiper>
         <div>
             <List v-if="list_arr.length>0" v-for="(val,idx) in list_arr" :item="val[0]">
             <list-item slot="list-item"
              v-for="(item,index) in val"
              :phone_item="item" @click.native="goBack(item)">  
             </list-item>
            </List>
         </div>
         
       </BScroll>
     <back-top @click.native="backTop()" v-show="isBack"></back-top>
     <router-view></router-view>
		 <nav-bar></nav-bar>
	</div>
</template>
<script>
	   import NavBar from "components/navbar"
	   import Headers from "components/header"
     import Nav from "components/nav"
     import NavPos from "components/nav/navpos"
     import Search from "components/nav/search"
     import NavBtn from "components/nav/navbtn"
     import SearchPop from "components/search_pop"
    import SearchItem from "components/search_pop/search_pop_item"
    import BScroll from "components/bScroll"
    import Swiper from "components/swiper"
    import PageNation from "components/swiper/pagenation.vue"
    import Slide from "components/swiper/slide"
    import SwiperBtn from "components/swiper/swiperbtn"
    import Title from "./title"
    import List from "./list"
    import ListItem from "./listitem"
    import BackTop from "components/backtop"
     import {getHomeData} from "@/axios/models/home.js"
     import axios from "axios" 
     import{mapState,mapMutation,mapGetters,mapActions} from "vuex"
	  // import Jsonp from "@/axios/jsonp.js"
	  export default{
         name:"index",
         components:{
         	NavBar,
         	Headers, 
          NavPos,
          Nav,
          Search,
          NavBtn,
          SearchPop,
          SearchItem,
          BScroll,
          Swiper,
          PageNation,
          Slide,
          SwiperBtn,
          Title,
          List,
          ListItem,
          BackTop,
         },
         beforeCreate(){
           // console.log("skk")
         },
         created(){
           this.getHomeDataRes()
           
         },
         data(){
             return {
               field_data:[],
               phone_data:[],
               swiper_data:[],
               address:"北京",
               phone_arr:[],
               list_arr:[],
               isNav:false,
               isBack:false,
               inHeight:null,
               toast:{},
               adrInfo:{
                   distr:"",
                   city:"",
                   provi:"",
                   lat:"",
                   lng:""
               }
             }
         },
         mounted(){ 
               this.inHeight=window.innerHeight
               this.getAdr()
         },
         deactivated(){
             this.toast.IsToast=false
         },
         computed:{
            ...mapState(["isPop"]),
            ...mapGetters(["cityVal"])
         },
         methods:{
            ...mapActions(["_isPop","_setCity"]),
            getHomeDataRes(){
             getHomeData({swiper:true,phone:true,field:true}).then(res=>{
                 this.phone_data=res.phone_data
                 this.field_data=res.field_data
                 this.swiper_data=res.swiper_data
                 this.getListArrs(this.phone_data)
                  setTimeout(()=>{
                    this.toast=this.$toast({
                       title:"地理位置",
                       content:"是否允许应用获取你的地理位置信息",
                       ok:"是",
                       no:"否",
                       handleOk:()=>{
                          this._setCity(this.adrInfo)
                       },
                       handleNo:()=>{
                          console.log("quxiao..")
                       }
                    })

                  },20)
             })   
               },
            getInputRes(data){
               this.phone_arr=data
               this._isPop(true)
            },
            handleBlur(){
                this._isPop(false)
            },
            getListArrs(phone_data){
              let newArr=[],
                  mostArr=[],
                  reArr=[];
                  phone_data.forEach((item,idx)=>{
                       if(item.most_value==="1"){
                        mostArr.push(item)
                       }
                       if(item.new==="1"){
                        newArr.push(item)
                       }
                       if(item.recom==="1"){
                        reArr.push(item)
                       }
                  })
                  this.list_arr.push(newArr,mostArr,reArr)
                  console.log(this.list_arr)
            },
            handleSearch(phone_data){
               this.$router.push({
                path:"/index/list",
                query:{
                  phone_data,
                }
               })
            },
            goBack(item){
                this.$router.push({
                  path:"/detail/"+item.id,    
                })
            },
            handleScroll(pos){
               if(-pos.y>=44){
                this.isNav=true
               }else{
                this.isNav=false
               }
              this.getBackTop(-pos.y)
            },
            getBackTop(y){
                this.isBack=y>this.inHeight-93?true:false
            },
            backTop(){
                this.$refs.BScroll.scrollTo(0,0,30)
            },
            loadingMore(){
                console.log("jiazaigengduo..")
                this.$refs.BScroll.finishPullUp()
                this.$refs.BScroll.refresh()
             },
            getAdr(){
                let geolocation=new qq.maps.Geolocation(  
"RORBZ-P5GCX-DFM4O-7TEND-DNZWO-HUFCN","xiaomi")
                           geolocation.getLocation((pos)=>{
                              console.log(pos)
                               this.adrInfo.provi=pos.province
                               this.adrInfo.city=pos.city
                               this.adrInfo.distr=pos.district
                               this.adrInfo.lat=pos.lat
                               this.adrInfo.lng=pos.lng
                               console.log(this.adrInfo)
                           },(err)=>{
                             console.log(err)
                            },
                           ) 
            },

         },




	  }
</script>
<style scoped>
.main{
  height:100vh;
}
.navfix{
  position: fixed;
  z-index: 10000;
  margin-top:0;
}
</style>	