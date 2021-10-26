<template>
    <div class="header2">
        <el-row :gutter="20">
            <el-col class="header2-col" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-dropdown
                    class="header-2_dropdown dropdown-title dropdown-active"
                    style="
                        border: 1px solid #5a5b6a;
                        box-sizing: border-box;
                        border-radius: 4px;
                        padding: 9px 10px;
                        display: flex;
                        align-items: center;
                        width: fit-content;
                        height: 36px;
                        margin-left: 10px;
                    "
                >
                    <span class="header-2_dropdown_title">Useless first</span>
                    <span class="icon-arrow-down"></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <el-dropdown
                    class="header2_dropdown dropdown-title"
                    style="
                        border: 1px solid #5a5b6a;
                        box-sizing: border-box;
                        border-radius: 4px;
                        padding: 9px 10px;
                        display: flex;
                        align-items: center;
                        width: fit-content;
                        height: 36px;
                        margin-left: 10px;
                    "
                >
                    <span class="header-2_dropdown_title">Condition</span>
                    <span class="icon-arrow-down"></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>

                <el-dropdown
                    class="header-2_dropdown dropdown-title"
                    style="
                        border: 1px solid #5a5b6a;
                        box-sizing: border-box;
                        border-radius: 4px;
                        padding: 9px 10px;
                        display: flex;
                        align-items: center;
                        width: fit-content;
                        height: 36px;
                        margin-left: 10px;
                    "
                >
                    <span class="header-2_dropdown_title">Delivery options</span>
                    <span class="icon-arrow-down"></span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>

            <el-col class="header2-col" :xs="24" :sm="24" :md="12" :lg="10" :xl="10">
                <div class="action-item">Show all</div>
                <div class="action-item action-item-active">Buy now</div>
                <div class="action-item">Action</div>
            </el-col>

            <el-col class="header2-col" :xs="24" :sm="24" :md="12" :lg="2" :xl="2">
                <div class="action-item">
                    <img :src="require('@/assets/images/bai2/Vector-3.svg')" />
                </div>
                <div class="action-item action-item-active">
                    <img :src="require('@/assets/images/bai2/Vector-4.svg')" />
                </div>
            </el-col>
        </el-row>
        <div class="header2-filter">
            <div class="header2-filter-item header2-filter-item-active">Related</div>
            <div class="header2-filter-item">worldwide shipping</div>
            <div class="header2-filter-item">under $50</div>
            <div class="header2-filter-item">kitten</div>
            <div class="header2-filter-item">plastic plugs</div>
            <div class="header2-filter-item">pucker shoes</div>
            <div class="header2-filter-item">vintage typewriter</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Header2 extends Vue {}
</script>

<style lang="scss" scoped>
.icon-arrow-down {
    display: inline-block;
    /* content: ' '; */
    background-size: 10px 5px;
    height: 5px;
    width: 10px;
    color: #787885;
    margin-left: 5px;
    background-image: url('~@/assets/images/arrow-down.svg');
}

.header2-dropdown {
    border: 1px solid #5a5b6a;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 9px 10px;
    display: flex;
    align-items: center;
    /* .el-dropdown {
            display: flex;
            align-items: center;
        } */
    &_title {
    }
}
.dropdown-title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    /* or 20px */
    color: #787885;
    letter-spacing: 0.018em;
}

.dropdown-active {
    color: #19191d;
}

.header2-col {
    display: flex !important;
    padding: 10px;
}

.header2-filter {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .header2-filter-item {
        padding: 6px 12px;
        background: #ededf0;
        border-radius: 99px;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 143%;
        /* or 20px */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.018em;

        /* Gray / 70 */

        color: #4a4b57;
        margin: 10px;
    }
    .header2-filter-item-active {
        background: #fff !important;
        color: #19191d !important;
    }
}

.action-item {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
    /* or 20px */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.018em;
    color: #5a5b6a;
    padding: 0 10px;
    height: 36px;
    /* Blue / 5 */

    background: #ebf2ff;
    border-radius: 4px;
}

.action-item-active {
    color: #2264d1;
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(27, 78, 163, 0.24), 0px 2px 4px rgba(41, 121, 255, 0.24);
}
</style>
