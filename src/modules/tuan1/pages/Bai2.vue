<template>
    <div class="bai1-2">
        <Header2></Header2>
        <el-row :gutter="0">
            <el-col
                class="col2"
                :xs="24"
                :sm="12"
                :md="12"
                :lg="6"
                :xl="6"
                v-for="(card, index) in cardList"
                :key="index"
            >
                <Card2 :card="card"></Card2>
            </el-col>
        </el-row>
        <Footer2></Footer2>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Card2 from '@/modules/tuan1/components/Card2.vue';
import Header2 from '@/modules/tuan1/components/Header2.vue';
import Footer2 from '@/modules/tuan1/components/Footer2.vue';

@Options({
    components: { Card2, Header2, Footer2 },
})
export default class Bai2 extends Vue {
    cardList = [
        {
            image: 'Image-11.png',
            name: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
            price: 49.5,
            sale: 0,
            rate: 4.05,
            description: 'Eligible for Shipping To Mars or somewhere else',
        },
        {
            image: 'Image-10.png',
            name: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
            price: 13.95,
            sale: 0,
            coolDeal: false,
            rate: 4.56,
            description: '1258 bids, 359 watchers $5.95 for shipping',
        },
        {
            image: 'Image-9.png',
            name: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
            price: 128.99,
            sale: 0,
            coolDeal: false,
            rate: 4.87,
            description: 'Eligible for nothing :(',
        },
        {
            image: 'Image-8.png',
            name: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
            price: 12.48,
            sale: 50,
            coolDeal: false,
            rate: 4.99,
            description: 'Wordwide shitting available Buyers protection possible!',
        },
        {
            image: 'Image-7.png',
            name: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
            price: 12.48,
            sale: 0,
            coolDeal: false,
            rate: 4.99,
            description: 'Wordwide shifting available Buyers protection possible!',
        },
        {
            image: 'Image-6.png',
            name: 'Prototyping items to create a lot if useless things...',
            price: 128.99,
            sale: 0,
            coolDeal: false,
            rate: 4.87,
            description: 'Showcasing onHovered state',
        },
        {
            image: 'Image-5.png',
            name: 'John Von Ebalkin SPRING ',
            price: 13.95,
            sale: 0,
            coolDeal: false,
            rate: 4.56,
            description: '1258 bids, 359 watchers $5.95 for shipping',
        },
        {
            image: 'Image-4.png',
            name: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
            price: 9.5,
            sale: 0,
            coolDeal: false,
            rate: 4.77,
            description: 'Eligible for Shipping To Mars or somewhere else',
        },
        {
            image: 'Image-3.png',
            name: 'Professional teadrinking set for every designer and developer',
            price: 128.99,
            sale: 0,
            coolDeal: false,
            rate: 4.87,
            description: 'Eligible for nothing :(',
        },
        {
            image: 'Image-2.png',
            name: 'One string Bonsai description',
            price: 11.68,
            sale: 0,
            coolDeal: false,
            rate: 4.99,
            description: 'Wordwide shifting available Buyers protection possible!',
        },
        {
            image: 'Image-1.png',
            name: 'Simply best item in town to shine bright with your Nine Inch Nails   ',
            price: 1.25,
            sale: 0,
            coolDeal: true,
            rate: 4.77,
            description: 'Eligible for Shipping To Mars or somewhere else',
        },
        {
            image: 'Image.png',
            name: 'KISTOCHKI & KRASIBO. Top cosmetics brand from Chelyabinsk is here!',
            price: 23.25,
            sale: 0,
            coolDeal: false,
            rate: 4.56,
            description: '1258 bids, 359 watchers $5.95 for shipping',
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
