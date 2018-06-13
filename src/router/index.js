import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import myPage from '@/views/myPage'
import mainPage from '@/views/mainPage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'mainPage',
            component: mainPage
        },
        {
            path: '/mainPage',
            name: 'mainPage',
            component: mainPage
        }, {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/myPage',
            name: 'myPage',
            component: myPage
        }
    ]
})