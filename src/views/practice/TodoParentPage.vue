<template>
    <br>
    <input v-model="inputText" placeholder="输入任务">
    <button @click="add">添加任务</button>

<TodoItem
v-for="item in todoList"   
:key="item.id"
:todo="item"
@toggle-item="handleToggle"   
@del-item="handleDel"  /> 
<br><br>
<button @click="goTodo">去首页push</button>
<br>
<button @click="goReplace">replace</button>
</template>

<script setup>

import TodoItem from '@/components/TodoItem.vue';
import{ref} from 'vue'
const inputText = ref('')
const todoList =ref([
    {id:101,text:'复习props',done:false},
    {id:102,text:'复习emit',done:true}
])
const add = () =>{
    const text = inputText.value.trim()
    if(!text)return
    todoList.value.push({
        id:Date.now(),
        text:text,
        done:false
    })
    inputText.value=''
}
const handleToggle = (id) =>{
    const index = todoList.value.findIndex(item=>item.id ===id)
    if(index!==-1){
        const task = todoList.value[index]
        task.done=!task.done
    }
}
const handleDel =(id)=>{
    const index =todoList.value.findIndex(item=>item.id===id)
    if(index!==-1){
        todoList.value.splice(index,1)
    }
} 
import {useRouter} from 'vue-router'
const router = useRouter()
const goTodo = ()=>{
  router.push('/')
}

const goReplace = ()=>{
  router.replace('/text')
}
</script>
