<template>
    <p>21</p>
</template>

<script>
module.exports = {
    name: "Article",
    data() {
        return {
            articles: [{
                title: '',
                author: '',
                content: ''
            }, {
                title: '',
                author: '',
                content: ''
            }]
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