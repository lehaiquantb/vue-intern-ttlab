<template>
    <div class="product_card">
        <el-row :gutter="10">
            <el-col class="col1" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div class="super-center">
                    <img :src="require('@/assets/images/bai2/' + product.thumbnail)" />
                </div>
                <div class="super-center">
                    <el-rate
                        v-model="product.rate"
                        disabled
                        show-score
                        text-color="#5E6366"
                        score-template="Reviews ({value})"
                    >
                    </el-rate>
                </div>
            </el-col>
            <el-col class="col1" :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <div class="product_card-code">
                    {{ product.code }}
                </div>
                <p class="product_card-des">
                    {{ product.description }}
                </p>
                <div class="product_card-price">
                    <span class="product_card-price-before"> ${{ product.price }} </span>
                    <span class="product_card-price-after"> ${{ product.price }} </span>
                </div>

                <div class="product_card-btn-add-to-cart">
                    <img src="@/assets/images/bai2/cart-icon.svg" />
                    <span>Add To Cart</span>
                </div>
            </el-col>
            <el-col class="col1" :xs="24" :sm="24" :md="8" :lg="8" :xl="8"> </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
    props: {
        product: {
            type: Object,
        },
    },
})
export default class ProductCard extends Vue {}
</script>

<style lang="scss">
.product_card {
    & > div {
        height: 330px;
    }
    &-code {
        margin-top: 60px;

        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 18px;
    }

    &-des {
        margin-top: 21px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 19px;
    }

    &-price {
        margin-top: 16px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        line-height: 140%;
        /* or 20px */

        /* display: flex;
align-items: center; */

        /* Color - 10 */
    }

    &-price-after {
        color: #000;
        font-weight: 700;
        font-size: 16px;
    }

    &-price-before {
        text-decoration-line: line-through;
        font-size: 14px;
        color: #666666;
    }

    &-btn-add-to-cart {
        cursor: pointer;
        border: 2px solid #0156ff;
        box-sizing: border-box;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160px;
        padding: 8px 20px;
        position: absolute;
        bottom: 0px;
        span {
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            color: #0156ff;
        }
    }
}
</style>
