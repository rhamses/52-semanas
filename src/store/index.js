import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import goals from './goals'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// const dataState = createPersistedState({
//   paths: ['goals', 'animation', 'deferredPrompt']
// })

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    plugins: [createPersistedState()],
    modules: {
      goals
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
