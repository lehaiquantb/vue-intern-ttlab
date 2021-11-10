<template>
    <div class="product-detail-about">
        <div class="product-detail-about__des">
            <p>
                {{ product.description }}
            </p>
        </div>
        <div class="product-detail-about__color__wrap">
            <div
                @click="selectedColor = color"
                class="product-detail-about__color__inner"
                v-for="(color, index) in product.colorList"
                :class="{
                    'product-detail-about__color__inner__selected':
                        color.hex === selectedColor.hex,
                }"
                :key="index"
            >
                <div :style="{ backgroundColor: color.hex }"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class About extends Vue {
    selectedColor = { hex: 'blue' };

    product = {
        id: '1',
        name: 'MSI MPG Trident 3',
        thumbnail: 'p1.png',
        code: 'SKU D5515AI',
        description:
            'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
        detail: {
            cpu: null,
            featured: null,
            ioPort: null,
        },
        imageList: [
            {
                url: 'p1.png',
                type: 'png',
            },
            {
                url: 'p2.png',
                type: 'png',
            },
            {
                url: 'p3.png',
                type: 'png',
            },
            {
                url: 'p4.png',
                type: 'png',
            },
        ],
        price: '499',
        rate: 4,
        colorList: [
            {
                hex: '#4B4D4F',
            },
            {
                hex: 'blue',
            },
        ],
    };
}
</script>

<style lang="scss" scoped>
.product-detail-about {
    &__des {
        p {
            font-family: Poppins;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 30px;
            /* or 167% */

            display: flex;
            align-items: center;

            color: #000000;
        }
    }
    &__color__wrap {
        display: flex;
        flex-wrap: wrap;
        & > div {
            margin: 5px;
        }
    }
    &__color__inner {
        padding: 2px;
        border-radius: 50%;
        opacity: 0.5;
        width: 37px;
        height: 37px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
        div {
            border-radius: 50%;
            height: 100%;
            width: 100%;
        }
    }

    &__color__inner__selected {
        border: 2px solid #0156ff;
        opacity: 1;
    }
}
</style>
