<template>
    <div class="footer2">
        <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="footer2_item_wrapper super-center">
                    <div class="footer2_item_icon">
                        <img :src="require('@/assets/images/bai2/Vector.svg')" />
                    </div>
                    <div class="footer2_item_title">Clear & Usable user flows</div>
                    <div class="footer2_item_des">Let’s boost yout marketplace</div>
                </div>
            </el-col>

            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="footer2_item_wrapper super-center">
                    <div class="footer2_item_icon">
                        <img :src="require('@/assets/images/bai2/Vector-1.svg')" />
                    </div>
                    <div class="footer2_item_title">Clear & Usable user flows</div>
                    <div class="footer2_item_des">Let’s boost yout marketplace</div>
                </div>
            </el-col>

            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <div class="footer2_item_wrapper super-center">
                    <div class="footer2_item_icon">
                        <img :src="require('@/assets/images/bai2/Vector-2.svg')" />
                    </div>
                    <div class="footer2_item_title">Clear & Usable user flows</div>
                    <div class="footer2_item_des">Let’s boost yout marketplace</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Footer2 extends Vue {}
</script>

<style lang="scss" scoped>
.footer2 {
    margin-top: 30px;
    &_item_wrapper {
        min-height: 136px;
        background: #ededf0;
        border-radius: 8px;
        padding: 20px;
    }
    &_item_icon {
    }
    &_item_title {
        font-family: Quicksand;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;
        /* or 30px */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.0075em;

        /* Dark Color */

        color: rgba(0, 0, 0, 0.87);
    }
    &_item_des {
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

        /* Gray / 60 */

        color: #5a5b6a;
    }
}
</style>
