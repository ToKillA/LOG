<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="line-height: 36px;">卡片名称</span>
            <el-button style="float: right;" type="primary">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>

<script>
module.exports = {
    name: "Article",
    data() {
        return {
           
        }
    }
}
</script>

<style scoped>
p {
    font-size: '2em';
    color: 'red'
}
</style>