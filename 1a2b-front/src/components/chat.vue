<template>
    <div class="container">
            <el-switch
            class="filter"
            v-model="filter"
            active-color="#13ce66"
            active-text="仅显示系统聊天">
            </el-switch>
        <div class="message-list">
            <el-scrollbar style="height:inherit;">
                <ul class="msg-cont">
                <li v-for="message in showList" :key="message.msg_index">
                    {{message.playerName + ' : ' + message.msg}}
                </li>
                </ul>
            </el-scrollbar>
        </div>
        <div class="message-input">
            <el-input v-model="msg" placeholder="来聊些什么吧~" @keyup.enter.native="sendMsg"></el-input>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import {mapState} from 'vuex'
export default {
    name: "ChatBoard",
    data(){
        return{
            filter: false,
            msg: '',
        }
    },
    methods: {
        sendMsg: function(){
            /* Demo Only */
            this.msg_counter += 1;
            let newMessage = {
                msg_index: this.msg_counter,
                message_type:0,
                playerName: 'test',
                msg: this.msg
            }
            this.msgList.push(newMessage)
            this.msg = ''
        }
    },
    mounted(){
        this.$store.commit('SET_MSGLIST',
                [{
                    msg_index: 1,
                    message_type: 1,
                    playerName: '系统',
                    msg: '轮到 玩家1 猜数字'
                },
                {
                    msg_index: 2,
                    message_type: 0,
                    playerName: '玩家1',
                    msg: '3154'
                },
                {
                    msg_index: 3,
                    message_type: 1,
                    playerName: '系统',
                    msg: '玩家1： 3154   1A1B'
                },
                {
                    msg_index: 4,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 5,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 6,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 7,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.111111'
                },
                {
                    msg_index: 8,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 9,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 10,
                    message_type: 0,
                    playerName: 'test',
                    msg: 'hello world.'
                }])
    },
    computed: {
        ...mapState([
            'msgList'
        ]),
        showList: function () {
            if (this.filter === true){
                return this.msgList.filter( (msg) => {
                    return msg.message_type === 1
                })
            }else{
                return this.msgList
            }
        }
    }
}
</script>
<style lang="scss" scoped >
  .btn-group-custom{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 10px;
  }
  .container{
      height: 90%;
      margin: 0;
      padding: 0;
  }

.message-list{
    clear: both;
    background-color: rgba($color: #a9a9a9, $alpha: 0.5);
    height: 82%;
}

.filter{
    float:right;
    display: block;
}

.msg-cont{
    text-align: left;
    height: inherit;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    > li{
        display: block;
    }
}

  .btn-group-custom .btn {
    float: right;
  }

.message-input{
    margin: 0;
    padding: 0;
}
</style>
