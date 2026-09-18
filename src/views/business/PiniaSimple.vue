<template>
    <div>
        <h3>纯Pinia练习页面</h3>
        <h3>（本地数据 不请求后端）</h3>
       
        
    <ul>
        <li v-for="item in todoStore.todoList" :key="item.id">
          <span :class="item.completed?'finished':''"> {{ item.title }}</span> 
<button @click="todoStore.toggleLocalTodo(item.id)">切换完成状态</button>
<button @click="todoStore.deleteLocalTodo(item.id)">删除</button>
        </li><br>
         <p>总数：{{ todoStore.totalCount }}|已完成：{{ todoStore.finishedCount }}|未完成:{{ todoStore.UnfinishedCount }}</p>
    </ul>
     <br>
     <button @click="todoStore.addLocalTodo('新增本地待办事项')">新增一条</button>
    <br>
     <button @click="gohome">返回首页</button>
    </div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const gohome =()=>{
    router.push('/')
}
import {useTodoStore} from '@/stores/todo'
const todoStore = useTodoStore()
</script>
<style scoped>
:deep(.finished){
    text-decoration: line-through;
    color :#999;
}
h3{
    line-height: 1.4; 
  margin:0;
}

</style>