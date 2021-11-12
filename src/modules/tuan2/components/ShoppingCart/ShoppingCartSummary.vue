<template>
    <div class="shopping-cart-summary__wrap">
        <div class="shopping-cart-summary">
            <div class="shopping-cart-summary__title">Summary</div>
            <div class="shopping-cart-summary__content">
                <collapse
                    class="shopping-cart-summary__shipping"
                    title="Estimate Shipping and Tax"
                    extraTitle="Enter your destination to get a shipping estimate."
                >
                    <custom-input
                        label="Country"
                        type="select"
                        class="shopping-cart-summary__shipping__item"
                        :options="[
                            {
                                value: 'Option1',
                                label: 'Option1',
                            },
                            {
                                value: 'Option2',
                                label: 'Option2',
                            },
                        ]"
                    ></custom-input>

                    <custom-input
                        label="State/Province"
                        type="text"
                        :value="summary.province"
                        v-model="summary.province"
                        class="shopping-cart-summary__shipping__item"
                    ></custom-input>
                    <custom-input
                        label="Zip/Postal Code"
                        type="text"
                        class="shopping-cart-summary__shipping__item"
                    ></custom-input>

                    <custom-input
                        type="radio"
                        :options="[
                            {
                                id: 'COD',
                                value: {
                                    id: 'COD',
                                    cost: 21,
                                },
                                label: 'Standard Rate',
                                checkboxInfo:
                                    'Standard Rate Price may vary depending on the item/destination. Shop Staff will contact you. $21.00',
                            },
                            {
                                id: 'PICK_UP_AT_STORE',
                                value: { cost: 0, id: 'PICK_UP_AT_STORE' },
                                label: 'Pickup from store',
                                checkboxInfo:
                                    '1234 Street Adress City Address, 1234 $0.00',
                            },
                        ]"
                        class="shopping-cart-summary__shipping__item"
                    >
                    </custom-input>
                </collapse>

                <collapse
                    class="shopping-cart-summary__discount"
                    title="Apply Discount Code"
                >
                    <custom-input
                        label="Enter discount code"
                        type="text"
                        placeholder="Enter Discount code"
                    ></custom-input>
                </collapse>
                <div class="shopping-cart-summary__divide"></div>
                <div class="shopping-cart-summary__order__info">
                    <div class="shopping-cart-summary__order__info__price">
                        <span>Subtotal</span><span>$13,047.00</span>
                    </div>
                    <div class="shopping-cart-summary__order__info__price__wrap">
                        <div class="shopping-cart-summary__order__info__price">
                            <span>Shipping</span><span>$13,047.00</span>
                        </div>
                        <div class="shopping-cart-summary__order__info__note">
                            (Standard Rate - Price may vary depending on the
                            item/destination. TECS Staff will contact you.)
                        </div>
                    </div>
                    <div class="shopping-cart-summary__order__info__price">
                        <span>Tax</span><span>$13,047.00</span>
                    </div>
                    <div class="shopping-cart-summary__order__info__price">
                        <span>GST (10%)</span><span>$13,047.00</span>
                    </div>
                    <div class="shopping-cart-summary__order__info__price">
                        <span>Order Total</span
                        ><span class="shopping-cart-summary__total">$13,047.00</span>
                    </div>
                </div>
                <div>
                    <custom-button width="100%" type="primary"
                        >Proceed to Checkout</custom-button
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Collapse from '@/components/Collapse.vue';
import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import { ICartSummary } from '../../types';

@Options({
    components: { Collapse, CustomButton, CustomInput },
})
export default class ShoppingCartSummary extends Vue {
    summary: ICartSummary = {
        country: '',
        province: '',
        postalCode: '',
        shippingMethod: {
            id: 'COD',
            cost: 21,
        },
        gst: 10,
        discountCode: '',
    };
}
</script>

<style lang="scss" scoped>
.shopping-cart-summary__wrap {
    padding: 0 10px;
}
.shopping-cart-summary {
    background-color: #f5f7ff;

    padding-top: 17px;
    padding-left: 32px;
    padding-right: 10px;
    padding-bottom: 30px;
    &__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #000000;
    }
    &__shipping {
        margin-top: 20px;
        &__item {
            /* width: 100%; */
            margin: 10px 0px;
        }
    }

    &__discount {
        margin-top: 20px;
    }

    &__divide {
        border: 1px solid #cacdd8;
        margin: 15px 0px;
    }

    &__order__info {
        & > div {
            padding: 5px 0px;
        }
    }

    &__order__info__price {
        display: flex;
        justify-content: space-between;
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

    &__order__info__note {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 180%;
        /* or 18px */

        display: flex;
        align-items: center;

        /* Color - 5 */

        color: #a2a6b0;
    }

    &__total {
        font-weight: 600;
        font-size: 18px;
    }
}
</style>
