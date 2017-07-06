<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"TodayNews",
        data(){
            return {
                msg:'引入新闻文件'
            }
        }
    }
</script>

<style scoped>
    p{
        font-size:'2em';
        color:'red'
    }
</style>