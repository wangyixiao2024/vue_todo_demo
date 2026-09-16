import {defineStore} from 'pinia'

import {getTodoList,addTodo,editTodo,delTodo,toggleTodo} from '@/api/todo'
export const useTodoStore = defineStore('todo',{
    state:()=>({
        todoList:[]
    }),
    getters:{
        totalCount(state){
            return state.todoList.length
        },
        finishedCount(state){
            return state.todoList.filter(item=>item.completed===true).length
        },
        UnfinishedCount(state){
            return state.todoList.filter(item=>item.completed===false).length
        }
        },
        actions:{
            //对接Todo.vue用
            async loadTodoList(){
              try{   const res = await getTodoList()
                this.todoList = res
                }catch(err){
            console.log('加载失败',err)
            alert('加载待办失败')
        }
            },
            async addNewTodo(title){
                try {
                await addTodo({title,completed:false})
                await this.loadTodoList()
                }catch(err){
            alert('新增失败')
        }
            },
            async editItem(id,newTitle){
                try {
                await editTodo(id,{title:newTitle})
                await this.loadTodoList()
                }catch(err){
            alert('修改失败')
        }
            },
            async deleteItem(id){
                try {
                await delTodo(id)
                await this.loadTodoList()
                }catch(err){
            alert('删除失败')
        }
            },
            async toggleCompleted(id,completed){
                try{
                    await toggleTodo(id,{completed:!completed})
                    await this.loadTodoList()
                }catch(err){
                    alert('切换状态失败')
                }
            },
            //PiniaSimple.vue用
            addLocalTodo(title){
                const newItem = {
                    id:Date.now(),
                    title:title,
                    completed:false
                }
                this.todoList.push(newItem)
            },
            toggleLocalTodo(id){
                console.log('传入id值:',id,'类型：',typeof id)
                const target = 
                this.todoList.find(item =>item.id ===id)
                console.log('target结果:',target)
                if(target){
                    target.completed =!target.completed
                }
            },
            deleteLocalTodo(id){
                this.todoList=
                this.todoList.filter(item=>item.id !==id)
            }
        }
    }
)