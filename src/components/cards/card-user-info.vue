<template>
    <div class="card-user-info">
        <div v-if="selectedUser" class="card-user-info__user">
            <picture v-if="imgSrc" class="card-user-info__img-wrapper">
                <img class="card-user-info__img" :src="imgSrc" :alt="imgAlt">
            </picture>

            <div v-if="selectedUser" class="card-user-info__content">
                <div v-if="selectedUser.name" class="card-user-info__title">
                    {{ selectedUser.name }}
                </div>

                <ul class="card-user-info__contacts">
                    <li class="card-user-info__contacts-item">
                        <b>email:</b> {{ selectedUser.email }}
                    </li>
                    <li class="card-user-info__contacts-item">
                        <b>phone:</b> {{ selectedUser.phone }}
                    </li>
                </ul>

                <div class="card-user-info__description">
                    <div class="card-user-info__description-title">
                        О себе:
                    </div>

                    <div class="card-user-info__description-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="card-user-info__plug">
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    props: {
        imgSrc: String,
        imgAlt: {
            type: String,
            default: '',
        },
        title: String,
        subtitle: String,
        isSelected: Boolean,
    },
    computed: {
        ...mapState('searchUsers', ['selectedUser']),
    }
}
</script>

<style lang="scss" scoped>
.card-user-info {
    height: 100%;

    &__user {
        display: flex;
    }

    &__img {
        &-wrapper {
            flex-shrink: 0;

            width: rem(424);
            margin-right: rem(60);
        }
    }

    &__title,
    &__description-title {
        @include text-props(16, 22.4, 600)
    }

    &__title {
        &:not(:last-child) {
            margin-bottom: rem(10);
        }
    }

    &__contacts {
        @include text-props(14, 19.6);

        margin: 0;
        padding: 0;

        list-style: none;

        &:not(:last-child) {
            margin-bottom: rem(20);
        }

        &-item {
            &:not(:last-child) {
                margin-bottom: rem(10);
            }

            & b {
                font-weight: 600;
            }
        }
    }

    &__description-title {
        &:not(:last-child) {
            margin-bottom: rem(25);
        }
    }

    &__plug {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 100%;
    }
}
</style>
