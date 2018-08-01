import Vue from 'vue';
<<<<<<< HEAD
import VueRouter from 'vue-router';

import Root from './components/Root.vue';
import HeleButton from './components/HeleButton.vue'
import Admin from './components/Admin.vue';
import Counter from './components/Counter.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Root,
            children: [
                {
                    path: '',
                    component: HeleButton
                },
                {
                    path: 'admin.html',
                    component: Admin
                }
            ]
        },
        {
            path: '/counter.html',
            component: Counter
        }
    ]
});

new Vue({
    el: '#root',
    router: router,
    render: (h) => h(Root)
})
=======

import Root from './components/Root.vue';

new Vue({
    el: document.getElementById('root'),
    render: (h) => h(Root)
});
>>>>>>> master
