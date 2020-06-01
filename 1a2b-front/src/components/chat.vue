<template>
    <div class="container">
        <div class="message-list">
            <el-scrollbar style="height:inherit;">
                <ul class="msg-cont">
                <li v-for="message in msgList" :key="message">
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
            msg:'',
            msgList: [
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
                    playerName: 'test',
                    msg: 'hello world.'
                },
                {
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
    background-color: rgba($color: #a9a9a9, $alpha: 0.5);
    height: 90%;
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
</style>
