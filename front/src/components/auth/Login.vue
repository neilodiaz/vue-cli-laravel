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
                            <button class="button is-primary" @click.prevent="test">Login</button>
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
            test: function() {
                this.$http.get('http://localhost:7800/api/test').then((response) => {
                  console.log(response.data)
                })
            }
        }
    }
</script>
