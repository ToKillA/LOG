<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"Update",
        data(){
            return {
                msg:'引入Update.Vue文件'
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