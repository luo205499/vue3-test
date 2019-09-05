<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ getCount }} times
    <button @click="CommitIncrement">+</button>
    <button @click="CommitDecrement">-</button>
  </div>
</template>

<script>
  import { mapGetters ,mapActions,mapMutations} from 'vuex'

  export default {
    computed: {
  	// 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'getCount'
      // ...
    ])
    },
    methods: {
    ...mapActions([
      'CommitIncrement',
      'CommitDecrement'
    ]),
    },
  }

</script>