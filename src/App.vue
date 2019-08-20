<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    mounted() {
      var user = localStorage.getItem('user');
      if (user) {
      }else {
        this.$message.warning('请登录！');
        var _this=this;
        setTimeout(function () {
          _this.$router.push({ path: '/login' });
        },500)
      }
    }
  }

</script>
<style lang="scss">
.app{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
</style>
