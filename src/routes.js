import ArticleSquare from './views/Article/ArticleSquare.vue'
import EditArticle from './views/Article/EditArticle.vue'
import ShowArticles from './views/Article/ShowArticles.vue'
import ArticleDetails from './views/Article/ArticleDetails.vue'
import TodayNews from './views/Vane/TodayNews.vue'
import ShowNews from './views/Vane/ShowNews.vue'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'


let routes = [{
        path: '/',
        component: Home,
        name: '',
        hidden:true
    },
     {
        path: '/',
        component: Home,
        name: 'Article',
        iconCls: 'el-icon-d-caret',
        children: [
            { path: '/articleSquare', component: ArticleSquare, name:'ArticleSquare'},
            { path: '/editArticle', component: EditArticle, name:'EditArticle'},
            { path: '/showArticles', component: ShowArticles, name:'ShowArticles'}
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Vane',
        iconCls: 'el-icon-more',
        children: [
            { path: '/showNews', component: ShowNews, name:'ShowNews'},
            { path: '/todayNews', component: TodayNews, name:'TodayNews'},   
        ]
    },
     {
        path: '/',
        component: Home,
        name: 'Details',
        iconCls: 'el-icon-more',
        children: [
            { path: '/articleDetails', component: ArticleDetails, name:'ArticleDetails'},
          
        ],
        hidden: true
    },
    {
        path: '*',
        component: NotFound,
        name: '',
        hidden: true
    }
];


export default routes