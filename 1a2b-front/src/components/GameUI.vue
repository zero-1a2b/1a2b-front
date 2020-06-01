<template>
    <div class="game-ui">
          <el-row class="game-head" :gutter="12">
            <el-col :span="12" :offset="6">
              <el-card >
                  房间号：{{room_id}}
              </el-card>
            </el-col>
            <el-col :span="6" style="float:right; padding:0;">
              <el-button style="float:right;" type="danger">离开</el-button>
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
  }
}
</script>

<style lang="scss" scoped>
.room-id{
  height: 50px;
}

.game-head{
    height: 15%;
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
  height: 25%;
    border: 10px;
}

.flip{
    height: 25%;
    border: 10px;
}

.game-ui{
  height: inherit;
}

</style>
