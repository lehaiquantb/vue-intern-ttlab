<template>
    <div class="product-filter">
        <div>
            <div class="product-filter__title">Filters</div>
            <div class="product-filter__btn-clear">Clear Filter</div>
        </div>
        <div class="pf-cate-price-color pf-wrapper">
            <el-collapse v-model="showFilters">
                <el-collapse-item name="category">
                    <template #title>
                        <span>Category</span>
                        <i class="icon-arrow-up"></i>
                    </template>
                    <div
                        class="pf-wrapper__item pf-wrapper__item__category"
                        v-for="(categoryFilter, index) in filter.category"
                        :key="index"
                        :data-status="categoryFilter.status"
                        @click="handleSelectCategory(categoryFilter)"
                    >
                        <span>{{ categoryFilter.name }}</span>
                        <span>{{ categoryFilter.quantity }}</span>
                    </div>
                </el-collapse-item>

                <el-collapse-item name="price">
                    <template #title>
                        <span>Price</span>
                        <i class="icon-arrow-up"></i>
                    </template>
                    <div
                        class="pf-wrapper__item pf-wrapper__item__price"
                        v-for="(priceFilter, index) in filter.price"
                        :key="index"
                        :data-status="priceFilter.status"
                        @click="handleSelectPrice(priceFilter)"
                    >
                        <span>{{ formatPriceFilter(priceFilter) }}</span>
                        <span>{{ priceFilter.quantity }}</span>
                    </div>
                </el-collapse-item>

                <el-collapse-item name="color">
                    <template #title>
                        <span>Color</span>
                        <i class="icon-arrow-up"></i>
                    </template>
                    <div class="pf-wrapper__item-color">
                        <div
                            v-for="(colorFilter, index) in filter.color"
                            :key="index"
                            class="pf__color-item"
                            :data-status="colorFilter.status"
                            :style="{
                                border:
                                    colorFilter.status === 'pre-active'
                                        ? '2px solid #0156ff'
                                        : 'none',
                            }"
                            @click="handleSelectColor(colorFilter)"
                        >
                            <div
                                :style="{
                                    backgroundColor: colorFilter.hex,
                                }"
                            ></div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="pf__btn__apply">
            <custom-button type="primary" width="100%" @click="handleApplyFilter"
                >Apply Filters
                {{ countApply !== 0 ? `(${countApply})` : '' }}</custom-button
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CustomButton from '@/components/CustomButton.vue';
import { productModule } from '../store';
import { IFilterCategory, IFilterColor, IFilterPrice } from '../types';
@Options({
    components: { CustomButton },
    props: {},
    watch: {
        $route: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                console.log('change');
            },
        },
    },
})
export default class ProductFilter extends Vue {
    $helpers!: Record<string, any>;
    get filter() {
        return productModule.filter;
    }

    formatPriceFilter(priceFilter: IFilterPrice): string {
        if (!isFinite(priceFilter.to)) {
            return `${this.$helpers.formatMoney(priceFilter.from)} And Above`;
        }
        return `${this.$helpers.formatMoney(
            priceFilter.from,
        )} - ${this.$helpers.formatMoney(priceFilter.to)}`;
    }

    countApply = 0;
    showFilters = ['category', 'price', 'color'];
    handleSelectCategory(obj: IFilterCategory) {
        if (obj.status === 'not-active') {
            this.countApply++;
            productModule.updateFilterCategory({ ...obj, status: 'pre-active' });
        }
    }

    handleSelectColor(obj: IFilterColor) {
        if (obj.status === 'not-active') {
            this.countApply++;
            productModule.updateFilterColor({ ...obj, status: 'pre-active' });
        }
    }

    handleSelectPrice(obj: IFilterPrice) {
        if (obj.status === 'not-active') {
            this.countApply++;
            productModule.updateFilterPrice({ ...obj, status: 'pre-active' });
        }
    }

    handleApplyFilter() {
        productModule.updateProductListShow();
        this.countApply = 0;
    }
}
</script>

<style lang="scss">
.product-filter {
    div {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #f5f7ff;
    padding-top: 20px;
    padding-left: 16px;
    padding-right: 7px;
    padding-bottom: 20px;
    &__title {
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        align-items: center;
        text-align: center;
        color: #000000;
        height: 50px;
        justify-content: center;
    }

    &__btn-clear {
        border: 2px solid #a2a6b0;
        box-sizing: border-box;
        border-radius: 50px;

        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        /* identical to box height */

        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;

        /* Color - 5 */
        height: 37px;
        color: #a2a6b0;
    }

    .pf__btn__apply {
        margin-top: 20px;
    }

    .pf-wrapper {
        &__item {
            margin: 4px;
            padding: 0px 2px;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
        }
        background-color: #f5f7ff !important;
        .el-collapse {
            border: none;
        }

        .el-collapse-item.is-active {
            .icon-arrow-up {
                transform: rotate(0deg);
            }
        }

        .el-collapse-item__arrow {
            display: none !important;
        }

        .el-collapse-item__header {
            background-color: #f5f7ff;
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            display: flex;
            align-items: center;
            border: none;
            color: #000000;

            display: flex;
            justify-content: space-between;
        }

        .el-collapse-item__content {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 210%;
            /* or 27px */

            display: flex;
            align-items: center;
            color: #000000;
            background-color: #f5f7ff;
            flex-direction: column;
            padding: 0px;
        }

        .el-collapse-item__wrap {
            border: none;
        }
    }

    .icon-arrow-up {
        transform: rotate(180deg);
        display: inline-block;
        /* content: ' '; */
        background-size: 10px 5px;
        height: 5px;
        width: 10px;
        color: #787885;
        margin-left: 5px;
        background-image: url('~@/assets/images/arrow-up.svg');
    }

    .pf__color-item {
        cursor: pointer;
        border-radius: 20px;
        div {
            border-radius: 20px;
            width: 100%;
            height: 100%;
        }
        padding: 2px;
        height: 23px;
        width: 23px;
        margin: 3px;
    }

    .pf-wrapper__item-color {
        &[data-status='pre-active'] {
        }
        display: flex;
    }

    .pf-wrapper__item__category[data-status='pre-active'] {
        background: #fff;
    }

    .pf-wrapper__item__price[data-status='pre-active'] {
        background: #fff;
    }
}
</style>
