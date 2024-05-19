import Api from '@/api/index.js';

const searchUsers = {
    namespaced: true,
    state() {
        return {
            users: null,
            selectedUser: null,
        };
    },
    getters: {},
    mutations: {
        setUsers(state, payload) {
            state.users = payload
        },
        clearUsers(state) {
            state.users = null;
        },
        setSelectedUser(state, payload) {
            state.selectedUser = payload;
        },
        clearSelectedUser(state) {
            state.selectedUser = null;
        }
    },
    actions: {
        async loadUsers(context, payload) {
            const users = await Api.getUsers(payload);

            context.commit('setUsers', users);
        },
    }
}

export default searchUsers
