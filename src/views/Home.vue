<template>
  <div class="home" style="text-align: center">
    <button @click="$router.push('About')">About</button>

  </div>
</template>

<script>
  import {get,post} from '../api/api'
  export default {
    name: 'Home',
    data(){
      return{
        dataList:[],
      }
    },
    created(){

    },
    mounted() {
      this.getData();
    },
    methods:{
      getData(){
        get('',{type:2,page:1}).then(({code,data})=>{
            console.log(data);
        })
      },
    },
  }

</script>
<style lang="scss">

</style>
