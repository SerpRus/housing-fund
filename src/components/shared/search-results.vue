<template>
    <layout-block-with-title class="search-results" :title="title" :title-tag="titleTag">
        <div v-if="(!users || users && !users.length) && !isLoading" class="search-results__text">
            {{ text }}
        </div>

        <circle-loader v-if="isLoading" />

        <div v-else class="search-results__results">
            <UserCard
                v-for="user in users"
                :key="user.id"
                class="search-results__results-item"
                img-src="/images/plugs/plug.png"
                :user="user"
                :is-selected="user.isSelected"
                @click="userCardClickHandler(user)"
            />
        </div>
    </layout-block-with-title>
</template>

<script>
import { mapMutations } from 'vuex';
import LayoutBlockWithTitle from '@/components/layouts/layout-block-with-title.vue';
import UserCard from '@/components/shared/user-card.vue';
import CircleLoader from '@/components/shared/circle-loader.vue';

export default {
    components: {LayoutBlockWithTitle, UserCard, CircleLoader},
    props: {
        title: {
            type: String,
            default: 'Результаты',
        },
        titleTag: {
            default: 'h2',
        },
        users: Array,
        isLoading: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        text() {
            return this.users && !this.users.length ? 'ничего не найдено' : 'начните поиск';
        }
    },
    methods: {
        ...mapMutations('searchUsers', ['setUsers', 'setSelectedUser']),
        userCardClickHandler(targetUser) {
            this.setUsers(this.users.map((user) => {
                return {
                    ...user,
                    isSelected: user.id === targetUser.id,
                };
            }));

            this.setSelectedUser(targetUser);
        }
    },
}
</script>

<style lang="scss" scoped>
.search-results {
    &__results {
        &-item {
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: rem(18);
            }
        }
    }
}
</style>
