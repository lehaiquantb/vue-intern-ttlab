<template>
    <div class="bai1-2">

        <el-row :gutter="0">
            <el-col
                class="col2"
                :xs="24"
                :sm="12"
                :md="8"
                :lg="6"
                :xl="6"
                v-for="(card, index) in cardList"
                :key="index"
            >
                <Card2 :card="card"></Card2>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card2 from '@/modules/tuan1/components/Card2.vue';
@Options({
    components: { Card2 },
})
export default class Bai2 extends Vue {
    cardList = [
        {
            image: 'Image-11.png',
            name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
            price: 49.5,
            sales: 0,
            rate: 4.05,
            description: 'Eligible for Shipping To Mars or somewhere else',
        },
        {
            image: 'Image-11.png',
            name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
            price: 49.5,
            sales: 0,
            rate: 4.05,
            description: 'Eligible for Shipping To Mars or somewhere else',
        },
    ];
}
</script>

<style lang="scss" scoped>
.bai1-2 {
    height: 100%;
    width: 100%;

    /* background-image: linear-gradient(#0094ff, #8bb5ff, #e1fbff, #ff90ea, #ffdeda); */
    padding: 20px;
    color: #000;
    .title {
        margin-bottom: 30px;
        color: #000;
        font-weight: 700;
        font-size: 56px;
        align-content: center;
        font-family: Inter, sans-serif;
        text-align: center;
    }

    .col2 {
    }
}
</style>