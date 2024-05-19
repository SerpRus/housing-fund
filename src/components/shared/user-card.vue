<template>
    <icon-with-text
        class="user-card"
        img-src="/images/plugs/plug.png"
        :title="user.username"
        :subtitle="user.email"
        :is-selected="user.isSelected"
    />
</template>

<script>

import IconWithText from "@/components/shared/icon-with-text.vue";

export default {
    components: {IconWithText},
    props: {
        imgSrc: String,
        imgAlt: {
            type: String,
            default: '',
        },
        user: Object,
        isSelected: Boolean,
    },
}
</script>

<style lang="scss" scoped>
.icon-with-text {
    @include text-props(14, 17);

    display: flex;
    border-radius: rem(10);
    box-shadow: $box-shadow-card;

    &--selected {
        box-shadow: none;
    }

    &--selected & {
        &__img {
            &-wrapper {
                border-color: $color-border;
            }
        }

        &__content {
            background-color: #e0e0e0;
            box-shadow: $box-shadow-card;
        }
    }

    &__img {
        width: 100%;
        height: 100%;

        @include object-fit(contain);

        &-wrapper {
            flex-shrink: 0;

            width: rem(69);
            height: rem(70);

            border: rem(1) solid #ffffff;
            border-radius: rem(10) 0 0 rem(10);
        }
    }

    &__content {
        flex-grow: 1;

        min-width: 0;
        padding: rem(15);

        border-left: rem(1) solid $color-border;
        border-radius: 0 rem(10) rem(10) 0;
    }

    &__title,
    &__subtitle {
        @include text-truncate-by-row(1);
    }

    &__title {
        font-weight: 600;

        &:not(:last-child) {
            margin-bottom: rem(5);
        }
    }

    &__subtitle {
        color: $color-additional-text;
    }
}
</style>
