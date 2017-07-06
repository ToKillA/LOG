<template>
    <div class="container">
        <header>
            <span class="logo"> { LOG }</span>
        </header>
    
        <div class="main">
            <aside>
                <el-menu theme="light"  style="height:100%;" unique-opened class="el-menu-vertical-demo" 
                :default-active="$route.path" :router=true mode="vertical">
                    <el-submenu v-for="(item,index) in $router.options.routes" v-if="!item.hidden" :index="index+''" :key="index">
                        <template slot="title">
                            <i :class="item.iconCls"></i>{{item.name}}</template>
                        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">{{child.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </aside>
            <section>
                <router-view></router-view>
            </section>
        </div>
    
    </div>
</template>

<script>
module.exports = {
    name: "Home",
    data() {
        return {
            
        }
    }
}
</script>

<style >
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.container {
    bottom: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.main {
    display: flex;
    flex-direction: row;
    flex: 1;
   
}

aside {
    flex: 0 0 250px;
    width: 230px;
}

section {
    width: 500px;
    flex: 1 1 auto;
    background-color: black;
}

header {
    line-height: 60px;
    padding: 0 40px;
    font-size: 1.2em;
    height: 60px;
    color: white;
    background-color: rgb(55, 65, 85);
}

.logo {

    font-family: consolas;
}

.saying {
    font-size: 0.8em;
}
</style>