<template>
    <div class="layout-container">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.layout-container {
    $gap: 16px;

    max-width: 1298px;
    margin-right: auto;
    margin-left: auto;
    padding-right: rem($gap);
    padding-left: rem($gap);
}
</style>
