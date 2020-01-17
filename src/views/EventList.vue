<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard :event="event" v-for="event in events" :key="event.id"/>
    </div>
</template>
<script>

    import EventCard from '@/components/EventCard.vue'

    export default {
        components: {
            EventCard
        },
        data() {
            return {
                events: []
            }
        },
        mounted() {
            this.events = [
                {id: 1, title: 'Some get together', date: 'Tues Aug 19, 2018', time:'6:00', attendees: [{id: 'abc123', 'name': 'John Doe'}]},
                {id: 2, title: 'Dinner', date: 'Wed Aug 20, 2018', time:'20:00', attendees: [{id: 'abc123', 'name': 'John Doe'}, {id: 'abc124', 'name': 'John Smith'}]},
            ]
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