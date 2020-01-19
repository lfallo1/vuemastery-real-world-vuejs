<template>
    <div>
        <h1>Bummer!</h1>
        <h3 v-if="resource">The {{resource}} you're looking for could not be found</h3>
        <h3 v-else>The page you're looking for is not here</h3>
        <router-link :to="{name: 'event-list'}">Back to the home page</router-link>
    </div>
</template>
<script>
    export default{
        props: ['resource']
    }
</script>