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
export default {
  name: 'GameUI',
  components: {ChatBoard, FlipBoard, StatusBoard},
  data () {
    return {
      msg: '',
      room_id: '114514'
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
      }).catch(() => {
      })
    }
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
