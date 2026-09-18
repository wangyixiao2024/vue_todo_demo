<template>



  <div style="padding:24px;max-width:650px;margin:0 auto;">
    <h2>Vue3 选项式API综合演示</h2>
    <div style="margin:16px 0;">
      <button @click="currentDemo='todo'" style="margin:0 4px;padding:4px 10px">父子待办</button>
      <button @click="currentDemo='count'" style="margin:0 4px;padding:4px 10px">计数器</button>
      <button @click="currentDemo='watchDemo'" style="margin:0 4px;padding:4px 10px">watch监听</button>
      <button @click="currentDemo='form'" style="margin:0 4px;padding:4px 10px">表单v‑model</button>
    </div>

    <!-- Demo1 父子待办 -->
    <div v-if="currentDemo === 'todo'">
      <h3>父子组件‑待办清单(props / $emit / computed筛选)</h3>
      <input v-model="inputText" placeholder="请输入新任务">
      <button @click="add">添加任务</button>
      <div style="margin:8px 0;">
        <button @click="filterType='all'">显示全部</button>
        <button @click="filterType='done'">显示已完成</button>
        <button @click="filterType='undone'">显示未完成</button>
      </div>
      <TodoItemOption
        v-for="item in showList"
        :key="item.id"
        :todo="item"
        @toggle-item="toggleDone"
        @del-item="del"
      />
    </div>

    <!-- Demo2 计数器 -->
    <div v-if="currentDemo === 'count'">
      <h3>计数器（data / methods）</h3>
      <p :class="[count>10?'text-danger' : 'text-normal']">当前数值：{{ count }}</p>
      <button @click="addNum">+1</button>
      <button @click="delNum">-1</button>
      <button @click="resetNum">重置</button>
       <br>
    <p>(该计时器上限是20 下限是0 初始值是5)</p>
    <p>(数字小于10是黑色 大于10是红色)</p>
    </div>
   
    <!-- Demo3 watch深度监听 -->
    <div v-if="currentDemo === 'watchDemo'">
      <h3>watch深度监听数组</h3>
      <p>列表：</p>
      <div v-for="item in list" :key="item.id">{{ item.name }}
        <button @click="handleDel(item.id)">删除</button>
      </div>
      <p v-if="list.length === 0">暂无数据</p>
      <button @click="pushItem">往数组添加一项</button>
      <p style="color:#666">控制台查看watch打印日志</p>
    </div>

    <!-- Demo4 表单v‑model全套 -->
    <div v-if="currentDemo === 'form'">
      <h3>v‑model多种表单</h3>
      <div>用户名：<input v-model="form.username" /></div>
      <div>
        性别：
        <label><input type="radio" v-model="form.gender" value="男"/>男</label>
        <label><input type="radio" v-model="form.gender" value="女"/>女</label>
      </div>
      <div>
        协议：<input type="checkbox" v-model="form.isAgree"/>同意协议
      </div>
      <div>
        城市选择：
        <select v-model="form.city">
          <option value="济南">济南</option>
          <option value="淄博">淄博</option>
        </select>
      </div>
      <div style="margin-top:10px;">
  用户名：{{ form.username ||'未填写'}}｜性别：{{ form.gender || '未选择' }}｜协议：{{ form.isAgree ? '已同意' : '未同意' }}｜城市：{{ form.city || '未选择' }}
</div>

    </div>
  </div>
</template>

<script>
import TodoItemOption from '@/components/practice/TodoItemOption.vue'
export default {
  components: { TodoItemOption },
  data() {
    return {
      // 切换当前展示哪个demo
      currentDemo: '',

      // Demo1 待办
      inputText: '',
      todos: [
        { id: 1, text: '扫地', done: false },
        { id: 2, text: '洗碗', done: true },
        { id: 3, text: '拖地', done: false }
      ],
      filterType: 'all',
      maxId: 3,

      // Demo2 计数器
      count: 5,
      
      // Demo3 watch监听
      list: [{id:1,name:'A'}, 
      {id:2,name:'B'}],
   listMaxId: 2,
      // Demo4 表单
      form: {
        username: '',
        gender: '女',
        isAgree: false,
        city: ''
      }
    }
  },
  computed: {
    // 待办筛选
    showList() {
      if (this.filterType === 'all') return this.todos
      if (this.filterType === 'done') return this.todos.filter(item => item.done)
      return this.todos.filter(item => !item.done)
    }
    //`return` 提前退出函数，把 else if 给省掉了
  },
  watch: {
    list: {
      handler(newVal,oldVal) {
        console.log('watch监听到list数组发生变化', '新值',newVal,'旧值',oldVal)
      },
      deep: true
    }
  },
  methods: {
    // 待办
    add() {
      const val = this.inputText.trim()
      if (!val) return
      this.todos.push({ id: ++this.maxId, text: val, done: false })
      this.inputText = ''
    },
    del(id) {
      const idx = this.todos.findIndex(item => item.id === id)
      if (idx!==-1) this.todos.splice(idx, 1)
    },
   handleDel(id){
      this.list = this.list.filter(item => item.id !== id)
      //filter直接覆盖数组引用，就算去掉 deep:true 照样触发 watch
    },
    toggleDone(id) {
      const target = this.todos.find(item => item.id === id)
      if (target) target.done = !target.done
    },
   /*toggleDone(id) {
  const index = this.todos.findIndex(i => i.id === id)
  if (index !== -1) {
    const task = this.todos[index]
    task.done = !task.done
  }
}
*/
    // 计数器
    addNum() {
     if (this.count < 20){
      this.count++
     } 
    },
    //IF 后边只有一句的话，可以省略一个大括号
    delNum() { 
      if (this.count > 0)
       this.count-- },
    resetNum() { 
      this.count = 5 
    },

    // watch示例
   pushItem() {
  const newName = '新项' + ++this.listMaxId
  this.list.push({ id: this.listMaxId, name: newName })
}
  }
}
</script>
<style scoped>
:deep(.text-danger){
  color:red;
}
:deep(.text-normal){
  color:black;
}
</style>