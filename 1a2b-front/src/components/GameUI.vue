<template>
    <div class="game-ui">
          <el-row class="game-head" :gutter="12">
            <el-col :span="12" :offset="6">
              <el-card >
                  房间号：{{room_id}}
              </el-card>
            </el-col>
            <el-col :span="6" style="float:right; padding:0;">
              <el-button style="float:right; margin: 0 0 0 0 " type="danger" @click="leave_room">离开</el-button>
            </el-col>
          </el-row>
        <div class="flip">
          <FlipBoard/>
        </div>
        <div class="player-status">
          <StatusBoard/>
        </div>
        <div class="chat-board">
          <ChatBoard/>
        </div>
    </div>
</template>

<script>
import ChatBoard from './chat'
import FlipBoard from './flip'
import StatusBoard from './playerStatus'
import {mapState} from 'vuex'
import {Config} from '../js/config'
import {SocketMsg} from '../js/socket_msg'
export default {
  name: 'GameUI',
  components: {ChatBoard, FlipBoard, StatusBoard},
  data () {
    return {
    }
  },
  methods: {
    leave_room: function () {
      this.$confirm('确定要离开游戏吗？', '离开游戏', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '离开房间!'
        })
        this.$store.commit('DISCONNECT_SOCKET')
        this.$router.push({
          path: Config.root_url
        })
      }).catch(() => {
      })
    },
    initWebSocket: function () {
      this.$store.commit('CONNECT_SOCKET', {id: this.room_id, player_name: this.player_name})
      this.$store.commit('BIND_ONMESSAGE', this.onMessageCallback)
    },
    onMessageCallback: function (event) {
      let data = JSON.parse(event.data)
      console.log(data)
      // Start Event
      if (data.type === 'game_started') {
        this.$store.commit('ADD_MSG', {
          msg: '游戏开始,每位玩家只有60s的时间猜数字',
          playerName: '系统',
          messageType: 1
        })
      }
      // Chat Event
      if (data.type === 'chat') {
        this.$store.commit('ADD_MSG', {
          msg: data.msg.msg,
          playerName: data.msg.name,
          messageType: 0
        })
      }
      // Game Event
      if (data.type === 'game') {
        if (data.event.type === 'guess') {
          this.setFlip(data.event.a, data.event.b)
          this.$store.commit('ADD_MSG', {
            msg: SocketMsg.guess_1a2b(data.event.player, data.event.guess, data.event.a, data.event.b),
            playerName: '系统',
            messageType: 1
          })
        }
      }
    },
    setFlip: function (a, b) {
      let result = 10809
      result = a * 1000 + result + b * 10
      console.log(result)
      this.$store.commit('SET_COUNT_NUM', result)
    }
  },
  computed: {
    ...mapState([
      'room_id',
      'player_name',
      'sock'
    ])
  },
  created () {
    this.initWebSocket()
  }
}
</script>

<style lang="scss" scoped>
.room-id{
  height: 50px;
}

.game-head{
    height: 15%;
    width: 100%;
    border: 10px;
    margin: 0;
    padding: 0;
}
.chat-board{
    height: 35%;
    border: 10px;
    margin: 0;
    padding: 0;
}

.player-status{
  height: 30%;
    border: 10px;
}

.flip{
    height: 20%;
    border: 10px;
}

.game-ui{
  height: inherit;
}

</style>

<style>
.el-message-box{
  width: auto !important;
}
</style>
