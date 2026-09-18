<template>
  <div>
    <h2>待办清单 setup版本</h2>
    <div>总共：{{ totalCount }}条，已完成：{{ doneCount }}条</div>
    <input v-model="inputText" placeholder="输入新任务" />
    <button @click="addTodo">添加</button>
    <div>
      <button @click="filterType = 'all'">全部</button>
      <button @click="filterType = 'active'">未完成</button>
      <button @click="filterType = 'done'">已完成</button>
    </div>
    <ul>
      <li v-for="item in showList" :key="item.id">
        <span :class="{ done: item.done }">{{ item.text }}</span>
        <button @click="toggleDone(item.id)">切换状态</button>
        <button @click="delTodo(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed ,reactive } from 'vue'
// 响应式数据，相当于选项式data里面变量
const inputText = ref('')
const filterType = ref('all')
const todoList = ref([])

// methods 添加
const addTodo = () => {
  const text = inputText.value.trim()
  if(!text) return
  todoList.value.push({
    id: Date.now(),
    text: text,
    done: false
  })
  inputText.value = ''
}

// methods 切换完成
const toggleDone = (id) => {
  const item = todoList.value.find(i => i.id === id)
  if(item){
    item.done = !item.done
  }
}

// methods 删除
const delTodo = (id) => {
  const index = todoList.value.findIndex(i => i.id === id)
  if(index !== -1){
    todoList.value.splice(index,1)
  }
}

// computed 计算属性
const showList = computed(()=>{
  if(filterType.value === 'all'){
    return todoList.value
  }else if(filterType.value === 'active'){
    return todoList.value.filter(i => !i.done)
  }else{
    return todoList.value.filter(i => i.done)
  }
 
})
 const totalCount = computed(()=>{
    return todoList.value.length
  })
  const doneCount = computed(()=>{
    return todoList.value.filter(item =>item.done === true).length
  })
</script>

<style>
.done{
  text-decoration: line‑through;
  color:#999;
}
</style>
