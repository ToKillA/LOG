<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"Search",
        data(){
            return {
                msg:'引入Search.Vue文件'
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