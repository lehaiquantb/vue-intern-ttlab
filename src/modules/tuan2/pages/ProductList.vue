<template>
    <div class="product-list">
        <div class="product-list__banner">
            <img class="img-fluid" src="@/assets/images/bai2/banner.png" />
        </div>
        <div class="product-list__links">
            <el-breadcrumb separator-class="el-icon-arrow-right fs-6">
                <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <h1>MSI PS Series (20)</h1>
        </div>
        <div>
            <el-row :gutter="10" style="margin: 0px">
                <el-col class="col1" :xs="24" :sm="8" :md="8" :lg="4" :xl="4">
                    <product-filter></product-filter>
                </el-col>
                <el-col class="col1" :xs="24" :sm="16" :md="16" :lg="20" :xl="20">
                    <el-row :gutter="10">
                        <el-col class="col1" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="pl-count">Items 1-35 of 61</div>
                        </el-col>

                        <el-col class="col1" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="pl_action-wrapper">
                                <div class="pl_action-sort">
                                    <dropdown
                                        style="font-size: 13px"
                                        :title="'Position'"
                                        :actions="['a', 'b']"
                                        :prefix="'Sort'"
                                    ></dropdown>
                                </div>
                                <div class="pl_action-perpage">
                                    <dropdown
                                        style="font-size: 13px"
                                        :title="'35 per page'"
                                        :prefix="'Show'"
                                    ></dropdown>
                                </div>
                                <div class="pl_action-list-icon">
                                    <img src="@/assets/images/bai2/icon-list.svg" />
                                </div>
                                <div class="pl_action-sort-icon">
                                    <img src="@/assets/images/bai2/icon-sort.svg" />
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10">
                        <el-col class="col1" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                            <div class="filter-tag-container">
                                <filter-tag
                                    :title="'CUSTOM PCS'"
                                    :quantity="24"
                                ></filter-tag>
                                <div class="btn-clear-all">Clear all</div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row :gutter="10">
                        <el-col
                            class="col1"
                            :xs="24"
                            :sm="24"
                            :md="24"
                            :lg="24"
                            :xl="24"
                            v-for="(product, index) in productListShow"
                            :key="index"
                        >
                            <product-card :product="product"></product-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProductCard from '@/modules/tuan2/components/ProductCard.vue';
import ProductFilter from '@/modules/tuan2/components/ProductFilter.vue';
import Dropdown from '@/components/Dropdown.vue';
import FilterTag from '@/components/FilterTag.vue';
import { productModule } from '../store';
import { IProduct } from '../types';
@Options({
    components: { ProductCard, ProductFilter, Dropdown, FilterTag },
})
export default class ProductList extends Vue {
    get productListShow(): Array<IProduct> {
        return productModule.productListShow;
    }
}
</script>

<style lang="scss">
.product-list {
    &__banner {
    }

    &__links {
        margin-top: 10px;
    }
    .pl-count {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */
        height: 100%;
        display: flex;
        align-items: center;

        /* Color - 5 */

        color: #a2a6b0;
    }

    .dropdown-title {
        border: 2px solid #cacdd8;
    }

    .pl_action-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .filter-tag-container {
        & > div {
            margin: 5px;
        }
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
    }

    .btn-clear-all {
        background: #ffffff;
        /* Color - 6 */
        padding: 5px 10px;
        border: 1px solid #cacdd8;
        box-sizing: border-box;
        border-radius: 2px;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 210%;
        /* or 27px */

        display: flex;
        align-items: center;

        color: #000000;
    }
}
</style>
