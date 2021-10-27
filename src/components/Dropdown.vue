<template>
    <div class="dropdown-custom">
        <el-dropdown
            class="dropdown-title"
            :disabled="disabled"
            :class="{ 'dropdown-disabled': disabled }"
        >
            <span>
                <span v-if="prefix !== null" class="dropdown-prefix"
                    >{{ prefix }}:&nbsp;</span
                >

                <span class="">{{ title }}</span>
                <span class="icon-arrow-down"></span>
            </span>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item v-for="(action, index) in actions" :key="index">{{
                        action
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        title: { type: String, default: '' },
        actions: { type: Array, default: [] },
        disabled: { type: Boolean, default: false },
        prefix: { type: String, default: null },
    },
})
export default class Dropdown extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.dropdown-custom {
    cursor: pointer;
    .dropdown-title {
        border: 1px solid #5a5b6a;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 9px 10px;
        display: flex;
        align-items: center;
        width: fit-content;
        height: 36px;
        margin-left: 10px;
    }

    .icon-arrow-down {
        display: inline-block;
        /* content: ' '; */
        background-size: 10px 5px;
        height: 5px;
        width: 10px;
        color: #787885;
        margin-left: 5px;
        background-image: url('~@/assets/images/arrow-down.svg');
    }

    .dropdown-disabled {
        border: 1px solid #b4b4bb;
        color: #787885;
        cursor: none;
    }

    .dropdown-prefix {
        color: #787885;
    }
}
</style>
