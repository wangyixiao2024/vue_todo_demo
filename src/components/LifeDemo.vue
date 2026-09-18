<template>
    <p ref="myp">我是子组件</p>
    <button @click="handleClose">点击关闭子组件</button>
</template>
<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
const myp = ref(null)
let timer = null 
const emit = defineEmits(['close-child'])
const handleClose =()=>{
    console.log('按钮点击')
    emit('close-child')
}
onMounted(()=>{
    console.log('子组件 onmounted 挂载完毕',myp.value)
    if(!timer){
    timer = setInterval(()=>{
        console.log('子组件定时器正在运行')
    },2000)
    }
})
onUnmounted(()=>{
    console.log('子组件 onunmounted 销毁，清除定时器')
    clearInterval(timer)
    timer = null
})
</script>