<template>

    <div>
        {{ todo.text }}
        <button @click="handleToggle">切换状态</button>
        <button @click="handleDel">删除</button>
    </div>
</template>
<script setup>
const props = defineProps({
    todo:{
        type:Object,
        required:true
    }
})
const emit = defineEmits(['toggle-item','del-item'])
const handleToggle=()=>{
    emit('toggle-item',props.todo.id)
}
const handleDel=()=>{
    emit('del-item',props.todo.id)
}

</script>