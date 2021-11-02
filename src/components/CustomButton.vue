<template>
    <div class="btn-custom"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title: { type: String, default: '' },
        disabled: { type: Boolean, default: false },
    },
})
export default class CustomButton extends Vue {}
</script>

<style lang="scss" scoped>
.btn-custom {
}
</style>
