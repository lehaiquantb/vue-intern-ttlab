<template>
    <div class="product-list">
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
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
                    <product-filter :productFilter="productFilter"></product-filter>
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
                            v-for="(product, index) in productList"
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
@Options({
    components: { ProductCard, ProductFilter, Dropdown, FilterTag },
})
export default class ProductList extends Vue {
    _productList = [
        {
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
        },
    ];

    _category = [
        {
            id: 1,
            name: 'CUSTOM PCS',
            quantity: 10,
        },
        {
            id: 2,
            name: 'MSI ALL-IN-ONE PCS',
            quantity: 10,
        },
        {
            id: 3,
            name: 'HP/COMPAQ PCS',
            quantity: 10,
        },
    ];

    get productList() {
        return this._productList;
    }

    set productList(p) {
        this._productList = p;
    }

    get productFilter() {
        const pF = [
            {
                from: 0,
                to: 1000,
                quantity: 19,
                active: false,
            },
            {
                from: 1000,
                to: 2000,
                quantity: 21,
                active: false,
            },
        ];
        return {
            color: [
                {
                    color: 'blue',
                    active: false,
                },
                {
                    color: 'red',
                    active: true,
                },
            ],
            price: pF,
            category: [
                {
                    id: 1,
                    name: 'CUSTOM PCS',
                    quantity: 10,
                    active: false,
                },
                {
                    id: 2,
                    name: 'MSI ALL-IN-ONE PCS',
                    quantity: 10,
                    active: false,
                },
                {
                    id: 3,
                    name: 'HP/COMPAQ PCS',
                    quantity: 10,
                    active: false,
                },
            ],
        };
    }
}
</script>

<style lang="scss">
.product-list {
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
