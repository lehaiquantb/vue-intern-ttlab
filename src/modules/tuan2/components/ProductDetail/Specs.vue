<template>
    <div class="product-detail-specs">
        <table class="table table-striped product_card-detail">
            <tr>
                <td>CPU</td>
                <td>{{ product.detail.cpu ?? 'N/A' }}</td>
            </tr>
            <tr>
                <td>Featured</td>
                <td>{{ product.detail.featured ?? 'N/A' }}</td>
            </tr>
            <tr>
                <td>I/O Ports</td>
                <td>{{ product.detail.ioPort ?? 'N/A' }}</td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Specs extends Vue {
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
.product-detail-specs {
    table {
        td {
            padding: 10px;
        }
        border: 1px solid #cacdd8;
    }
}
</style>
