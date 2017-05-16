<template>
    <div>
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <form @submit.prevent="register">
                        <div class="field">
                            <label class="label">Name</label>
                            <p class="control">
                                <input class="input" type="text" v-model="name" placeholder="Name">
                            </p>
                        </div>
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
                            <label class="label">Confirm Password</label>
                            <p class="control">
                                <input class="input" type="password" v-model="password_confirmation" placeholder="Password">
                            </p>
                        </div>
                        <div class="field">
                            <p class="control">
                                <button class="button is-primary" type="submit"><span v-show="!submitting">Register</span><span v-show="submitting">Submitting...</span></button>
                            </p>
                        </div>
                        <div class="field">
                            <div class="notification is-danger" v-show="error">
                                <p>{{errorMessage}}</p>
                            </div>
                            <div class="notification is-success" v-show="success">
                                <p>Registration Success! Loggin in...</p>
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
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                error: false,
                errorMessage: '',
                success: false,
                submitting: false
            }
        },

        methods: {
            register() {
                let vm = this

                // Check if Confirm Pass is the same as the Password
                if (vm.password !== vm.password_confirmation) {
                    vm.error = true
                    vm.errorMessage = 'Please make sure Password is the as the Confirmation'
                    return false
                }

                let data = {
                    name: vm.name,
                    email: vm.email,
                    password: vm.password,
                    password_confirmation: vm.password_confirmation
                }
                vm.success = false
                vm.error = false
                vm.submitting = true
                vm.$http.post(API_URL + '/api/register', data).then((response) => {
                    if (response.status == 200) {
                        vm.login()
                    } else {
                        vm.errorMessage = 'Registration Failed. Please try again.'
                        vm.error = true
                    }
                    vm.submitting = false
                }).catch(function (error) {
                    vm.error = true
                    vm.submitting = false
                });
            },

            login() {
                let vm = this
                let data = {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }
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
                        vm.errorMessage = 'Registration Failed. Please try again.'
                        vm.error = true
                    }
                });
            }
        }
    }
</script>
