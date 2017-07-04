<template>
    <div id="app">
        <el-menu theme="dark"  class="el-menu-demo" :router=true mode="horizontal">
            <el-menu-item index="add">Add</el-menu-item>
            <el-menu-item index="delete">Delete</el-menu-item>
            <el-menu-item index="update">Update</el-menu-item>
            <el-menu-item index="search">Search</el-menu-item>
        </el-menu>
         <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    }
}
</script>