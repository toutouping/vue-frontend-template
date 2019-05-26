import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import { mapGetters } from 'vuex';
const demo = () => import('@/pages/demo/demo.vue')

Vue.use(Router);

let routerVue = new Vue({
    store,
    methods: {
        // 当前用户是否有路由权限
        async isRouterNameAuthority(routerName) {
            // 当前用户能访问的路由列表是否已获取,如果没有获取,则请求获取路由权限接口
            if (!this.isGetUserPerm) {
                await this.$store.dispatch('leftMenu/getCurrentPermission')
            }
            // 判断当前用户能访问的路由
            // 第一步，首先判断用户是否为管理员
            if (this.isAdmin) {
                return true
            }
            let authorityRes = false
            for(let i = 0; i < this.routerList; i++) {
                if (this.routerList[i].name == routerName) {
                    authorityRes = true
                    break
                }
            }
            return authorityRes
        }
    },
    computed: {
        ...mapGetters('leftMenu', ['isAdmin', 'isGetUserPerm', 'routerList'])
    }
})

let router = new Router({
    routes: [
        // {
        //     path: '/',
        //     redirect: 'demo'
        // },
        {
            path: '/403',
            component: resolve => require(['@/pages/403'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['@/pages/404'], resolve)
        },
        {
            path: '/demo', /* 首页 */
            component: demo,
            name: 'demo', /* this.$route.matched.filter(item => item.name) */
            meta: {
                keepAlive: false, /* 用于在 <keep-alive> 中使用，判断是否需要进行缓存 */
                bread: [
                    {displayName: '一级菜单', path: ''},
                    {displayName: '二级菜单', path: '/demo'},
                ]
            }
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({name: from.name}) : next('/404');
    } else {
        let authorityResult = await routerVue.isRouterNameAuthority(to.name)
        if (authorityResult || ['/403', '/404'].indexOf(to.path != -1)) {
            next();
        } else {
            next('/403');
        }
    }
});

export default router
