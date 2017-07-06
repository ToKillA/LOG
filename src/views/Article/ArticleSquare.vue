<template>
    <el-card style="height:100%;overflow-y:scroll">
        <el-card class="articleBrief" v-for="art in articles" :key="art.id">
            <h4 class="articleTitle" >
                <router-link to="/articleDetails">{{art.title}}</router-link>
            </h4>
            <div class="contentBrief">
                {{art.brief}}
            </div>
        </el-card>
    </el-card>
</template>

<script>
module.exports = {
    name: "ArticleSquare",
    data() {
        return {
            articles: [{
                id:'1',
                author:'',
                title: '不要温顺地走进那个良夜',
                brief: '不要温顺地走进那个良夜'
            }, {
                id:'2',
                title: '朝花夕拾',
                brief: '文集以记事为主，饱含着浓烈的抒情气息，往往又夹以议论，做到了抒情、叙事和议论融为一体，优美和谐，朴实感人。作品富有诗情画意，又不时穿插着幽默和讽喻；形象生动，格调明朗，有强烈的感染力'
            }, {
                id:'3',
                title: '朝花夕拾',
                brief: '文集以记事为主，饱含着浓烈的抒情气息，往往又夹以议论，做到了抒情、叙事和议论融为一体，优美和谐，朴实感人。作品富有诗情画意，又不时穿插着幽默和讽喻；形象生动，格调明朗，有强烈的感染力'
            }, {
                id:'4',
                title: '朝花夕拾',
                brief: '文集以记事为主，饱含着浓烈的抒情气息，往往又夹以议论，做到了抒情、叙事和议论融为一体，优美和谐，朴实感人。作品富有诗情画意，又不时穿插着幽默和讽喻；形象生动，格调明朗，有强烈的感染力'
            }, {
                id:'5',
                title: '朝花夕拾',
                brief: '文集以记事为主，饱含着浓烈的抒情气息，往往又夹以议论，做到了抒情、叙事和议论融为一体，优美和谐，朴实感人。作品富有诗情画意，又不时穿插着幽默和讽喻；形象生动，格调明朗，有强烈的感染力'
            }]
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
p {
    font-size: '2em';
    color: 'red'
}

.articleBrief {
    height: 130px;
    margin: 10px auto;
}

.articleTitle {
    margin-top: 5px;
    margin-bottom: 5px;
}

.contentBrief {
    height: 80%;
}
</style>