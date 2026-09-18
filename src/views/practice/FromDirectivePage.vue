<template>
    <br>
   
    <button @click="isShow = !isShow">切换显示隐藏 </button>
<br>

<div v-if="isShow">我是v-if</div>
    <div v-else>不满足就显示我</div>
    <div v-show="isShow">我是v-show</div>
   
    <br>
    <br>
    
    <input v-model="msg">
    <br>
     <input :value="msg" @input="msg=$event.target.value"/>
    //输入框
<br>
<input type="checkbox" value="6" v-model="a"/>
<span>同意协议</span>
<input type="checkbox" value="7" v-model="a"/>
<span>aaa</span>
<input type="checkbox" value="8" v-model="a"/>
<span>bbb</span>
//复选
<br>
<input type="radio" value="male" v-model="gender"/>男
<input type="radio" value="female" v-model="gender"/>女
//单选
<br>
<br>
<input type="radio" value="1" v-model="large"/>大
<input type="radio" value="2" v-model="large"/>中 
<input type="radio" value="3" v-model="large"/>小
<p>你选择的是：{{ largeMap[large]}}</p>
<br><br>
<select v-model="city">
    <option value="jinan">济南</option>
    <option value="zibo">淄博</option>
    <option value="shanghai">上海</option>
</select>
//下拉

</template>
<script setup>
import {ref} from 'vue'
const msg =ref('')
const isShow=ref(true)

const a = ref([])
const gender =ref('male')
const city =ref('jinan')

const large = ref(1)
const largeMap = {
    '1':'大',
    '2':'中',
    '3':'小'

}
//1. text 文本框 → ref 初始值给 **'' 空字符串**
//2. checkbox 复选框 → ref 初始值给 **false 布尔**
</script>

    //等价<input :value="msg" @input="msg=$event.target.value"/>
     //`$event.target.value`：输入框里面现在用户输入的文字。
整体：用户打字，把输入框最新文字赋值给 msg。输入框 → JS 数据。
//`:value="msg"`
`:` 是 v‑bind，**把 JS 里面 msg 的值，显示到输入框里面**。JS 数据 → 输入框。
JS 改 msg，输入框里面文字自动变。

//script 修改复选框：`const isAgree=ref(false)`，
修改：`isAgree.value = true`（你漏了`.value`）