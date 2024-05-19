<template>
    <input
        class="default-input"
        v-model="text"
        type="text"
        :placeholder="placeholder"
    />
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: 'Введите Id или имя',
        },
    },
    data() {
        return {
            text: '',
        };
    },
}
</script>

<style lang="scss" scoped>
.default-input {
    @include text-props(14, 17);

    padding: rem(16) rem(24);

    color: $color-additional-text;
    border: rem(1.5) solid #e9ecef;
    border-radius: rem(8);
}
</style>
