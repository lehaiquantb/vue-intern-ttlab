<template>
    <div class="filter-tag">
        <span class="filter-tag__title text-too-long">{{ title }}</span>
        <span class="filter-tag__quantity">({{ quantity }})</span>
        <span class="filter-tag__close">
            <img src="@/assets/images/bai2/red-close.svg" />
        </span>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title: { type: String, default: '' },
        quantity: { type: Number, default: 0 },
    },
})
export default class FilterTag extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.filter-tag {
    background: #ffffff;
    /* Color - 6 */
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cacdd8;
    box-sizing: border-box;
    border-radius: 2px;
    max-width: 200px;
    &__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */

        display: flex;
        align-items: center;

        color: #000000;
    }

    &__quantity {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */

        display: flex;
        align-items: center;

        color: #cacdd8;
    }

    &__close {
        cursor: pointer;
        margin-left: 5px;
    }
}
</style>
