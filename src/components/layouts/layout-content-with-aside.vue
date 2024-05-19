<template>
    <div class="layout-content-with-aside">
        <div v-if="$slots.aside" class="layout-content-with-aside__aside">
            <slot name="aside"/>
        </div>

        <div v-if="$slots.default" class="layout-content-with-aside__content">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout-content-with-aside {
    display: flex;

    border-radius: rem(10);
    box-shadow: $box-shadow-card;

    &__content,
    &__aside {
        padding: rem(30);
    }

    &__aside {
        flex-shrink: 0;

        width: rem(300);

        border-right: rem(1) solid $color-border;
    }

    &__content {
        flex-grow: 1;
    }
}
</style>
