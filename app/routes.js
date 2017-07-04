import Add from './Add.vue'
import Delete from './Delete.vue'
import Search from './Search.vue'
import Update from './Update.vue'
import NotFound from './NotFound.vue'


let routes = [{
        path: '/add',
        component: Add,
        name: '',
        hidden: true
    },
    {
        path: '/delete',
        component: Delete,
        name: '',
        hidden: true
    },
    {
        path: '/search',
        component: Search,
        name: '',
        hidden: true
    },
    {
        path: '/update',
        component: Update,
        name: '',
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