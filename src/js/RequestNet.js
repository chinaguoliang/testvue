import $ from '../js/jquery.min.js'
import Global from '../js/Global.js'

class RequestNet {
  constructor() {
    //this.$el = el;
    this.color = "yellow";

    // $.ajax({
    //   type : "POST",  //提交方式
    //   url : "http://www.runoob.com/",//路径
    //   data : {
    //     "org.id" : "${org.id}"
    //   },//数据，这里使用的是Json格式进行传输
    //   success : function(result) {//返回数据根据结果进行相应的处理
    //     if ( result.success ) {
    //       alert("success");
    //     } else {
    //       alert("failed");
    //     }
    //   }
    // });

    $.ajax({
      type : "GET",  //提交方式
      url : new Global().myurl,//路径
      'dataType': 'jsonp',
      crossDomain : true,
      xhrFields: {
        withCredentials: true
      },
      headers: {
        "Accept" : "application/json; charset=utf-8",
        "Content-Type": "application/javascript; charset=utf-8",
        "Access-Control-Allow-Origin" : "*"
      }
      ,
      success : function(result) {//返回数据根据结果进行相应的处理
        if ( result.success ) {
          alert("success");
        } else {
          alert("failed");
        }
      }
    });
  }
}

export default RequestNet
