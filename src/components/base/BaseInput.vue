<template>
    <div>
        <label v-if="field">{{field}}</label>
        <input v-bind="$attrs"
               :value="value"
               @input="event => $emit('input', event.target.value)">
    </div>
</template>
<script>
    export default{
        inheritAttrs: false,
        props: {
            field: {
                type: String,
                default: ''
            },
            value: {
                type: [String, Number],
                default: ''
            }
        }
    }
</script>