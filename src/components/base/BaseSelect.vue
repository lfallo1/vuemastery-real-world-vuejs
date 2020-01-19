<template>
    <div>
        <label v-if="label">{{label}}</label>
        <select :value="value" @input="evt => $emit('input', evt.target.value)" v-bind="$attrs">
            <option v-for="option in options"
                    :value="option"
                    :selected="option === value"
                    :key="option">{{ option }}</option>
        </select>
    </div>
</template>
<script>
    export default {
        inheritAttrs: false,
        props:{
            label: {
                type: String,
                default: ''
            },
            options:{
                type: Array,
                required: true
            },
            value: {
                type: String,
                default: ''
            }
        }
    }
</script>