<template>
    <el-card class="box-card">
        <el-card >
            <el-form ref="form" :model="article" label-width="80px">
                <el-form-item label="文章名称">
                    <el-input v-model="article.title"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-checkbox-group v-model="article.type">
                        <el-checkbox v-for="item in articleType" :label="item" :key="item"></el-checkbox>   
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="文章内容">
                    <el-input type="textarea" v-model="article.content" :rows="13"> </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即发布文章</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </el-card>
</template>

<script>
module.exports = {
    name: "Article",
    data() {
        return {
            articleType:["科技","生活","电影","音乐","记录"],
            article: {
                title: '',
                type: [],
                content: ''
            }
        }
    },
    methods: {
        onSubmit() { }
    }
}
</script>

<style scoped>

.box-card{
    width: 100%;
    height: 100%;
}
</style>