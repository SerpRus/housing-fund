<template>
    <layout-block-with-title class="search-input" :title="title" :title-tag="titleTag">
        <g-default-input />
    </layout-block-with-title>
</template>

<script>
import LayoutBlockWithTitle from '@/components/layouts/layout-block-with-title.vue';

export default {
    components: {LayoutBlockWithTitle},
    props: {
        title: {
            type: String,
            default: 'Поиск сотрудников',
        },
        titleTag: {
            default: 'h2',
        }
    },
}
</script>
