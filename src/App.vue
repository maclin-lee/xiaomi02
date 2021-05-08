<template>
  <div id="app">
  	    <div class="con" v-if="isLoad">
  	    	 <keep-alive>
  	    	 	<router-view></router-view>
  	    	 </keep-alive>	 
  	    </div>
  	    <Loading v-else ></Loading>
        
  </div>
</template>

<script>
import "assets/css/base.css"
import "assets/css/iconfont.css"
import Loading from  "components/Loading"
export default {
  name: 'app',
  components: {
  	 Loading, 
  },
  data(){
  	 return {
  	 	isLoad:false,
  	 }
  },
  mounted(){
  	setTimeout(()=>{
          this.isLoad=true
  	},1000)
  }
}
</script>

<style>
</style>
