<template>
    <div>
    <br>
    <input v-model="inputText" placeholder="请输入任务"/>
    <button @click="add">添加任务</button>
    <div>
        <button @click="filterType='all'">全部</button>
      <button @click="filterType='active'">未完成</button>
      <button @click="filterType='done'">已完成</button>
    </div>
    <TodoItem
    v-for="item in filterList"
    :key="item.id"
    :todo="item"
    @toggle-item="onReceiveToggle"
    @del-item="onReceiveDel"
    />
    </div>
</template>
<script setup>
import TodoItem from '@/components/TodoItem.vue'
import {ref,computed,watch,} from 'vue'
const todoList=ref([{id:1, text:'复习ref', done:false},
    {id:2, text:'复习props', done:false}]
)
//取出字符串 → JS 对象 / 数组
const saveData = localStorage.getItem('todoData')
if(saveData){
    try{ 
        const arr = JSON.parse(saveData)
        if(Array.isArray(arr)){
            todoList.value = arr
        }
        }catch(err){
            console.log('本地存储解析失败',err)
        }
    }
const filterType=ref('all')
const filterList = computed(()=>{
    if(filterType.value==='all'){
        return todoList.value
    }else if(filterType.value==='active'){
        return todoList.value.filter(item=>!item.done)
    }else if (filterType.value==='done'){
        return todoList.value.filter(item=>item.done)
    }
})
const inputText =ref('')
const add=()=>{
    const text = inputText.value.trim()
    if(!text)return
    todoList.value.push({
        id:Date.now(),
        text:text,
        done:false
    })
    inputText.value=''
}
const onReceiveToggle=(id)=>{
    const index =todoList.value.findIndex(item=>item.id===id)
    if(index!==-1){ 
    const task =todoList.value[index]
task.done=!task.done}
}
const onReceiveDel=(id)=>{
     const index =todoList.value.findIndex(item=>item.id===id)
    if(index!==-1){
    todoList.value.splice(index,1)
}}
watch(filterType,(newVal,oldVal)=>{
    console.log(`筛选条件更新,从${oldVal}->${newVal}`)
})
watch(todoList,()=>{
    const total = todoList.value.length
    const doneNum = todoList.value.filter(i=>i.done).length
    console.log(`待办总数${total},已完成${doneNum}`)
},{deep:true})
watch(todoList,()=>{
    localStorage.setItem('todoData',JSON.stringify(todoList.value))
},{deep:true})
//对象 / 数组 → JSON 字符串
</script>

