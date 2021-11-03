<template>
    <div class="main-wrapper">
        <el-container class="pl-container">
            <div></div>
            <!-- <el-header class="pl-header">
                <Header></Header>
            </el-header> -->
            <el-main class="pl-main">
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
.pl-header {
    padding: 0px;
    height: fit-content !important;
}

.pl-main {
    padding: 0px 20px;
    width: 100vw;
    /* height: calc(100vh - 30px); */
}

.main-wrapper,
.pl-container {
    height: 100vh;
    width: 100vw;
}
</style>
