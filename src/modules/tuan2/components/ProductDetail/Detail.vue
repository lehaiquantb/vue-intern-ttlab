<template>
    <div class="product-detail-detail" v-html="product.detail.html"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Detail extends Vue {
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
            GPU: 'a',
            html: `
                <ul>
                    <li>Intel Core i7-10700F</li>
                    <li>Intel H410</li>
                    <li>WHITE</li>
                    <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                    <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                    <li>2 total slots (64GB Max)</li>
                    <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                    <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                    <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                    <li>Intel WGI219Vethernet (10/100/1000M)</li>
                    <li>AX200 (WIFI 6)+BT5.1</li>
                    <li>PSU 330W</li>
                    <li>Fan Cooler</li>
                </ul>
            `,
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
    };
}
</script>

<style lang="scss" scoped>
.product-detail-detail {
    :deep(li) {
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */

        /* display: flex;
        align-items: center; */

        /* Color - 7 */

        color: #000000;
    }
}
</style>
