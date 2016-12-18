<template>
  <div class="great">
    <div>{{ msg }}</div>
    <button v-on:click="addCount()">test</button>
  </div>
</template>

<script>
  import RequestNet from '../js/RequestNet'
  export default{
     name:'great',
     data(){
        return {
            msg: 'Zhong hua1'
        }
     },
    methods:{
        addCount:function () {
          var me = new RequestNet();
           alert(me.color);
        }
    }
  }


</script>
