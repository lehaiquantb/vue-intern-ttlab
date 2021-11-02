<template>
    <div class="shopping-cart-item">
        <el-row>
            <el-col
                :xs="24"
                :sm="24"
                :md="11"
                :lg="11"
                :xl="11"
                class="shopping-cart-item__col shopping-cart-item__info"
            >
                <div class="super-center col-4 h-100">
                    <img
                        class="img-fluid"
                        :src="
                            require('@/assets/images/bai2/' + cartItem.product.thumbnail)
                        "
                    />
                </div>
                <div class="col-8 h-100">
                    <p>{{ cartItem.product.description }}</p>
                </div>
            </el-col>
            <el-col
                :xs="24"
                :sm="24"
                :md="11"
                :lg="11"
                :xl="11"
                class="shopping-cart-item__col"
            >
                <el-col
                    :xs="8"
                    :sm="8"
                    :md="8"
                    :lg="8"
                    :xl="8"
                    class="shopping-cart-item__col"
                    >{{ $helpers.formatMoney(cartItem.product.price) }}</el-col
                >
                <el-col
                    :xs="8"
                    :sm="8"
                    :md="8"
                    :lg="8"
                    :xl="8"
                    class="shopping-cart-item__col"
                >
                    <input-number
                        :min="1"
                        :max="cartItem.product.quantityInStock"
                        :value="quantity"
                        v-model="quantity"
                    ></input-number>
                </el-col>
                <el-col
                    :xs="8"
                    :sm="8"
                    :md="8"
                    :lg="8"
                    :xl="8"
                    class="shopping-cart-item__col"
                >
                    {{ $helpers.formatMoney(cartItem.product.price * quantity) }}
                </el-col>
            </el-col>
            <el-col
                :xs="24"
                :sm="24"
                :md="2"
                :lg="2"
                :xl="2"
                class="shopping-cart-item__col"
            ></el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputNumber from '@/components/InputNumber.vue';
@Options({
    components: { InputNumber },
    props: {
        cartItem: {
            type: Object,
            default: {
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
                    quantityInStock: 10,
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
        },
    },
})
export default class ShoppingCartItem extends Vue {
    quantity = 1;
}
</script>

<style lang="scss" scoped>
.shopping-cart-item {
    padding: 32px 0px;
    &__col {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: #000000;

        display: flex;
        padding: 0 5px;
    }

    &__info {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #000000;
        p {
            padding-left: 5px;
        }
    }
}
</style>
