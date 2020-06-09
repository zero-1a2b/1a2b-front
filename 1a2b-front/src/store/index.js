import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
    player_name: '',
    count_num: 1829,
    players: [],
    msgList: [],
    room_key: 0,
    room_id: '114514'
  },
  getters: {
    PLAYER_NAME: state => {
      return state.player_name
    },
    COUNT_NUM: state => {
      return state.count_num
    },
    PLAYERS: state => {
      return state.current_flip
    },
    MSGLIST: state => {
      return state.msgList
    },
    ROOM_ID: state => {
      return state.room_id
    },
    ROOM_KEY: state => {
      return state.room_key
    }
  },
  mutations: {
    SET_PLAYER_NAME: (state, payload) => {
      state.player_name = payload
    },
    SET_COUNT_NUM: (state, payload) => {
      state.count_num = payload
    },
    SET_MSGLIST: (state, payload) => {
      state.msgList = payload
    },
    ADD_PLAYERS: (state, payload) => {
      state.players.push(payload)
    },
    ADD_MSG: (state, payload) => {
      state.msgList.push(payload)
    },
    SET_ROOM_ID: (state, payload) => {
      state.room_id = payload
    },
    SET_ROOM_KEY: (state, payload) => {
      state.room_key = payload
    }
  }
})
