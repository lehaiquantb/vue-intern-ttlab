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
            v-for="(item, index) in cartItemList"
            :key="index"
            :cartItem="item"
        ></shopping-cart-item>
        <div class="shopping-cart-detail__action">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="11"
                    :lg="11"
                    :xl="11"
                    class="shopping-cart-detail__col shopping-cart-detail__action__left"
                >
                    <custom-button type="fourth" @click="continueShopping"
                        >Continue Shopping</custom-button
                    >
                    <custom-button type="third" @click="clearShoppingCart"
                        >Clear Shopping Cart</custom-button
                    >
                </el-col>
                <el-col
                    :xs="24"
                    :sm="24"
                    :md="13"
                    :lg="13"
                    :xl="13"
                    class="shopping-cart-detail__col shopping-cart-detail__action__right"
                >
                    <custom-button type="third">Update Shopping Cart</custom-button>
                </el-col></el-row
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ShoppingCartItem from './ShoppingCartItem.vue';
import CustomButton from '@/components/CustomButton.vue';
import { ICartItem } from '../../types';
import { productModule } from '../../store';
import { confirm } from '@/utils/util';
@Options({
    components: { ShoppingCartItem, CustomButton },
})
export default class ShoppingCartDetail extends Vue {
    get cartItemList(): Array<ICartItem> {
        return productModule.cart.cartItemList;
    }

    continueShopping() {
        this.$router.push({ name: 'ProductList' });
    }

    clearShoppingCart() {
        debugger;
        confirm({
            message: 'Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng',
            handleOk: () => {
                productModule.clearCartItem();
            },
        });
    }
}
</script>

<style lang="scss" scoped>
.shopping-cart-detail {
    &__col {
        & > div {
            margin: 5px;
        }
        padding: 0 5px;
    }
    &__header {
        padding: 10px 0px;
        border-bottom: 1px solid #cacdd8;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        color: #000000;
    }

    &__action {
        margin-top: 20px;
        &__left {
            display: flex;
        }
        &__right {
            justify-content: flex-end;
            display: flex;
        }
    }
}
</style>
