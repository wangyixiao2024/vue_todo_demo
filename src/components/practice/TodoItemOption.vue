<template>
  <div style="margin:6px 0;">
   <span :class="todo.done?'finished':''"> {{ todo.text }}</span>
    <button @click="handleToggle" style="margin:0 4px"   >切换状态</button>
    <button @click="handleDel">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
      shape: {
        id: Number,
        text: String,
        done: Boolean
      }
    }
  },
  methods: {
    handleToggle() {
      this.$emit('toggle-item', this.todo.id)
    },
    handleDel() {
      this.$emit('del-item', this.todo.id)
    }
  }
}
</script>
<style>
.finished{
    text-decoration: line-through;
    color :#999;
}
</style>
