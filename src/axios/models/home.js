import $ from "jquery"
async function getHomeData(opts){
	let url=`getDatas?swiper=${opts.swiper}&phone=${opts.phone}&field=${opts.field}`
	let result=await $.ajax({
		method:"GET",
		dataType:"JSONP",
		url:process.env.VUE_APP_baseUrl+url,
	    jsonp:"cb",
	    success(data){
            return data
	    }
	})
	return result
}
export {
      getHomeData,
}