<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard :event="event" v-for="event in events" :key="event.id"/>
    </div>
</template>
<script>

    import EventCard from '@/components/EventCard.vue'
    import { getEvents } from '@/services/EventService.js'

    export default {
        components: {
            EventCard
        },
        data() {
            return {
                events: []
            }
        },
        created() {
            getEvents().then(res => this.events = res.data)
                .error(err => console.log(err));
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