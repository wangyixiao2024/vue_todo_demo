<template>
    <br>
    <br>
<input v-model="inputText" placeholder="请输入新任务">
<button @click="add">添加任务</button>
<br>
<button @click="filterType='all'">全部任务</button>
<button @click="filterType='active'">未完成任务</button>
<button @click="filterType='done'">已完成任务</button>
<div v-for="item in showList" :key="item.id" :class="{finish:item.done}">
    {{ item.text }}
    <button @click="toggleDone(item.id)">切换状态</button>
    <button @click="del(item.id)">删除</button>
</div>
</template>

<script setup>
import {ref,computed} from 'vue'
const inputText = ref('')
const todoList = ref([
    {id:101,text:'学习vue',done:false},
    {id:102,text:'练习代码',done:true}
])
const filterType = ref('all')

const add=()=>{
    const text = inputText.value.trim()
    if(!text){ 
 return
    }
       todoList.value.push({
        id:Date.now(),
        text:text,
        done:false
       })
    inputText.value=''
}


const toggleDone =(id)=>{
    const index = todoList.value.findIndex(item=> item.id === id)
    if(index!==-1){
        const task = todoList.value[index]
        task.done=!task.done
    }
}
function del(id){
    const index = todoList.value.findIndex(item=>item.id === id)
    if(index!==-1){
        todoList.value.splice(index,1)
    }
}
const showList = computed(()=>{
if(filterType.value==='all'){
    return todoList.value
}else if (filterType.value ==='active'){
    return todoList.value.filter(item=>!item.done)
}else if(filterType.value ==='done') {
    return todoList.value.filter(item=>item.done)
}

})
</script>


<style>
.finish {
    text-decoration: line-through;
    color:#888
}
</style>

