<template>
    <div class="input-number-custom">
        <input
            type="number"
            :min="min"
            :max="max"
            :value="value"
            @input="$emit('update:modelValue', parseFloat($event.target.value))"
        />
        <div class="input-number-custom__icon">
            <div class="super-center" @click="increaseValue">
                <img src="@/assets/images/bai2/arrow-up-icon.svg" />
            </div>
            <div class="super-center" @click="decreaseValue">
                <img
                    src="@/assets/images/bai2/arrow-up-icon.svg"
                    class="input-number-custom__icon__down"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: Infinity },
        value: { type: Number, default: 0 },
    },
})
export default class InputNumber extends Vue {
    min!: number;
    max!: number;
    value!: number;
    increaseValue() {
        if (this.value < this.max) {
            this.$emit('update:modelValue', this.value + 1);
        }
    }

    decreaseValue() {
        if (this.value > this.min) {
            this.$emit('update:modelValue', this.value - 1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type='number'] {
    -moz-appearance: textfield;
}

.input-number-custom {
    background: #f5f7ff;
    border-radius: 6px;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    input {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */

        display: flex;
        align-items: center;
        text-align: center;

        /* Color - 7 */
        border: none;
        color: #000000;
        height: 100%;
        width: 40px;
        background: #f5f7ff;
    }
    &__icon {
        height: 100%;
        div {
            cursor: pointer;
            width: 30px;
            height: 50%;
        }
        display: flex;
        flex-direction: column;
        &__down {
            transform: rotate(180deg);
        }
    }
}
</style>
