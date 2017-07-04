<template>
    <div id="app">
        <p>{{msg}}</p>
    </div>
    
</template>

<script>
    module.exports = {
        name:"app",
        data(){
            return {
                msg:'3.引入Vue文件'
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