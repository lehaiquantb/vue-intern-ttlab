<template>
    <div class="dropdown-custom">
        <el-dropdown
            class="dropdown-title"
            :disabled="disabled"
            :class="{ 'dropdown-disabled': disabled }"
            @command="onSelectAction"
        >
            <span>
                <span v-if="prefix !== null" class="dropdown-prefix"
                    >{{ prefix }}:&nbsp;</span
                >

                <span class="">{{ selectedAction.name }}</span>
                <span class="icon-arrow-down"></span>
            </span>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        v-for="(action, index) in actions"
                        :command="action"
                        :key="index"
                        >{{ action.name }}</el-dropdown-item
                    >
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import { IActionDropdown } from '@/modules/tuan2/types';
import { Options, Vue } from 'vue-class-component';

@Options({
    name: 'Dropdown',
    props: {
        selectedAction: { type: Object as () => IActionDropdown, default: {} },
        actions: { type: Array, default: [{ key: 1, name: 'Action' }] },
        disabled: { type: Boolean, default: false },
        prefix: { type: String, default: null },
    },
})
export default class Dropdown extends Vue {
    selectedAction!: IActionDropdown;
    onSelectAction(action: IActionDropdown) {
        this.$emit('update:selectedAction', action);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
