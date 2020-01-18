<template>
    <div class="notification-wrapper">
        <transition-group name="list" tag="ul">
            <Notification v-for="notification in notifications"
                              :key="notification.id"
                              :notification="notification"/>
        </transition-group>
    </div>
</template>
<script>

    import {mapState} from 'vuex'
    import Notification from '@/components/Notification'

    export default{
        components: { Notification },
        computed: mapState('notification', ['notifications'])
    }
</script>
<style scoped>

    .notification-wrapper{
        position: fixed;
        right: 50px;
        bottom: 10px;
    }

    li{
        list-style: none;
        width: 100%;
        font-size: 16px;
        padding: 16px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
        text-align: center;
        margin-bottom: 8px;
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-move {
        transition: transform 1s;
    }

    .list-item {
        transition: all 1s;
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter, .list-leave-to
        /* .list-complete-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    /*.list-leave-active {*/
        /*position: absolute;*/
    /*}*/
</style>