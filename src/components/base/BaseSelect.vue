<template>
    <div>
        <label v-if="label">{{label}}</label>
        <select :value="value" @input="updateValue" v-bind="$attrs" @blur="$emit('blur')">
            <option v-for="option in options"
                    :value="option"
                    :selected="option === value"
                    :key="option">{{ option }}</option>
        </select>
    </div>
</template>
<script>

    import {BaseInputMixin} from '@/mixins/formFieldMixin'

    export default {
        mixins: [BaseInputMixin],
        props:{
            options:{
                type: Array,
                required: true
            }
        }
    }
</script>