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
                            <div class="pl-count">{{ showTextPagination() }}</div>
                        </el-col>

                        <el-col class="col1" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                            <div class="pl_action-wrapper">
                                <div class="pl_action-sort">
                                    <dropdown
                                        style="font-size: 13px"
                                        :actions="DEFAULT_SORT_OPTION_LIST"
                                        :prefix="'Sort'"
                                        :selected-action="selectedActionSort"
                                        v-model:selectedAction="selectedActionSort"
                                    ></dropdown>
                                </div>
                                <div class="pl_action-perpage">
                                    <dropdown
                                        style="font-size: 13px"
                                        :prefix="'Show'"
                                        :actions="DEFAULT_SHOW_OPTION_LIST"
                                        :selected-action="selectedActionShow"
                                        v-model:selectedAction="selectedActionShow"
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
                                    v-for="(filterTag, index) in filterTagList"
                                    :key="index"
                                    :type="filterTag.type"
                                    :title="filterTag.title"
                                    :color="filterTag.color"
                                    :quantity="filterTag.quantity"
                                    @on-close="onClose(filterTag)"
                                ></filter-tag>
                                <div class="btn-clear-all" @click="onClearAllFilter">
                                    Clear all
                                </div>
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

                    <div class="super-center pagination-wrap">
                        <el-pagination
                            :pageSize="pagination.pageSize"
                            :currentPage="pagination.currentPage"
                            @size-change="changePageSize"
                            @current-change="changeCurrentPage"
                            :pager-count="10"
                            layout="prev, pager, next, slot"
                            :total="pagination.total"
                        >
                        </el-pagination>
                    </div>
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
import { IActionDropdown, IFilterPrice, IProduct } from '../types';
import { DEFAULT_SHOW_OPTION_LIST, DEFAULT_SORT_OPTION_LIST } from '../contants';

@Options({
    components: { ProductCard, ProductFilter, Dropdown, FilterTag },
})
export default class ProductList extends Vue {
    DEFAULT_SORT_OPTION_LIST = DEFAULT_SORT_OPTION_LIST;
    DEFAULT_SHOW_OPTION_LIST = DEFAULT_SHOW_OPTION_LIST;

    $helpers!: Record<string, any>;
    get selectedActionSort(): IActionDropdown {
        return productModule.selectedAction.sort;
    }

    set selectedActionSort(v: IActionDropdown) {
        productModule.updateSelectedAction({ changeObject: v, key: 'sort' });
    }

    get selectedActionShow(): IActionDropdown {
        return productModule.selectedAction.show;
    }

    set selectedActionShow(v: IActionDropdown) {
        productModule.updateSelectedAction({ changeObject: v, key: 'show' });
    }

    get productListShow(): Array<IProduct> {
        return productModule.productListShow;
    }

    get pagination() {
        return productModule.pagination;
    }

    showTextPagination(): string {
        const from = this.pagination.pageSize * (this.pagination.currentPage - 1) + 1;
        const to = from - 1 + this.pagination.pageSize;
        return `Items ${this.pagination.total === 0 ? 0 : from}-${
            to > this.pagination.total ? this.pagination.total : to
        } of ${this.pagination.total}`;
    }

    created() {
        productModule.updateProductListShow();
    }

    changePageSize(pageSize: number) {
        productModule.updatePagination({ pageSize });
    }

    changeCurrentPage(currentPage: number) {
        productModule.updatePagination({ currentPage });
    }

    formatPriceFilter(priceFilter: IFilterPrice): string {
        if (!isFinite(priceFilter.to)) {
            return `${this.$helpers.formatMoney(priceFilter.from)} And Above`;
        }
        return `${this.$helpers.formatMoney(
            priceFilter.from,
        )} - ${this.$helpers.formatMoney(priceFilter.to)}`;
    }

    get filterTagList(): Array<any> {
        const tempFilterTagList = [];
        const tempColorList = productModule.filter.color
            .filter((item) => item.status === 'active')
            .map((item) => ({
                color: item.hex,
                type: 'color',
                id: item.id,
                typeFilter: 'color',
            }));
        tempFilterTagList.push(...tempColorList);

        const tempCateList = productModule.filter.category
            .filter((item) => item.status === 'active')
            .map((item) => ({
                title: item.name,
                quantity: item.quantity,
                type: 'text',
                id: item.id,
                typeFilter: 'category',
            }));
        tempFilterTagList.push(...tempCateList);

        const tempPriceList = productModule.filter.price
            .filter((item) => item.status === 'active')
            .map((item) => ({
                id: item.id,
                title: this.formatPriceFilter(item),
                quantity: item.quantity,
                type: 'text',
                typeFilter: 'price',
            }));
        tempFilterTagList.push(...tempPriceList);

        return tempFilterTagList;
    }

    onClose(filterTag: { id: number | string; typeFilter: string }) {
        switch (filterTag.typeFilter) {
            case 'category':
                productModule.updateFilterCategory({
                    id: filterTag.id,
                    status: 'not-active',
                });
                break;
            case 'color':
                productModule.updateFilterColor({
                    id: filterTag.id,
                    status: 'not-active',
                });
                break;
            case 'price':
                productModule.updateFilterPrice({
                    id: filterTag.id,
                    status: 'not-active',
                });
                break;
            default:
                break;
        }
        productModule.updateProductListShow();
    }

    onClearAllFilter() {
        productModule.clearAllFilter();
        productModule.updateProductListShow();
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
        cursor: pointer;
        display: flex;
        align-items: center;

        color: #000000;
    }

    .pagination-wrap {
        margin-top: 20px;
        .number {
            border-radius: 50px;
            min-width: 30px;
            margin: 0px 2px;
            border: 2px solid #a2a6b0;
            color: #a2a6b0;
            box-sizing: border-box;
            vertical-align: unset;
        }

        .number.active {
            background: #f5f7ff;
            color: #000;
            border: none;
        }
    }
}
</style>
