<template>
    <div>
        <h1>Events Listing {{currentPage}}</h1>
        <EventCard :event="evt" v-for="evt in event.events" :key="evt.id"/>
        <template v-if="currentPage > 1">
            <router-link :to="{name: 'event-list', query: {page: currentPage-1}}" rel="prev">Prev Page</router-link>
        </template>
        &nbsp;
        <template v-if="hasNextPage">
            <router-link :to="{name: 'event-list', query: {page: currentPage+1}}" rel="prev">Next Page</router-link>
        </template>
    </div>
</template>
<script>

    import EventCard from '@/components/EventCard.vue'
    import {mapState} from 'vuex'
    import store from '@/store/store'

    function getPageEvents(routeTo, next){
        const currentPage = parseInt(routeTo.query.page) || 1;
        store.dispatch('event/fetchEvents', {
            page: currentPage
        }).then(()=>{
            routeTo.params.currentPage = currentPage;
            next();
        })
    }

    export default {
        props: ['currentPage'],
        computed: {
            ...mapState(['event']),
            hasNextPage(){
                return this.event.eventsCount > (this.currentPage * this.event.perPage);
            }
        },
        components: {
            EventCard
        },
        beforeRouteUpdate(routeTo, routeFrom, next){
            getPageEvents(routeTo, next)
        },
        beforeRouteEnter(routeTo, routeFrom, next){
            getPageEvents(routeTo, next);
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