<template>
    <div class="main-wrapper">
        <el-container class="as-container">
            <el-header class="as-header">
                <header></header>
            </el-header>
            <el-main class="as-main">
                <router-view v-slot="{ Component }">
                    <transition name="fade-transform" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/modules/tuan2/components/Header.vue';
import Dropdown from '@/components/Dropdown.vue';

@Options({
    components: { Dropdown, Header },
})
export default class ProductLayout extends Vue {}
</script>

<style lang="scss" scoped>
.as-header {
    border-bottom: 1px solid #000;
    height: 30px;
}

.as-main {
    padding: 0px;
    width: 100vw;
    /* height: calc(100vh - 30px); */
}

.main-wrapper,
.as-container {
    height: 100vh;
    width: 100vw;
}
</style>
