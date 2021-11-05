<template>
    <div class="product-detail">
        <div class="product-detail-header">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <div class="product-detail-header-col">
                        <div
                            class="product-detail-header-tab"
                            :class="{
                                'product-detail-header-tab-active':
                                    $route.name === 'About',
                            }"
                        >
                            <router-link :to="{ name: 'About' }"
                                >About Product</router-link
                            >
                        </div>
                        <div
                            class="product-detail-header-tab"
                            :class="{
                                'product-detail-header-tab-active':
                                    $route.name === 'Detail',
                            }"
                        >
                            <router-link :to="{ name: 'Detail' }">Details</router-link>
                        </div>
                        <div
                            class="product-detail-header-tab"
                            :class="{
                                'product-detail-header-tab-active':
                                    $route.name === 'Specs',
                            }"
                        >
                            <router-link :to="{ name: 'Specs' }">Specs</router-link>
                        </div>
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
                        <div class="product-detail-content__left__content">
                            <router-view></router-view>
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
                        <div class="product-detail-content__right__img">
                            <el-carousel indicator-position="outside">
                                <el-carousel-item
                                    v-for="(img, index) in product.imageList"
                                    :key="index"
                                >
                                    <div
                                        class="
                                            product-detail-content__right__img__wrapper
                                            super-center
                                        "
                                    >
                                        <img
                                            class="img-fluid"
                                            :src="
                                                require(`@/assets/images/bai2/${img.url}`)
                                            "
                                            alt=""
                                        />
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                            <div class="product-detail-content__right__img__info">
                                <span>
                                    <img src="@/assets/images/bai2/img-info.png" />
                                </span>
                                <span
                                    class="
                                        product-detail-content__right__img__info__divide
                                    "
                                ></span>
                                <span
                                    >own it now, up to 6 months interest free learn
                                    more</span
                                >
                            </div>
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
        id: '1',
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
        imageList: [
            {
                url: 'p1.png',
                type: 'png',
            },
            {
                url: 'p2.png',
                type: 'png',
            },
            {
                url: 'p3.png',
                type: 'png',
            },
            {
                url: 'p4.png',
                type: 'png',
            },
        ],
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
        /* padding: 20px; */
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
        display: flex;
        width: 100%;
        &__action {
            img {
                height: 30px;
                width: 30px;
                margin: 5px;
            }
            display: flex;
            flex-direction: column;
        }
        &__img {
            width: calc(100% - 30px);
            span {
                margin: 5px;
            }
        }

        &__img__info__divide {
            border: 2px solid #00aeb8;
        }
    }
}
</style>
