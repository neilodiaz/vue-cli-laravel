<template>
    <div>
        <header-menu></header-menu>
        <div class="container">
            <div class="content-wrapper">
                <h1>{{ msg }}</h1>
            </div>
        </div>
    </div>
</template>
<style>
    .content-wrapper {
        padding: 40px 0;
    }
</style>
<script>

    export default{
        data(){
            return{
                msg:'This is Home'
            }
        }
    }
</script>
