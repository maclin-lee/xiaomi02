import Vue from "vue"
import Vuex from "vuex"
import shopcar from "./shopcar"
Vue.use(Vuex)
let state={
        address:"北京",
        field_data:[],
        swiper_data:[],
        phone_data:[],
        isPop:false,
        adrInfos:{
          provi:"",
          city:"",
          distr:"",
          lat:"",
          lng:"",
        }
}
let store =new Vuex.Store({
       state,
       getters:{
          cityVal(state){
            return state.adrInfos.distr
          }
       },
       mutations:{
          setIsPop(state,payLoad){
              console.log(state)
              state.isPop=payLoad
          },
          setCity(state,payLoad){
            state.adrInfos.distr=payLoad.distr
          }
       },
       actions:{
          _isPop({state,commit},payLoad){
              console.log(payLoad)
              commit("setIsPop",payLoad)
          },
          _setCity({commit},payLoad){
              commit("setCity",payLoad)            
          }
       },
       modules:{
            shopcar,
       }

}) 
export default store