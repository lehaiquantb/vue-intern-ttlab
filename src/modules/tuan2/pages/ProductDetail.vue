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
                    <div class="product-detail-header-col">
                        <div class="super-center">
                            <span
                                >On Sale from
                                <b>{{ $helpers.formatMoney(product.price) }}</b></span
                            >
                        </div>
                        <div class="super-center"></div>
                        <div class="super-center">
                            <div class="product-detail-btn-add-to-cart">Add To Cart</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class ProductDetail extends Vue {
    product = {
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

<style lang="scss">
.product-detail {
    &-header {
        div {
            height: 100%;
        }
        height: 101px;
        &-col {
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
    }
}
</style>
