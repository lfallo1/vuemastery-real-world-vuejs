<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard :event="event" v-for="event in events" :key="event.id"/>
    </div>
</template>
<script>

    import EventCard from '@/components/EventCard.vue'
    import {mapState, mapActions} from 'vuex'

    export default {
        components: {
            EventCard
        },
        computed: {
            ...mapState({
                events: 'events'
            })
        },
        methods:{
            ...mapActions(['fetchEvents'])
        },
        mounted(){
            this.fetchEvents();
        }
    }
</script>
<style lang="scss" scoped>
    div {
        h1 {
            color: black;
        }
    }
</style>