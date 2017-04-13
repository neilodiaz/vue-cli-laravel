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
                password: ''
            }
        },

        methods: {
            login: function() {
                let data = {
                    client_id: 2,
                    client_secret: 'Ov0BtZX6uoYKwMqIUGWLW2O7efe62zTjIJ8MbRJc',
                    grant_type: 'password',
                    username: this.email,
                    password: this.password
                }
                this.$http.post('http://localhost:7800/oauth/token', data).then((response) => {
                    console.log(response.data)
                })
            }
        }
    }
</script>
