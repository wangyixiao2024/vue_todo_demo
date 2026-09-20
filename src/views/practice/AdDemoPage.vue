

<template>
    <div>
        <button @click="showAd = true">弹出广告</button>
        <Adpopup v-if="showAd" @close-ad="showAd = false"></Adpopup>
        <br>
        <button @click="jumpTest">点我跳转待办练习页面</button>
    </div>
</template>
<script setup>
let timer = null
import { ref,watch,onUnmounted } from 'vue'
import Adpopup from '@/components/AdPopup.vue'

import {useRouter,useRoute } from 'vue-router'
const showAd = ref(false)

const router = useRouter()
const  route = useRoute()
console.log('当前页面路径：', route.path)
const jumpTest = ()=>{
    router.push('/todosplitpage')
}

watch(showAd,(isShow) => {if(timer){
    clearTimeout(timer)
}if(isShow)
{
    timer=setTimeout(()=>{
        if(timer){ 
        showAd.value=false}
},6000)
}
}
)

onUnmounted(()=>{
    if(timer){
        clearTimeout(timer)
    }
})
</script>





