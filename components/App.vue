<template>
    <div>
        <my-component></my-component>
    </div>
</template>
<script>
    import hello from './hello.vue'
    export default {
        name: 'App',
        components:{
            myComponent:hello
        }
    }
</script>