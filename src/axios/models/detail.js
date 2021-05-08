async function getDetailData(id){
	 // console.log($())
	  const api=`getPhoneInfo?id=${id}`
      return  $.ajax({
      	   url:process.env.VUE_APP_baseUrl+api,
      	   method:"Get",
      	   dataType:"JSONP",
      	   jsonp:"cb",
      	   sucess:function(res){
                return res
      	   }

      })
}

export {
	getDetailData,
}