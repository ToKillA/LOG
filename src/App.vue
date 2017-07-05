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
body {
    margin: 0;
    padding: 0;
}

#app {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
</style>