<template>
    <div>
        <div class="section">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <form>
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
                            <p class="control">
                                <button class="button is-primary">Register</button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name: '',
                email: '',
                password: ''
            }
        }
    }
</script>
