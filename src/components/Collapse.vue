<template>
    <div class="collapse-custom">
        <el-collapse v-model="showCollapse">
            <el-collapse-item name="collapse-custom">
                <template #title>
                    <div class="collapse-custom__title">
                        <span>{{ title }}</span>
                        <i class="icon-arrow-up"></i>
                    </div>
                    <div class="collapse-custom__extra__title" v-if="extraTitle !== ''">
                        {{ extraTitle }}
                    </div>
                </template>
                <slot name="default"></slot>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    props: {
        title: { type: String, default: '' },
        extraTitle: { type: String, default: '' },
    },
})
export default class Collapse extends Vue {
    showCollapse = ['collapse-custom'];
}
</script>

<style lang="scss" scoped></style>
