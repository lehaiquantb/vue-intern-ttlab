<template>
    <div class="btn-custom" :style="{ width: width }" :data-type="type">
        <slot name="default"></slot>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
type TypeButton = 'default' | 'primary' | 'third' | 'secondary' | 'fourth';
@Options({
    props: {
        title: { type: String, default: '' },
        width: { type: String, default: 'fit-content' },
        type: {
            type: Object as () => TypeButton,
            default: 'default',
        },
        disabled: { type: Boolean, default: false },
    },
})
export default class CustomButton extends Vue {}
</script>

<style lang="scss" scoped>
.btn-custom {
    border-radius: 50px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    height: 37px;

    /* identical to box height */

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    padding: 8px 21px;

    &[data-type='primary'] {
        background: #0156ff;
        color: #ffffff;
    }

    &[data-type='secondary'] {
        /* Color - 3 */
        border: 2px solid #0156ff;
        box-sizing: border-box;
        background: #fff;
        color: #0156ff;
    }

    &[data-type='third'] {
        /* Color - 7 */
        /* padding: 8px 10px; */
        background: #000000;
        color: #ffffff;
    }

    &[data-type='fourth'] {
        /* Color - 7 */
        color: #a2a6b0;
        border: 2px solid #a2a6b0;
        box-sizing: border-box;
        background: #fff;
    }
}
</style>
