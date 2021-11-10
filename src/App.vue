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

.rt-custom-color {
    color: #0156ff;
}

.rt-custom-text-deco {
    text-decoration: underline;
}
</style>
