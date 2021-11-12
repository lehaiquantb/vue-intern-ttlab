<template>
    <div class="shopping-cart">
        <div class="shopping-cart__breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right fs-6">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item>Login</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="shopping-cart__title">
            <h1>Shopping Cart</h1>
        </div>
        <div class="shopping-cart__content">
            <el-row>
                <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16"
                    ><shopping-cart-detail
                        @update-shopping-cart="updateShoppingCart"
                    ></shopping-cart-detail>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8"
                    ><shopping-cart-summary
                        ref="shoppingCartSummary"
                    ></shopping-cart-summary>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ShoppingCartDetail from '../components/ShoppingCart/ShoppingCartDetail.vue';
import ShoppingCartSummary from '../components/ShoppingCart/ShoppingCartSummary.vue';

@Options({
    components: { ShoppingCartDetail, ShoppingCartSummary },
})
export default class ShoppingCart extends Vue {
    updateShoppingCart() {
        (this.$refs.shoppingCartSummary as any).updateShoppingCart();
    }
}
</script>

<style lang="scss" scoped>
.shopping-cart {
    &__breadcrumb {
        margin-top: 20px;
    }
    &__title {
    }
}
</style>
