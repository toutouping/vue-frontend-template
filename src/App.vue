<template>
    <div class='app'>
        <div class="fullpage">
            <app-header></app-header>
            <div class="flex-content">
                <app-left-menu></app-left-menu>
                <div class="app-container" :style="isCollapse ? 'width: calc(100% - 230px)' : 'width: calc(100% - 230px)'">
                    <app-breadcrumb :to="$route.meta.bread"></app-breadcrumb>
                    <div class="container">
                        <router-view/>
                    </div>
                    <app-footer></app-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import breadcrumb from '@/components/breadcrumb'
    import footer from '@/components/layout/footer'
    import header from '@/components/layout/header'
    import leftMenu from '@/components/layout/leftMenu'
    import { mapGetters } from 'vuex'
    import '@/assets/css/base.scss'
    // import '@/assets/css/table.scss'
    // import '@/assets/css/dialog.scss'

    export default {
        name: 'App',
        created () {
        },
        components: {
            'app-header': header,
            'app-left-menu': leftMenu,
            'app-footer': footer,
            'app-breadcrumb': breadcrumb
        },
        computed: {
            ...mapGetters('main', ['isCollapse'])
        }
    }
</script>
<style lang="scss">
.app {
    .flex-content {
        height: 100%;
        display: flex;
        .app-container {
            flex-grow: 1;
            padding: 20px 20px 0 20px;
            height: calc(100% - 50px);
            background: #f0f2f5;
            float: left;
            overflow: hidden;
            .container {
                height: calc(100% - 55px);
                width: 100%;
            }
        }
    }
}
</style>
