<template>
    <div class="container">
        <el-row>
            <el-col :span="24" class="header"> </el-col>
            <el-col :span="10" class="logo">
    
            </el-col>
            <el-col :span="10">
    
            </el-col>
            <el-col :span="4" class="userinfo">
    
            </el-col>
        </el-row>
    
        <div class="main tac">
            <aside>
                <el-menu theme="dark" :default-active="activeIndex" :router=true mode="vertical">
                    <el-menu-item index="article">Article</el-menu-item>
                    <el-menu-item index="picture">Picture</el-menu-item>
                    <el-menu-item index="oneNote">OneNote</el-menu-item>
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
            activeIndex: 'article'
        }
    }
}
</script>

<style scoped>
#home {
    margin: 0;
    padding: 0;
}

aside{
    flex:0 0 18%;
	width: 230px; 
}

section{
    flex:1;
}

.container{
 
    bottom: 0px;
	width: 100%;
    height: 100%;
}
.main{
    display: flex;
    
}
.logo {
    height: 60px;
}


</style>