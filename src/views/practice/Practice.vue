<template>
    <div>
        <el-button  class="my-btn">测试ElementPlus按钮(局部)</el-button>
    </div>
    <br>
   <div>
    <el-button type="primary" >绿色全局样式测试 </el-button>
   </div>
</template>
<script scoped>

</script>
 <style scoped >
      .my-btn{ 
            background:#42b983;
            border-color:#42b983;
            color: #ffffff;
        }
        .my-btn:hover{
            background:#359469;
            border-color: #359469;
            color: #ffffff;
        }
    </style>