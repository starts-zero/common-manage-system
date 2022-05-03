import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [{
        name: '狗比',
        password: '8848',
        level: 'visiter'
      },
      {
        name: '狗比',
        password: '8848',
        level: 'visiter'
      },
      {
        name: '狗比',
        password: '8848',
        level: 'visiter'
      },
      {
        name: '狗比',
        password: '8848',
        level: 'visiter'
      },
      {
        name: '狗比',
        password: '8848',
        level: 'visiter'
      },
      {
        name: '狗比',
        password: '8848',
        level: 'user'
      }
    ],
    entryUser: {
      name: '',
      level: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
