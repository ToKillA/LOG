<template>
    <el-card style="height:100%;overflow-y:scroll">
        <el-card class="articleDetails" >
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">{{title}}</span>
                <span style="line-height: 36px;" >{{' 作者:'+author}}</span>
                <span style="line-height: 36px;" >{{' 时间:'+time}}</span>
            </div>
           <div  style="white-space: pre-wrap">{{contents}}</div>
        </el-card>
    </el-card>
</template>

<script>
module.exports = {
    name: "ArticleDetails",
    data() {
        return {
            id: '1',
            title: '不要温和地走进那个良夜',
            author: '狄兰·托马斯',
            time: '20世纪中期',
            contents: '不要温和地走进那个良夜，<br>老年应当在日暮时燃烧咆哮；<br>怒斥，怒斥光明的消逝。<br>虽然智慧的人临终时懂得黑暗有理，<br>因为他们的话没有进发出闪电，<br>他们也并不温和地走进那个良夜。<br>善良的人，当最后一浪过去，高呼他们脆弱的善行<br>可能曾会多么光辉地在绿色的海湾里舞蹈，<br>怒斥，怒斥光明的消逝。<br>狂暴的人抓住并歌唱过翱翔的太阳，<br>懂得，但为时太晚，他们使太阳在途中悲伤，<br>也并不温和地走进那个良夜。<br>严肃的人，接近死亡，用炫目的视觉看出<br>失明的跟睛可以像流星一样闪耀欢欣，<br>怒斥，恕斥光明的消逝。<br>您啊，我的父亲，在那悲哀的高处。<br>现在用您的热泪诅咒我，祝福我吧。我求您<br>不要温和地走进那个良夜。<br>怒斥，怒斥光明的消逝。'.trim().replace(/<br>/g,'\r\n')
        }
    }
}
</script>

<style scoped>
.articleDetails{
    width: 90%;
    margin: 15px auto;
}
</style>