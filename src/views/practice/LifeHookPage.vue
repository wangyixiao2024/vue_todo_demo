
<template>
    <div>
        <h2>测试生命周期</h2>
        <p ref="myp">我是P标签的dom</p>
   
     <h2>测试生命周期onMounted/onUnmounted </h2>
    <button @click="showTest = !showTest">点我显示或者销毁内容 </button>
   <LifeDemo v-if="showTest" @close-child="showTest=false"></LifeDemo>
    </div>
</template>
<script setup>
import LifeDemo from '@/components/LifeDemo.vue'
import {ref,onMounted,onUnmounted} from 'vue'
const myp = ref(null)
//let timer = null
const closeChild =()=>{
    console.log('父组件接收到子组件事件')
    showTest.value = false
}

const showTest = ref(true)
//下面这段注释掉：父组件生命周期+定时器，作为拓展演示

/*onMounted(()=>{
    console.log('===onMounted执行：组件已经上页面了===')
    console.log(myp.value)
    timer = setInterval(()=>{
        console.log('父组件定时器在跑')
    },1000)
})
onUnmounted(()=>{
    console.log('===onUnmounted执行，组件要被销毁了===')
    if(timer){
        clearInterval(timer)
    }
})
*/
</script>