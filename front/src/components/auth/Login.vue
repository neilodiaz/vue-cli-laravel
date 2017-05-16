<template>
    <div>
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <form @submit.prevent="login">
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
                                <button class="button is-primary" type="submit"><span v-show="!submitting">Login</span><span v-show="submitting">Logging in...</span></button>
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
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { API_URL, CLIENT_ID, CLIENT_SECRET } from '../../config.js'

    export default{
        data(){
            return{
                email: '',
                password: '',
                error: false,
                success: false,
                submitting: false
            }
        },

        methods: {
            login() {
                let vm = this
                let data = {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }
                vm.success = false
                vm.error = false
                vm.submitting = true
                vm.$http.post(API_URL + '/oauth/token', data).then((response) => {
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
                    vm.submitting = false
                }).catch(function (error) {
                    vm.error = true
                    vm.submitting = false
                });
            }
        }
    }
</script>
