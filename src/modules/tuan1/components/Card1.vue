<template>
    <div class="card1">
        <div class="card1_icon">
            <img :src="require('@/assets/images/bai1/' + card.icon)" />
        </div>
        <div class="card1_name">
            {{ card.name }}
        </div>
        <p class="card1_des">
            {{ card.description }}
        </p>
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
.card1 {
    background-color: #fff;
    border-radius: 16px;
    height: 197.87px;
    padding: 20px;
    &_icon {
        margin-bottom: 10px;
        height: 24px;
    }
    &_name {
        margin-bottom: 10px;
        font-size: 24px;
    }
    &_des {
        font-size: 16px;
    }
}
</style>