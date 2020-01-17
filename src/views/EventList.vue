<template>
    <div>
        <h1>Events Listing</h1>
        <EventCard :event="event" v-for="event in events" :key="event.id"/>
        <template v-if="page > 1">
            <router-link :to="{name: 'event-list', query: {page: page-1}}" rel="prev">Prev Page</router-link>
        </template>
        &nbsp;
        <template v-if="page*3 < eventsCount">
            <router-link :to="{name: 'event-list', query: {page: page+1}}" rel="prev">Next Page</router-link>
        </template>
    </div>
</template>
<script>

    import EventCard from '@/components/EventCard.vue'
    import {mapState} from 'vuex'

    export default {
        components: {
            EventCard
        },
        computed: {
            ...mapState(['events', 'eventsCount']),
            page(){
                return parseInt(this.$route.query.page) || 1
            }
        },
        created(){
            this.$store.dispatch('fetchEvents', {
                perPage: 3,
                page: this.page
            });
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