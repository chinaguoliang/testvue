<template>
  <div class="great">
    <div>{{ msg }}</div>
    <button v-on:click="addCount()">test</button>
    <input v-model='myResult'/>
    {{myResult}}
    <div id="left" class="left widhei">1</div>
    <div id="right" class="right widhei">2</div>
    <div id="down" class="down widhei">3</div>

    <table id="mytitle" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="width:33.3%;"> <div style="background:yellow; height:100px;"></div></td>
        <td style="width:33.3%;"> <div style="background:red; height:100px;"></div></td>
        <td style="width:33.4%;"> <div style="background:blue; height:100px;"></div></td>
      </tr>

    </table>

    <div style="background:gray; height:100px;">
  </div>
</template>

<!--<style type="text/css">-->
  <!--body {color: #000;background: #fff;margin: 0;padding: 0;}-->
 <!--.left{ background:#606060;}-->
 <!--.right{ background:#123456; left:70px;top:0px;}-->
 <!--.down{background:#321321;left:100px;top:-40px;}-->
 <!--.widhei{width:40px;height:40px}-->
<!--</style>-->

<!--<style type="text/css">-->
  <!--body {color: #000;background: #fff;margin: 0;padding: 0;}-->
 <!--.left{ background:#606060;}-->
 <!--.right{ background:#123456; left:0px;top:-40px;position:relative;}-->
 <!--.down{background:#321321;left:0px;top:-80px;position:relative;}-->
 <!--.widhei{width:40px;height:40px}-->
<!--</style>-->

<style type="text/css">
  body {color: #000;background: #fff;margin: 0;padding: 0;}
 .left{ background:#606060;}
.right{ background:#123456;top:30px;}
.down{background:#321321;top:0;position:absolute}
.widhei{width:40px;height:40px}
</style>




<script>
  import RequestNet from '../js/RequestNet'
  import $ from '../js/jquery.min.js'

  export default{
     name:'great',
     props: ['mydata'],
     data:function (){
        return {
            msg: 'Zhong hua1',
            myResult:this.mydata
        }
     },
     watch: {
        mydata(val) {
            this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myResult(val) {
             this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知

        }
    }
     ,
    methods:{
        addCount:function () {
          var me = new RequestNet();
           alert(me.color);

           if (this.showing == null || !this.showing) {
              this.showing = true;
              $("#mytitle").hide();
           } else {
              this.showing = false;
              $("#mytitle").show();
           }
        }
    }
  }


</script>
