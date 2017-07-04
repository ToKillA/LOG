<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"NotFound",
        data(){
            return {
                msg:'引入NotFound.Vue文件'
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