<template>
    <div>
        <h1>Event Create</h1>
        <p>The event was created by {{user.name}}</p>
        <p>{{catLength}} categories</p>
        <ul>
            <li v-for="(category, idx) in categories" :key="idx">{{category}}</li>
        </ul>
        <p>Found todo: {{getTodosById(1)}}</p>
        <p>Remaining todos: {{activeTodosCount}}</p>
        <p>Done todos: {{doneTodos}}</p>
    </div>

</template>
<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapState(['user', 'categories']),
            ...mapGetters(['catLength', 'getTodosById', 'activeTodosCount', 'doneTodos'])
        }
    }
</script>