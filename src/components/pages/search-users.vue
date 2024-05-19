<template>
    <g-layout-container class="search-users">
        <header class="search-users__header">
            <h1 class="search-users__header-title">
                Жилфонд
            </h1>

            <div class="h1 search-users__header-text">
                Пользователь
            </div>
        </header>

        <layout-content-with-aside class="search-users__content">
            <template #aside>
                <search-input class="search-users__content-search" @input="searchInputHandler" />

                <search-results
                    class="search-users__content-results"
                    :users="users"
                    :is-loading="isLoading"
                    @select-user="selectUserHandler"
                />
            </template>

            <CardUserInfo
                title="Ervin Howell"
                img-src="/images/plugs/plug-big.png"
            />
        </layout-content-with-aside>
    </g-layout-container>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';
import debounce from '@/utils/debounce.js';
import LayoutContentWithAside from '@/components/layouts/layout-content-with-aside.vue';
import SearchInput from '@/components/shared/search-input.vue';
import SearchResults from '@/components/shared/search-results.vue';
import CardUserInfo from '@/components/cards/card-user-info.vue';

export default {
    components: {
        LayoutContentWithAside,
        SearchInput,
        SearchResults,
        CardUserInfo,
    },
    data() {
        return {
            isLoading: false,
        };
    },
    created() {
        this.searchInputHandler = debounce(this.searchInputHandler, 500);
    },
    methods: {
        ...mapActions('searchUsers', ['loadUsers']),
        ...mapMutations('searchUsers', ['clearUsers', 'clearSelectedUser']),

        async searchInputHandler(e) {
            this.clearUsers();
            this.clearSelectedUser();

            const { value } = e.target;

            if (!value) {
                return;
            }

            this.isLoading = true;

            const params = this.createParams(value);

            await this.loadUsers(params);

            this.isLoading = false;
        },
        createParams(string) {
            const filters = [];
            let key;

            const words = string.split(',');

            words.forEach((word) => {
                const trimmedWord = word.trim();

                if (trimmedWord === '') {
                    return;
                }

                if (!isNaN(parseInt(word))) {
                    if (!key) {
                        key = 'id';
                    }
                    filters.push(parseInt(word.trim()));
                }

                if (!key) {
                    key = 'username';
                }

                filters.push(word.trim());
            })

            return {
                [key]: filters,
            };
        },
        selectUserHandler(user) {
            console.log(user)
        },
    },
    computed: {
        ...mapState('searchUsers', ['users']),
    }
}
</script>

<style lang="scss" scoped>
.search-users {
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: rem(50) 0;

    &__header {
        display: flex;
        justify-content: space-between;

        &-title {
            @include text-props(32, 39, 700);

            color: $color-bright;
        }

        &-text {
            @include text-props(16, 19.5);
        }

        &:not(:last-child) {
            margin-bottom: rem(26);
        }
    }

    &__content {
        flex-grow: 1;

        &-search {
            &:not(:last-child) {
                margin-bottom: rem(22);
            }
        }
    }
}
</style>
