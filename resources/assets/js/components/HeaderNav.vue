<template>

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" target="_blank" href="https://michel-5.com">
                    <b>Phonebook</b>
                </a>
            </div>
            <div class="navbar-menu is-active">
                <router-link to="home" active-class="active" class="navbar-item" exact><a>Home</a></router-link>
                <router-link to="about" active-class="active" class="navbar-item"><a>About</a></router-link>

            </div>


                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

        </nav>

</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped>

</style>