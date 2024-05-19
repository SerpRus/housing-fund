import { createStore } from 'vuex';

import searchUsers from './modules/search-users.js';

const store = createStore({
    modules: {
        searchUsers,
    }
})

export default store
