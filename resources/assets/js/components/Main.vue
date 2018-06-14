<template>
    <div>
        <app-header-nav></app-header-nav>

        <div class="container">

            <router-view></router-view>

        </div>


        <app-footer></app-footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import Header from './HeaderNav'
    import Footer from './Footer'

    export default {
        name: "Main",
        components:{
            appHeaderNav: Header,
            appFooter: Footer
        },

    }
</script>

<style scoped>

</style>