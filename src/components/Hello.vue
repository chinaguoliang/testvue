<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Important Events Publish</h2>
    <input v-model='myResult'/>
    {{myResult}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['mydata'],
  watch: {
        mydata(val) {
            this.myResult = val;//②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
        },
        myResult(val) {
             this.$emit("on-result-change",val);//③组件内对myResult变更后向外部发送事件通知

        }
    },
  data:function (){
    return {
      msg: 'Zhong hua',

            myResult:this.mydata
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
