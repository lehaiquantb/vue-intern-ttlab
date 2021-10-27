<template>
    <router-view />
</template>

<style lang="scss">
#app {
    width: 100%;
}

.super-center {
    display: grid;
    place-items: center;
}

.text-too-long {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
