<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/register">注册</router-link> |
      <router-link to="/alarm-center">告警中心</router-link> |
      <router-link to="/video-monitor">视频监控</router-link> |
      <router-link to="/report">报告</router-link> |
      <router-link to="/area-config">区域配置</router-link> |
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'

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
