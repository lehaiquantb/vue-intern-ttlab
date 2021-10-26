<template>
    <div class="card2">
        <div class="card2_image super-center">
            <img :src="require('@/assets/images/bai2/' + card.image)" />
        </div>
        <div class="card2_name">
            {{ card.name }}
        </div>
        <div class="card2_price_sale">
            <div class="card2_price">${{ card.price.toFixed(2) }}</div>
            <div class="card2_cool_deal_sale card2_cool_deal" v-if="card.coolDeal">
                <span class="card2_cool_deal_text">Cool deal!</span>
            </div>
            <div class="card2_cool_deal_sale card2_sale" v-else-if="card.sale > 0">
                <span class="card2_sale_text">{{ `${card.sale}% OFF` }}</span>
            </div>
        </div>
        <p class="card2_des">
            {{ card.description }}
        </p>
        <div class="card2_rate_watch">
            <div class="card2_rate">
                <el-rate v-model="card.rate" disabled show-score text-color="#5E6366">
                </el-rate>
            </div>
            <div class="card2_watch">
                <img :src="require('@/assets/images/bai2/heart.svg')" />
                <span>Watch</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
    props: {
        card: {
            type: Object,
        },
    },
})
export default class Card1 extends Vue {}
</script>

<style lang="scss" scoped>
.card2 {
    background-color: #fff;
    border-radius: 16px;
    /* height: 197.87px; */
    padding: 16px;
    &_image img {
        height: auto;
        max-width: 100%;
        margin: auto;
    }
    &_name {
        //styleName: Inter / Body Default;
        font-family: Inter;
        font-size: 16px;

        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.0275em;
        text-align: left;

        height: 74px;
    }
    &_price_sale {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &_price {
        //styleName: Inter / 24 sp • H5;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
    }
    &_cool_deal_sale {
        padding: 4px 10px;
        border-radius: 4px;
        span {
            /* Roboto / Caption */
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            /* identical to box height, or 133% */
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.4px;
            /* Green / 70 */
        }
        &.card2_cool_deal {
            background: #fdedf2;
            span {
                color: #c23564;
            }
        }
        &.card2_sale {
            background: #ecf7ed;
            span {
                color: #37833b;
            }
        }
    }
    &_des {
        //styleName: Inter / Body Small;
        margin-top: 16px;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0.018em;
        text-align: left;

        height: 41px;
    }
    &_rate_watch {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 16px;
    }
    &_rate {
        //styleName: Roboto / Subtitle 2;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.10000000149011612px;
    }
    &_watch {
        padding: 4px 12px;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.018em;
        text-align: right;
        color: #2264d1;
        border: 1px solid #9dc2ff;
        border-radius: 4px;
        span {
            margin-left: 10px;
        }
    }
}
</style>
