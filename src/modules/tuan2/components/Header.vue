<template>
    <div class="product_header">
        <el-row :gutter="20" class="product_header-info">
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <span class="product_header-day">Mon-Thu:&nbsp;</span>
                <span class="product_header-hour">9:00 AM - 5:30 PM</span>
                <span>
                    <img src="@/assets/images/bai2/arrow-down-white.svg" />
                </span>
            </el-col>
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <span class="product_header-intro"
                    >Visit our showroom in 1234 Street Adress City Address, 1234&nbsp;
                </span>
                <span class="product_header-contact">Contact Us</span>
            </el-col>
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <span class="product_header-callus">Call Us: (00) 1234 5678</span>
                <span>
                    <img src="@/assets/images/bai2/fb.svg" />
                </span>
                <span>
                    <img src="@/assets/images/bai2/insta-icon.svg" />
                </span>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="product_header-menu-action">
            <el-col
                class="product_header-col2 product_header-logo"
                :xs="24"
                :sm="24"
                :md="2"
                :lg="2"
                :xl="2"
            >
                <div class="super-center">
                    <img src="@/assets/images/bai2/logo.svg" />
                </div>
            </el-col>
            <el-col
                class="product_header-col2 product_header-menu"
                :xs="24"
                :sm="24"
                :md="18"
                :lg="18"
                :xl="18"
            >
                <div>
                    <el-menu class="" mode="horizontal" :default-active="activeIndex">
                        <el-menu-item index="1" class="super-center"
                            ><span>Laptops</span>
                        </el-menu-item>
                        <el-menu-item index="2" class="super-center"
                            ><span>Desktop PCs</span>
                        </el-menu-item>
                        <el-menu-item index="3" class="super-center"
                            ><span>Networking Devices</span>
                        </el-menu-item>
                        <el-menu-item index="4" class="super-center"
                            ><span>Printers & Scanners</span>
                        </el-menu-item>
                        <el-menu-item index="5" class="super-center"
                            ><span>PC Parts </span>
                        </el-menu-item>
                        <el-menu-item index="6" class="super-center"
                            ><span>All Other Products</span>
                        </el-menu-item>
                        <el-menu-item index="7" class="super-center"
                            ><span>Repairs</span>
                        </el-menu-item>
                        <el-menu-item index="8" class="super-center"
                            ><span>Our Deals</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col
                class="product_header-col2 product_header-action"
                :xs="24"
                :sm="24"
                :md="4"
                :lg="4"
                :xl="4"
            >
                <div>
                    <div class="product_header-action__item">
                        <el-input
                            v-model="searchKeyword"
                            placeholder="Search something"
                            @keydown.enter="onSearch"
                        >
                            <template #prefix>
                                <span class="super-center">
                                    <img src="@/assets/images/bai2/search-icon.svg" />
                                </span>
                            </template>
                        </el-input>
                    </div>
                    <span class="super-center product_header-action__item">
                        <div
                            class="product_header-action__cart__count"
                            v-if="countCartItem > 0"
                        >
                            {{ countCartItem }}
                        </div>
                        <router-link :to="{ name: 'ShoppingCart' }">
                            <img src="@/assets/images/bai2/cart-icon.svg"
                        /></router-link>
                    </span>
                    <span class="super-center product_header-action__item">
                        <img src="@/assets/images/bai2/avatar.png" />
                    </span>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Search } from '@element-plus/icons';
import { productModule } from '../store';
@Options({
    components: { Search },
})
export default class Header extends Vue {
    activeIndex = '1';

    get countCartItem() {
        return productModule.cart.cartItemList.length;
    }

    // handleSelect() {}
    get searchKeyword(): string {
        return productModule.searchKeyword;
    }

    set searchKeyword(keyword: string) {
        productModule.updateSearchKeyword(keyword);
    }

    onSearch() {
        productModule.updateProductListShow();
    }
}
</script>

<style lang="scss">
.product_header {
    &-logo {
        div {
            height: 100%;
        }
    }
    &-action {
        display: flex !important;
        align-items: center;
        height: 92px !important;

        div {
            /* height: 100% !important; */
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        &__item {
            span {
                height: 100%;
                cursor: pointer;
            }
            position: relative;
            margin: 5px;
            height: 100% !important;
        }

        &__cart__count {
            position: absolute;
            right: -3px;
            display: flex;
            justify-content: center !important;
            top: -6px;
            background: red;
            color: #fff;
            width: 15px;
            height: 15px;
            border-radius: 100%;
        }
    }
    &-info {
        &-col {
        }
        height: fit-content;
        background: #020202;
    }
    &-menu {
        display: flex;
        height: fit-content;
        padding: 6px;
        .el-menu {
            height: 100% !important;
        }

        .el-menu-item {
            height: 92px !important;
            padding: 10px;
        }

        .is-active {
            /* border-bottom: none !important; */
            span {
                display: flex;
                align-items: center;
                border: 2px solid #0156ff;
                box-sizing: border-box;
                border-radius: 50px;
                color: #0156ff;
                height: 37px;
                padding: 8px 26px;
            }
        }
    }
    &-col2 {
        padding: 0px;
    }
    &-col {
        min-height: 44px !important;
        display: flex !important;
        align-items: center;
        height: 100%;
        justify-content: center;
    }
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    &-day {
        color: #a2a6b0;
    }

    &-hour {
        color: #fff;
    }
    &-intro {
        color: #a2a6b0;
    }

    &-contact {
        text-decoration: underline;
        color: #fff;
    }

    &-callus {
        color: #fff;
    }

    img {
        margin-left: 5px;
    }
}
</style>
