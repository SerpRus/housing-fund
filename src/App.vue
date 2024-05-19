<template>
    <main class="page__main">
        <search-users />
    </main>
</template>

<script>
import SearchUsers from '@/components/pages/search-users.vue';

export default {
    components: {SearchUsers},
}
</script>

<style lang="scss" scoped>
.page {
    &__main {
        height: 100%;
    }
}
</style>
