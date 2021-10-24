<template>
    <div class="bai1-1">
        <h1 class="title">Inside Open Art</h1>

        <el-row :gutter="20">
            <el-col
                class="col1"
                :xs="24"
                :sm="12"
                :md="12"
                :lg="8"
                :xl="8"
                v-for="(card, index) in cardList"
                :key="index"
            >
                <Card1 :card="card"></Card1>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card1 from '@/modules/tuan1/components/Card1.vue';
@Options({
    components: { Card1 },
})
export default class Bai1 extends Vue {
    cardList = [
        {
            icon: '1.svg',
            name: '4pt grid system',
            description:
                'Base on 4pt grid system. Our UI kit help you create perfect white space',
        },
        {
            icon: '2.svg',
            name: 'Color style',
            description:
                'All color in OpenArt are styled. You can change all design color with one click',
        },
        {
            icon: '3.svg',
            name: 'Color style',
            description:
                'All color in OpenArt are styled. You can change all design color with one click',
        },
        {
            icon: '4.svg',
            name: 'Darkmode avaiable',
            description:
                'Our UI Kit support darkmode Chage your design to dark mode with one click',
        },
        {
            icon: '5.svg',
            name: 'Easy to customize',
            description: 'Create any design with OpenArt UI kits ',
        },
        {
            icon: '6.svg',
            name: 'Variant components',
            description: 'All component art variant, easy to design, easy to control',
        },
    ];
}
</script>

<style lang="scss" scoped>
.bai1-1 {
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, #8bb5ff 0%, #e1fbff 100%);

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

    .col1 {
        padding: 10px;
    }
}
</style>