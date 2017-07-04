<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"Delete",
        data(){
            return {
                msg:'引入Delete.Vue文件'
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