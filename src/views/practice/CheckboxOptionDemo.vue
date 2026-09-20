<template>
    
        <div class="checkbox-page">
        <label class="check-all">
            <input type="checkbox" v-model="checkAll">全选</label>


        <div class="checkbox-wrap">
        <div v-for="item in list" :key="item.value">
            <label>
                <input type="checkbox" v-model="selected" :value="item.value">{{ item.label }}
            </label>
</div>
</div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {label:'Vue基础',value:'vue'},
                {label:'Pinia',value:'pinia'},
                {label:'Vue Router',value:'router'},
                {label:'Axios',value:'axios'}
            ],
            selected:[]
        }
        
    },
    computed:{
    checkAll:{
        get() {
            return this.list.every(option=>this.selected.includes(option.value))
        },
        set (val) {
            if(val){
                this.selected=this.list.map(option =>option.value)
            }else{
                this.selected = []
            }
        }
    }
}
}

</script>
<style scoped>
.checkbox-page{
    width:420px;
    margin:30px auto;
    padding:24px;
    border:1px solid #e0e0e0;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    
}
.checkbox-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: flex-start;
  padding-left:4px;
}
.check-all{
  
    font-size:15px;
    display:inline-block;
    padding-left: 4px;
    margin-bottom:20px;
    cursor:pointer;

}
.checkbox-wrap label{
    cursor:pointer;
    font-size:15px;
    color:#333;
}
</style>