<template>
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
  </p>
  <div @click="goto">Go to hello world</div>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
    goto () {
      this.$router.push({ name: 'HelloWorld' })
    }
  }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
