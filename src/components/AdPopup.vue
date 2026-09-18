<template>
    <div class="ad-box">
        <h3>广告弹窗，等待五秒才能关闭</h3>
        <button  @click="handleClose">关闭</button>
    </div>
</template>
<script setup>

    const emit = defineEmits(['closeAd'])
import {ref,onMounted,onUnmounted } from 'vue'
const canClose = ref(false)
let timer = null   
onMounted(()=>{
    timer =setTimeout(()=>{
        canClose.value = true 
    },5000)
})
const handleClose = ()=>{
    if(canClose.value===false){
        console.log('时间还没到，不能关闭广告')
    return 
    }

    emit('closeAd')
}

onUnmounted(()=>{
    clearTimeout(timer)
})
</script>
<style scoped>
.ad-box{
    width: 300px;
    padding: 20px;
    border: 2px solid #666;
    position: fixed;
    top: 500px;
    left: 200px;
    background: #fff;
}
</style>