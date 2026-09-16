<template>
    <div class="login-box">
        <h2>登录界面</h2>
    <div>
    <label >账号：</label>
    <input type="text" v-model="username" placeholder="输入账号"/>
    </div><div style="margin:10px 0">
        <label >密码：</label>
        <input v-model="password" type="password" placeholder="输入密码"/>
    </div>
    <button @click="handleLogin">登录</button>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()
alert('测试账号:admin 密码:123456')
//模拟登录演示
//测试账号admin
//测试密码
const handleLogin =()=>{
    if(!username.value.trim()|| !password.value.trim()){
        alert('账号密码不能为空')
        return
    }
    if(username.value==='admin'&&password.value==='123456'){
        localStorage.setItem('token','test-token-12366')
    
        router.push('/todo')
    }else{
        alert('账号或密码错误')
    }
}


//||或
//&&并且
</script>
<style scoped>

.login-box{
    width:300px;
    margin:100px auto;
}</style>