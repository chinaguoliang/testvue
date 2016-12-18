<template>
  <div id="app">
    <img src="./assets/logo.png">
    <input v-model="trans" >
    {{trans}}
    <hall v-bind:mydata.sync="trans" @on-result-change="onResultChange"></hall>
    <hello v-bind:mydata.sync="trans" @on-result-change="onResultChange"></hello>

  </div>
</template>

<script>
import Hall from './components/Hall'
import Hello from './components/Hello'


export default {
  name: 'app',
   data:function (){
        return {
           trans:1
        }
    }
  ,
   methods: {
        onResultChange(val){
            this.trans=val;//④外层调用组件方注册变更方法，将组件内的数据变更，同步到组件外的数据状态中
        }
    }
  ,
  components: {
    Hall,
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
