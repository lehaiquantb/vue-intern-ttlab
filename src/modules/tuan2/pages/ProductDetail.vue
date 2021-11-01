<template>
    <div class="product-detail">
        <div class="product-detail-header">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="product-detail-header-col">
                        <div class="product-detail-header-tab">About Product</div>
                        <div
                            class="
                                product-detail-header-tab product-detail-header-tab-active
                            "
                        >
                            Details
                        </div>
                        <div class="product-detail-header-tab">Specs</div>
                    </div>
                </el-col>
                <el-col
                    class="product-detail-header-col"
                    :xs="24"
                    :sm="24"
                    :md="12"
                    :lg="12"
                    :xl="12"
                >
                    <div class="product-detail-header-col product-detail-header-action">
                        <div class="super-center">
                            <span
                                >On Sale from
                                <b>{{ $helpers.formatMoney(product.price) }}</b></span
                            >
                        </div>
                        <div class="super-center">
                            <!-- <input type="number" /> -->
                            <input-number
                                :min="0"
                                :max="100"
                                :value="quantitySale"
                                v-model="quantitySale"
                            />
                        </div>
                        <div class="super-center">
                            <div class="product-detail-btn-add-to-cart">Add To Cart</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="product-detail-content">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="product-detail-content__left">
                        <div class="product-detail-content__left__links">
                            <el-breadcrumb separator-class="el-icon-arrow-right fs-6">
                                <el-breadcrumb-item :to="{ path: '/' }"
                                    >Home</el-breadcrumb-item
                                >
                                <el-breadcrumb-item>Laptops</el-breadcrumb-item>
                                <el-breadcrumb-item>MSI ALien warer</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                        <div class="product-detail-content__left__header">
                            <h2>{{ product.name }}</h2>
                            <router-link to="#" class="rt-custom-color"
                                >Be the first to review this product</router-link
                            >
                        </div>
                        <div class="product-detail-content__left__footer">
                            <div>
                                <span
                                    ><b>Have a Question?&nbsp;</b>
                                    <router-link
                                        to="#"
                                        class="rt-custom-text-deco rt-custom-color"
                                        >Contact Us</router-link
                                    ></span
                                >
                                <span>{{ product.code }}</span>
                            </div>

                            <span>+ More information</span>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="product-detail-content__right">
                        <div class="product-detail-content__right__action">
                            <img src="@/assets/images/bai2/mail-icon.svg" />
                            <img src="@/assets/images/bai2/chart-icon.svg" />
                            <img src="@/assets/images/bai2/heart-icon.svg" />
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputNumber from '@/components/InputNumber.vue';
@Options({
    components: { InputNumber },
})
export default class ProductDetail extends Vue {
    quantitySale = 1;

    product = {
        name: 'MSI MPG Trident 3',
        thumbnail: 'p1.png',
        code: 'SKU D5515AI',
        description:
            'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
        detail: {
            cpu: null,
            featured: null,
            ioPort: null,
            GPU: 'a',
        },
        price: '499',
        rate: 4,
    };
}
</script>

<style lang="scss" scoped>
.product-detail {
    &-header {
        & > div {
            height: 100%;
        }
        height: 101px;
        &-col {
            height: 100%;
            display: flex;
            align-items: center;
        }

        &-tab {
            margin: 5px;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            /* identical to box height */

            /* Color - 10 */
            height: 21px !important;
            color: #666666;
            &-active {
                color: #000000;
                border-bottom: 2px solid #0156ff;
            }
        }
    }

    &-header-action {
        & > div {
            margin: 5px;
        }
    }

    &-btn-add-to-cart {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #ffffff;
        background: #0156ff;
        border-radius: 50px;
        cursor: pointer;
        height: 50px;
        padding: 0 10px;
    }
}

.product-detail-content {
    &__left {
        padding: 20px;
        &__header {
        }

        &__footer {
            div {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            & > span {
                font-family: Poppins;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 21px;
                /* identical to box height */
                font-weight: 400;
                color: #000000;
            }
        }
    }
    &__right {
        padding: 20px;
        &__action {
            display: flex;
            flex-direction: column;
        }
        img {
            height: 30px;
            width: 30px;
            margin: 5px;
        }
    }
}
</style>
