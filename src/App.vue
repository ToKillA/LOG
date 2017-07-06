<template>
    <div id="app">
        <transition name="el-fade-in-linear">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
module.exports = {
    name: "App",
    data() {
        return {
            msg: '引入' + this.name + '文件'
        }
    }
}
</script>

<style scoped>


#app {
    height: 100%;
    width: 100%;
}
</style>