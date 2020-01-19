<template>
    <div>
        <h1>Event Create</h1>
        <form @submit.prevent="_createEvent">
            <BaseSelect label="Select a category" :options="categories" v-model="event.category" class="field" />

            <h3>Name & describe your event</h3>
            <BaseInput field="Title" type="text" placeholder="Please enter a title" v-model="event.title" class="field" />
            <BaseInput field="Description" type="text" placeholder="Add a description" v-model="event.description" class="field" />

            <h3>Where is your event?</h3>
            <BaseInput field="Location" type="text" placeholder="Add a location" v-model="event.location" class="field" />

            <h3>When is your event?</h3>
            <div class="field">
                <label>Date</label>
                <datepicker v-model="event.date" placeholder="Select a date"/>
            </div>
            <BaseSelect label="Select a time" :options="times" v-model="event.time" class="field" />

            <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
        </form>
    </div>

</template>
<script>
    import {mapActions} from 'vuex'
    import Datepicker from 'vuejs-datepicker'
    import NProgress from 'nprogress'

    export default {
        components: {
            Datepicker
        },
        data(){
            const times = [];
            for(let i = 1; i <= 24; i++){
                times.push(i + ":00");
            }
            return {
                times,
                categories: this.$store.state.categories,
                event: this.createBlankEvent()
            }
        },
        methods:{
            ...mapActions(/* alternative syntax */'event', ['createEvent']),
            _createEvent(){
                NProgress.start();
                this.createEvent(this.event).then(() => {
                    this.$router.push({name: 'event-show', params: {id: this.event.id}});
                    this.createBlankEvent();
                }, () => NProgress.done());
            },
            createBlankEvent(){
                const user = this.$store.state.user.user;
                const id = Math.floor(Math.random() * 1000000);
                return {
                    id: id,
                    user: user,
                    category: '',
                    organizer: user.name,
                    title: '',
                    description: '',
                    location: '',
                    date: '',
                    time: '',
                    attendees: []
                }
            }
        }
    }
</script>
<style scoped>
    .field{
        margin-bottom: 24px;
    }
</style>