<template>
    <div>
        <label v-if="label">{{label}}</label>
        <input v-bind="$attrs"
               :value="value"
               @blur="() => $emit('blur')"
               @input="updateValue">
    </div>
</template>
<script>

    import {BaseInputMixin} from '@/mixins/formFieldMixin'

    export default{
        mixins: [BaseInputMixin]
    }
</script>