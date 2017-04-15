<template>
    <div>
        <nav class="nav has-shadow">
            <div class="container">
                <div class="nav-left">
                    <a class="nav-item">
                        <img src="assets/images/bulma-logo.png" alt="Bulma logo">
                    </a>
                    <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
                </div>
                <span class="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div class="nav-right nav-menu">
                    <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
                    <a class="nav-item is-tab" @click.prevent="logOut">Log out</a>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },

        methods: {
            logOut() {
                this.$auth.destroyToken();
                this.$router.push('/login');
            }
        }
    }

</script>
