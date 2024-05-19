<template>
    <div class="layout-block-with-title">
        <component v-if="title" :is="titleTag" class="layout-block-with-title__title">
            {{ title }}
        </component>

        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        titleTag: {
            default: 'h2',
        },
    },
}
</script>

<style lang="scss" scoped>
.layout-block-with-title {
    &__title {
        @include text-props(16, 22.4, 600);

        &:not(:last-child) {
            margin-bottom: rem(14);
        }
    }
}
</style>
