<template>
  <hr>
  <div class="container">
  
  <nav class="nav">
    <h2>导航菜单</h2>
    <div class="link-wrap">
      <h3>业务实战模块（pinia/Axios）</h3>
  <router-link to="/axiosbasic"> Axios原生基础</router-link>
  <router-link to="/axioswrap">Axios封装</router-link>
  <router-link to="/piniasimple">纯Pinia练习</router-link>
  <router-link to="/todo">Todo整合实战</router-link>
  </div>
  <div class="link-wrap">
    <h3>Vue3组合式API练习模块</h3>
    <router-link to="/todosplitpage">待办完整版</router-link>
    <router-link to="/addemopage">广告弹窗练习</router-link>
  </div>
</nav>

<router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>
.container{
  padding:20px;
}
.nav{

  display:flex;
  flex-direction: column;
  align-items: center;
  gap:14px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  margin-bottom :30px;
}
.nav h2{
  margin:10;
}
.link-wrap{
  display:flex;
  gap:24px;
}
.nav a{
  padding: 8px 12px;
  background: #42b983;
  color:#fff;
  text-decoration: none;
  border-radius: 6px;
  transition:0.2s;
}
.nav a:hover{
  background:#359469;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.nav a.router-link-active{
  background:#30865f;
  font-weight: bold;
}
.done{
  text-decoration: line-through;
  color:#999;
}
</style>
