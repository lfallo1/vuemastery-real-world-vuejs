<template>
    <li class="notification"
        :class="notification.type"
        :key="notification.id"
        @click="remove(notification.id)">
        {{notification.message}}
    </li>
</template>
<script>

    import {mapActions} from 'vuex'

    export default {
        props: {
            notification: {
                type: Object,
                required: true
            }
        },
        data(){
            return {
                timeout: null
            }
        },
        methods: mapActions('notification', ['remove']),
        created(){
            this.timeout = setTimeout(() => this.remove(this.notification.id), 3500);
        },
        beforeDestroy(){
            clearTimeout(this.timeout);
        }
    }
</script>
<style scoped>
    li.notification.success{
        background: #39b982;

    }

    li.notification.error{
        background: #cd3b46;
    }
</style>