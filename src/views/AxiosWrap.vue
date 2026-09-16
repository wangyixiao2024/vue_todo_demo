<template>


    <div class="todo-box">
        <h3>待办事项列表</h3>
        <button @click="loadTodoList">加载全部代办</button>
        <button @click="addNewTodo">新增一条待办</button>
    
    <ul> <li v-for="item in todoList" :key="item.id">
       
        <span v-if="editId === item.id">
            <input v-model="editTitle"/>
            <button @click="submitEdit(item)">确认修改</button>
            <button  @click="cancelEdit">取消</button>
        </span>
        <span v-else>
        {{ item.title }}__状态:{{ item.completed ?'已完成':'未完成' }}
        </span>
    <button  v-if="editId !==item.id" @click="openEdit(item)">修改</button>
    <button @click="deleteItem(item.id)">删除</button>
    <button @click="toggleCompleted(item)">
  {{ item.completed ? '设为未完成' : '设为已完成' }}
</button>
    </li> 
    </ul>
    <p>总数：{{ totalCount }}</p>
    <p>已完成：{{ finishedCount }}</p>
    <p>未完成：{{ UnfinishedCount }}</p>
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
import{getTodoList,addTodo,editTodo,delTodo,toggleTodo} from '@/api/todo'
import {ref,computed} from 'vue'
const todoList = ref([])
const editId = ref(null)
const editTitle = ref('')
const loadTodoList = async()=>{
    try{
 const data = await getTodoList()

    todoList.value = data
    }catch(err){
        console.log('加载出错',err)
        alert('加载失败，检查后端是否打开')
    }
}
const totalCount = computed(()=>{ 
    return todoList.value.length})
const finishedCount = computed(()=>{
    return todoList.value.filter(item=>item.completed).length})
const UnfinishedCount = computed(()=>{
    return todoList.value.filter(item=>!item.completed).length
})

const cancelEdit = () =>{
    editId.value = null 
    editTitle.value=''
}
const openEdit = (item)=>{
    editId.value = item.id
    editTitle.value = item.title
}
const submitEdit = async(item) =>{
    try{
        await editTodo(item.id,{
            
            title:editTitle.value,
            completed:item.completed
        }
    )
        editId.value = null
      await  loadTodoList()
    }catch(err){
        alert('修改失败')
    }
}

//alert 页面弹窗

const addNewTodo = async()=>{
    try{ 
    const data = {
        title:'学习axios完整封装',
        completed:false
    }
    await addTodo(data)
 await   loadTodoList()
}catch(err) {
    console.log('新增出错',err)
    alert('新增失败')
  }
}
const deleteItem = async(id)=>{
    try {
    await delTodo(id)
  await  loadTodoList()
}catch(err) {
    console.log('删除出错',err)
    alert('删除失败')
  }
}

const toggleCompleted = async(item)=>{
    try{
        await toggleTodo(item.id,{completed:!item.completed})
    await loadTodoList()
    }catch(err){
        alert('切换状态失败')
    }
}
</script>