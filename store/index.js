import { createStore } from 'vuex'

// import counterModule to
// use in createStore()
import counterModule from './modules/counter.js'

const store = createStore({
  modules: {
    counterMod: counterModule
  }
})

// export store to use in main.js
export default store
