<template>  
        <p>{{msg}}</p>  
</template>

<script>
    module.exports = {
        name:"Add",
        data(){
            return {
                msg:'引入Add.Vue文件'
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