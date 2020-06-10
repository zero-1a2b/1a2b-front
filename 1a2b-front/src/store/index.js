import Vue from 'vue'
import Vuex from 'vuex'
import {Config} from '../js/config'
import {SocketMsg} from '../js/socket_msg'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
    player_name: '',
    count_num: 1829,
    players: [],
    guesser: 0,
    msgList: [],
    msgCounter: 1,
    room_key: 0,
    room_id: 'null',
    sock: null
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
    },
    guess_state: state => {
      return state.players[state.guesser] === state.player_name
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
      state.msgList.push(SocketMsg.chat(payload.msg, payload.playerName, state.msgCounter, payload.messageType))
      state.msgCounter += 1
    },
    SET_ROOM_ID: (state, payload) => {
      state.room_id = payload
    },
    SET_ROOM_KEY: (state, payload) => {
      state.room_key = payload
    },
    CONNECT_SOCKET: (state, payload) => {
      state.sock = new WebSocket(Config.room_socket_url(payload.id, payload.player_name))
    },
    DISCONNECT_SOCKET: (state, payload) => {
      state.sock.close()
    },
    READY_STATE: (state, payload) => {
      state.sock.send(SocketMsg.ready(payload.playerName))
    },
    UNREADY_STATE: (state, payload) => {
      state.sock.send(SocketMsg.unready(payload.playerName))
    },
    START_STATE: (state, payload) => {
      state.sock.send(SocketMsg.start())
    },
    GUESS_NUM: (state, payload) => {
      state.sock.send(SocketMsg.guess(payload.num, payload.playerName))
    },
    BIND_ONMESSAGE: (state, payload) => {
      state.sock.onmessage = payload
    },
    SET_GUESSER: (state, payload) => {
      state.guesser = payload
    },
    SEND_MESSAGE: (state, payload) => {
      state.sock.send(SocketMsg.chat_socket(payload.msg, payload.playerName))
    }
  }
})
