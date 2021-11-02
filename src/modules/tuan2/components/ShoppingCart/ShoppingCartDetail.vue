<template>
    <div class="shopping-cart-detail">
        <div class="shopping-cart-detail__header">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="11"
                    :lg="11"
                    :xl="11"
                    class="shopping-cart-detail__col"
                >
                    Item</el-col
                >
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="11"
                    :lg="11"
                    :xl="11"
                    class="shopping-cart-detail__col"
                >
                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="8"
                            :md="8"
                            :lg="8"
                            :xl="8"
                            class="shopping-cart-detail__col"
                            >Price</el-col
                        >
                        <el-col
                            :xs="8"
                            :sm="8"
                            :md="8"
                            :lg="8"
                            :xl="8"
                            class="shopping-cart-detail__col"
                            >Qty</el-col
                        >
                        <el-col
                            :xs="8"
                            :sm="8"
                            :md="8"
                            :lg="8"
                            :xl="8"
                            class="shopping-cart-detail__col"
                            >Subtotal</el-col
                        >
                    </el-row>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="2"
                    :lg="2"
                    :xl="2"
                    class="shopping-cart-detail__col"
                ></el-col>
            </el-row>
        </div>
        <shopping-cart-item
            v-for="(item, index) in cartList"
            :key="index"
            :cartItem="item"
        ></shopping-cart-item>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ShoppingCartItem from './ShoppingCartItem.vue';
@Options({
    components: { ShoppingCartItem },
})
export default class ShoppingCartDetail extends Vue {
    cartList = [
        {
            product: {
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
            },
            quantity: 1,
        },
    ];
}
</script>

<style lang="scss" scoped>
.shopping-cart-detail {
    &__col {
        padding: 0 5px;
    }
    &__header {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: #000000;
    }
}
</style>
