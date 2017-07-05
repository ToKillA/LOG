import Article from  './views/Article.vue'
import OneNote from './views/OneNote.vue'
import Picture from './views/Picture.vue'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'


let routes = [{
        path: '/',
        component: Home,
        name: '',
        hidden: true
    },
     {
        path: '/',
        component: Home,
        name: '',
        // iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/article', component: Article},
            { path: '/picture', component: Picture},
            { path: '/oneNote', component: OneNote}
        ]
    },
    {
        path: '*',
        component: NotFound,
        name: '',
        hidden: true
    }
];


export default routes