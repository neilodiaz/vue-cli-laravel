<template>
    <div>
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <div class="field">
                        <label class="label">Email</label>
                        <p class="control">
                            <input class="input" type="email" v-model="email" placeholder="Email">
                        </p>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <p class="control">
                            <input class="input" type="password" v-model="password" placeholder="Password">
                        </p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-primary" @click.prevent="login">Login</button>
                        </p>
                    </div>
                    <div class="field">
                        <div class="notification is-danger" v-show="error">
                            <p>Authentication Failed.</p>
                        </div>
                        <div class="notification is-success" v-show="success">
                            <p>Login Success! Redirecting...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                email: '',
                password: '',
                error: false,
                success: false
            }
        },

        methods: {
            login() {
                let vm = this
                let data = {
                    client_id: 2,
                    client_secret: 'Ov0BtZX6uoYKwMqIUGWLW2O7efe62zTjIJ8MbRJc',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }
                vm.success = false
                vm.error = false
                vm.$http.post('http://localhost:7800/oauth/token', data).then((response) => {
                    if (response.status == 200){
                        vm.success = true
                        let token = response.data.access_token
                        let expiration = response.data.expires_in + Date.now()
                        vm.$auth.setToken(token, expiration)
                        setTimeout(function(){
                            vm.$router.push('/');
                        }, 1000)
                    } else {
                        vm.error = true
                    }
                }).catch(function (error) {
                    vm.error = true
                });
            }
        }
    }
</script>
