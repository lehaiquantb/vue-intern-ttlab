<template>
    <div class="input-custom-container" :style="{ width: width }">
        <div class="input-custom" :data-type="type" v-if="type !== 'radio'">
            <div class="input-custom__label">{{ label }}</div>
            <div class="input-custom__inner" :data-type="type">
                <input
                    type="text"
                    v-if="type === 'text'"
                    :placeholder="placeholder"
                    v-model="customValue"
                />
                <el-select
                    v-if="type === 'select'"
                    v-model="customValue"
                    :placeholder="placeholder"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
                <div v-if="type === 'checkbox'">
                    <div
                        class="input-custom__checkbox"
                        @click="customValue = !customValue"
                    >
                        <div
                            :style="{
                                backgroundColor: customValue === true ? '#0156FF' : '',
                            }"
                        ></div>
                    </div>
                    <p>{{ checkboxInfo }}</p>
                </div>
            </div>
        </div>
        <div v-if="type === 'radio'">
            <div
                class="input-custom"
                :style="{ width: width }"
                :data-type="type"
                v-for="(option, index) in options"
                :key="index"
            >
                <div class="input-custom__label">{{ option.label }}</div>
                <div class="input-custom__inner" :data-type="type">
                    <div>
                        <div class="input-custom__checkbox" @click="customValue = option">
                            <div
                                :style="{
                                    backgroundColor:
                                        customValue?.id === option?.id ? '#0156FF' : '',
                                }"
                            ></div>
                        </div>
                        <p>{{ option.checkboxInfo }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
type TypeInput = 'text' | 'select' | 'checkbox' | 'radio';
type TypeOption = { value: string; label: string };
@Options({
    props: {
        label: { type: String, default: '' },
        width: { type: String, default: '100%' },
        placeholder: { type: String, default: null },
        options: { type: Array, default: [] },
        type: {
            type: Object as () => TypeInput,
            default: 'text',
        },
        value: { type: Object as () => any, default: null },
        checkboxInfo: { type: String, default: '' },
        disabled: { type: Boolean, default: false },
    },
})
export default class CustomInput extends Vue {
    type!: string;
    options!: Array<TypeOption>;
    value!: any;
    get customValue(): any {
        return this.value;
    }

    set customValue(v) {
        this.$emit('update:modelValue', v);
    }

    created() {
        switch (this.type) {
            case 'select':
                this.customValue = this.options[0]?.value;
                break;
            case 'checkbox':
                this.customValue = false;
                break;
            case 'radio':
                this.customValue = this.options[0]?.value;
                break;
            default:
                break;
        }
    }
}
</script>

<style lang="scss">
.input-custom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__label {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */

        display: flex;
        align-items: center;

        /* Color - 7 */

        color: #000000;
    }
    &__inner {
        width: 100%;
    }
    &__inner[data-type='text'] {
        input {
            height: 50px;
            border: 1px solid #a2a6b0;
            background: #ffffff;
            box-sizing: border-box;
            border-radius: 4px;
            width: 100%;
        }
        /* Color - 5 */
    }

    &__inner[data-type='select'] {
        & > div {
            width: 100%;
        }
        input {
            height: 50px;
            border: 1px solid #a2a6b0;
            border-color: #a2a6b0 !important;

            background: #ffffff;
            box-sizing: border-box;
            border-radius: 4px;
            width: 100%;
        }
        .el-input__suffix {
            display: flex;
            align-items: center;
        }
    }
    &__inner[data-type='checkbox'],
    &__inner[data-type='radio'] {
        & > div {
            display: flex;
        }
        .input-custom__checkbox {
            border-radius: 10px;
            padding: 1px;
            cursor: pointer;
            div {
                height: 100%;
                width: 100%;
                border-radius: 10px;
            }
            min-width: 20px;
            height: 20px;
            border: 2px solid #0156ff;
            box-sizing: border-box;
            background: #ffffff;
        }
        input {
            width: 35px;
            height: 21px;
            cursor: pointer;
        }
        p {
            margin-left: 5px;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            /* or 143% */

            color: #000000;
        }
    }
}
</style>
