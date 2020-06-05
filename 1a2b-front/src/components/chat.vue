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
                <li v-for="message in msgList" :key="message.msg_index">
                    {{message.playerName + ' : ' + message.msg}}
                </li>
                </ul>
            </el-scrollbar>
        </div>
        <div class="message-input">
            <el-input v-model="msg" placeholder="来聊些什么吧~"></el-input>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "ChatBoard",
    data(){
        return{
            filter: false,
            msg:'',
            msgList: [
                {
                    msg_index: 1,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 2,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 3,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 4,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 5,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 6,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 7,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 8,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 9,
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    msg_index: 10,
                    playerName: 'test',
                    msg: 'hello world.'
                },
            ]
        }
    },
    methods: {
        sendMsg: function(){
            return 0;
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
}

  .btn-group-custom .btn {
    float: right;
  }

.message-input{
    margin: 0;
    padding: 0;
}
</style>
