<template>
    <div class="todo-box">
        <h3>Axios基础练习</h3>
        <button @click="loadTodoList">GET请求：加载全部代办</button>
        <button @click="sendPost">POST：提交数据</button>
    </div>
    <ul>
      <li v-for="item in todoList" :key="item.id">
        {{ item.title }} — {{ item.completed===true ? '已完成' : '未完成' }}
      
      <button @click="toggleItem(item)">{{ item.completed===true?'设为未完成':'设为已完成' }}</button>
        <button @click="deleteItem(item.id)">删除</button>
    </li>
    </ul><p>
        总数：{{ totalCount }}
    </p>
    <p>已完成：{{ finishedCount }}</p>
    <p>未完成：{{ UnfinishedCount }}</p>
     <br><div>
    <button @click="gohome">返回首页</button>
    </div>
</template>
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
const gohome =()=>{
    router.push('/')
}
import axios from 'axios'
import {ref,computed} from 'vue'
const todoList = ref([])

const loadTodoList = async()=>{
    try{
 const res = await axios.get('http://localhost:3000/todo')
 todoList.value = res.data
console.log('GET返回结果', res.data)
    }catch(err){
        console.log('加载出错',err)
        alert('加载失败，检查后端是否打开')
    }
}
const toggleItem = async(item)=>{
    try{
        await axios.patch(`http://localhost:3000/todo/${item.id}`,
            {completed:!item.completed}
        )
      await  loadTodoList()
    }catch(err){
        console.log('切换状态失败',err)
        alert('切换状态失败')
    }
}
const deleteItem = async()=>{
    try{
        await axios.delete(`http://localhost:3000/todo/${id}`
        )
        await loadTodoList()
    }catch(err){
        alert('删除失败！')
    }
}
const sendPost = async()=>{
    try{
        const res = await axios.post('http://localhost:3000/todo',{
            title:'Axios基础练习',
            completed:false 
        })
        console.log('post返回结果',res.data)
     await loadTodoList()
    }catch(err){   
        console.log('post请求失败',err)
        alert('提交失败')
    }
}
const totalCount = computed(()=>{
    return todoList.value.length
})
const finishedCount = computed(()=>{
    return todoList.value.filter(item => item.completed===true).length
})
const UnfinishedCount = computed(()=>{
    return todoList.value.filter(item=> item.completed===false).length
})
</script>