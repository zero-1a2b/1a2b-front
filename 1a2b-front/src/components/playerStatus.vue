<template>
    <div class="status">
        <div class="player" v-for="player in players" :key="player.player_num">
            <el-tooltip effect="dark" content="????" placement="top-start">
            <el-avatar shape="circle" :size="50" :src="player.avatar"></el-avatar>
            </el-tooltip>
            <span class="player-name" style="display: block;"> {{player.player_name}} </span>
        </div>
        <div class="button-status">
            <el-button ref="start_button" type="success" round :disabled="start_status">开始</el-button>
            <el-button ref="ready_button" :type="ready.pattern" round @click.native="clickReady">{{ready.name}}</el-button>
        </div>
    </div>
</template>

<script>
export default {
/* eslint-disable */
    data(){
        return{
            start_status: true,
            ready:{
                is_ready:true,
                name: '准备',
                pattern: 'primary',
            },
            players:[
                {
                    player_num:0,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:1,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:2,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:3,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:4,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:5,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:6,
                    player_name: '111111',
                    is_ready: 0,
                    avatar: require('../assets/avatar.png')
                },
                {
                    player_num:7,
                    is_ready: 0,
                    player_name: '111111',
                    avatar: require('../assets/avatar.png')
                },
            ]
        }
    },
    methods:{
        clickReady: function(){
            if(this.ready.is_ready == true){
                //click ready
                this.ready.is_ready = false;
                this.ready.name = "取消";
                this.ready.pattern = "danger"
            }else{
                //click cancel
                this.ready.is_ready = true;
                this.ready.name = "准备";
                this.ready.pattern = "primary"
            }
        }
    },
    watch: {
        start_status: function(){
            let result = 0;
            for( var player in this.players ){
                result = result && player.is_ready;
            }
            return (result == 1)? false: true;
        }
    }
}
</script>

<style>
.player{
    display: inline-block;
    height: 50%;
    width: 24%;
}

.button-status{
    display: inline-block;
}

</style>
