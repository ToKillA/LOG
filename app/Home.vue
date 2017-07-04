<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"Home",
        data(){
            return {
                msg:'引入Home.Vue文件'
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