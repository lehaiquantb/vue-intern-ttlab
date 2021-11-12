<template>
    <div class="shopping-cart-item" v-if="cartItem.quantity > 0">
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
                            require('@/assets/images/bai2/' + productCartItem.thumbnail)
                        "
                    />
                </div>
                <div class="col-8 h-100">
                    <p>{{ productCartItem.description }}</p>
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
                    >{{ $helpers.formatMoney(productCartItem.price) }}</el-col
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
                        :max="productCartItem.quantityInStock"
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
                    {{ $helpers.formatMoney(productCartItem.price * quantity) }}
                </el-col>
            </el-col>
            <el-col
                :xs="24"
                :sm="24"
                :md="2"
                :lg="2"
                :xl="2"
                class="shopping-cart-item__col shopping-cart-item__action"
            >
                <div @click="deleteCartItem">
                    <img src="@/assets/images/bai2/btn-delete-icon.svg" />
                </div>
                <div>
                    <img src="@/assets/images/bai2/btn-edit-icon.svg" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import InputNumber from '@/components/InputNumber.vue';
import { productModule } from '../../store';
import { ICartItem, IProduct } from '../../types';
import { confirm } from '@/utils/util';
@Options({
    components: { InputNumber },
    props: {
        cartItem: {
            type: Object,
            default: {
                productId: 1,
                quantity: 1,
            },
        },
    },
})
export default class ShoppingCartItem extends Vue {
    cartItem!: ICartItem;
    get quantity() {
        return this.cartItem.quantity;
    }

    set quantity(q: number) {
        productModule.updateCartItem({ productId: this.cartItem.productId, quantity: q });
    }

    get productCartItem(): IProduct | undefined {
        return productModule.projectDetailById(this.cartItem.productId);
    }

    deleteCartItem() {
        confirm({
            message: 'Bạn có chắc muốn xóa sản phẩm này trong giỏ hàng',
            handleOk: () => {
                productModule.updateCartItem({
                    productId: this.cartItem.productId,
                    quantity: 0,
                });
            },
        });
    }

    // created(){
    //     this.cartItem
    // }
}
</script>

<style lang="scss" scoped>
.shopping-cart-item {
    padding: 32px 0px;
    border-bottom: 1px solid #cacdd8;
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

    &__action {
        flex-direction: column;
        align-items: flex-end;
        div {
            cursor: pointer;
            margin: 5px;
        }
    }
}
</style>
