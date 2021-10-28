<template>
    <div class="product_header">
        <el-row :gutter="20">
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            </el-col>
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            </el-col>
            <el-col class="product_header-col" :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.product_header {
}
</style>
