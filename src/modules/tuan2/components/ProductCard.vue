<template>
    <div class="product_card" @click="navigateProductDetail">
        <el-row :gutter="10">
            <div class="product_card-stock-status">
                <img src="@/assets/images/bai2/tick-success-icon.svg" />
                <span>in stock</span>
            </div>
        </el-row>
        <el-row :gutter="10">
            <el-col class="col1" :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
                <div class="product_card-wrap">
                    <div class="super-center" style="height: 100%">
                        <img
                            class="img-fluid"
                            :src="require('@/assets/images/bai2/' + product.thumbnail)"
                        />
                    </div>
                    <div class="super-center product_card-rate">
                        <el-rate
                            v-model="product.rate"
                            disabled
                            show-score
                            text-color="#5E6366"
                            score-template="Reviews ({value})"
                        >
                        </el-rate>
                    </div>
                </div>
            </el-col>
            <el-col class="col1" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                <div class="product_card-wrap">
                    <div class="product_card-code">
                        {{ product.code }}
                    </div>
                    <el-row :gutter="10">
                        <el-col class="col1" :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
                            <p class="product_card-des">
                                {{ product.description }}
                            </p>
                        </el-col>
                        <el-col class="col1" :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
                            <table class="table table-striped product_card-detail">
                                <!-- <tr v-for="(value, key, index) in product.detail" :key="index">
                        <td>{{ key }}</td>
                        <td>{{ value }}</td>
                    </tr> -->
                                <tr>
                                    <td>CPU</td>
                                    <td>{{ product.detail.cpu ?? 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td>Featured</td>
                                    <td>{{ product.detail.featured ?? 'N/A' }}</td>
                                </tr>
                                <tr>
                                    <td>I/O Ports</td>
                                    <td>{{ product.detail.ioPort ?? 'N/A' }}</td>
                                </tr>
                            </table>
                        </el-col>
                    </el-row>

                    <div class="product_card-price">
                        <span class="product_card-price-before">
                            ${{ product.price }}
                        </span>
                        <span class="product_card-price-after">
                            ${{ product.price }}
                        </span>
                    </div>

                    <div class="product_card-btn-add-to-cart">
                        <img src="@/assets/images/bai2/cart-icon.svg" />
                        <span>Add To Cart</span>
                    </div>
                </div>
            </el-col>
            <el-col class="col1" :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
                <div class="product_card-more-action">
                    <div>
                        <img src="@/assets/images/bai2/mail-icon.svg" />
                        <img src="@/assets/images/bai2/chart-icon.svg" />
                        <img src="@/assets/images/bai2/heart-icon.svg" />
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IProduct } from '../types';

@Options({
    components: {},
    props: {
        product: {},
    },
})
export default class ProductCard extends Vue {
    product!: IProduct;
    navigateProductDetail() {
        this.$router.push({ name: 'ProductDetail', params: { id: this.product.id } });
    }
}
</script>

<style lang="scss">
.product_card {
    cursor: pointer;
    &:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.14);
    }
    padding: 20px;
    & > div {
        /* height: 330px; */
    }
    &-more-action {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        height: 100%;
        img {
            margin: 3px;
        }
    }
    &-stock-status {
        margin-top: 21px;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 210%;
        /* or 21px */

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: flex-end;
        width: 100%;
        span {
            margin-left: 5px;
        }
        color: #78a962;
    }
    &-rate,
    &-btn-add-to-cart {
        margin-top: 20px;
    }
    &-detail {
        margin-top: 21px;
    }

    &-code {
        height: 60px;
        padding-top: 60px;
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
        /* position: absolute; */
        /* bottom: 0px; */
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

    &-wrap {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        height: 100%;
    }
}
</style>
