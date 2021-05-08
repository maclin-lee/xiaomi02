let {resolve}=require("path")
let merge=require("webpack-merge")
module.exports={
       publicPath:process.env.NODE_ENV==="production"?"/":"/",
       outputDir:"dist",
       assetsDir:"statics",
       productionSourceMap:false,
       lintOnSave:process.env.NODE_ENV!=="production",
       runtimeCompiler:true,
       chainWebpack:(config)=>{
             config.resolve.alias
             .set("@",resolve(__dirname,"src"))
             .set("components",resolve(__dirname,"src/components"))
             .set("views",resolve(__dirname,"src/views"))
             .set("utils",resolve(__dirname,"src/utils"))
             .set("assets",resolve(__dirname,"src/assets"))

       },
       configureWebpack:(config)=>{
             // console.log(config)
             // config.mode="development"
             // merge(config,{
             //    resolve:{
             //      extensions:[".js",".vue","jsx","json",".css"],
             //      alias:{
             //        "@":resolve(__dirname,"src"),
             //        "components":resolve(__dirname,"src/components"),
             //        "views":resolve(__dirname,"src/views"),
             //        "utils":resolve(__dirname,"src/utils")
             //       }
             //     }
             //   })
             // plugins:[]
             // })
        },
       css:{
       	  extract:true,
          sourceMap:false,
          loaderOptions:{},
          modules:false,
       },
       pwa:{},
       devServer:{
       	 host:"127.0.0.1",
       	 port:3003,
       	 open:false,
       	 proxy:{
       	 	"/api":{
                 target:"http://study.jsplusplus.com/xiaomi",
                 changeOrigin:true,
                 ws:true,
                 pathRewrite:{
                     "^/api":""
                 }
       	 	}
       	 }
       },
       pluginOptions:{

       }



}