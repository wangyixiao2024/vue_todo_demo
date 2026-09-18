<template>


    <div class="todo-box">
        <h3>待办事项列表</h3>
        <button @click="todoStore.loadTodoList">加载全部代办</button>
        <button @click="todoStore.addNewTodo('学习axios完整封装')">新增一条待办</button>
    
    <ul> <li v-for="item in todoStore.todoList" :key="item.id">
       
        <span v-if="editId === item.id">
            <input v-model="editTitle"/>
            <button @click="handleSubmitEdit()">确认修改</button>
            <button  @click="cancelEdit()">取消</button>
        </span>
        <span v-else :class="{finished:item.completed}">
        {{ item.title }}--状态:{{ item.completed ?'已完成':'未完成' }}
        </span>
    <button  v-if="editId !==item.id" @click="openEdit(item)">修改</button>
    <button @click="todoStore.deleteItem(item.id)">删除</button>
    <button @click="todoStore.toggleCompleted(item.id,item.completed)">
  {{ item.completed ? '设为未完成' : '设为已完成' }}
</button>


    </li> 
    </ul>
    <p>总数：{{ todoStore.totalCount }}</p>
    <p>已完成：{{ todoStore.finishedCount }}</p>
    <p>未完成：{{ todoStore.UnfinishedCount }}</p>
      <br>
    <button @click="gohome">返回首页</button>
  <br>
  <button @click="handleLogout">退出登录</button>
    </div>
</template>
<script setup>

//import{storeToRefs} from 'pinia'


import {useRouter} from 'vue-router'
const router = useRouter()
const gohome =()=>{
    router.push('/')
}
import {useTodoStore} from '@/stores/todo'
const todoStore = useTodoStore()
//const {todoList,editId,editTitle,totalCount,finishedCount,UnfinishedCount}=storeToRefs(todoStore)
//State 还有那个 Getters 里面的方法需要 Store to Refs解构
//const {openEdit,cancelEdit,submitEdit,deleteTodo,toggleTodo,addTodo}=todoStore
//State 里的那个 actions的 方法，里面的方法不需要用哪个结构
import {ref} from 'vue'

const editId = ref(null)
const editTitle = ref('')



const cancelEdit = () =>{
    editId.value = null 
    editTitle.value=''
}
const openEdit = (item)=>{
    editId.value = item.id
    editTitle.value = item.title
}
const handleSubmitEdit = async(item) =>{
        await todoStore.editItem(item.id,editTitle.value)
        editId.value = null
      
}
//这个 HandleSubmitEdit 是本地函数，不在仓库里边。
const handleLogout =()=>{
    localStorage.removeItem('token')
    router.push('/login')
}
</script>

<style scoped>
:deep(.finished){
    text-decoration:line-through;
    color:#999;
}
</style>