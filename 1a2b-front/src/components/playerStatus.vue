<template>
    <div class="status">
        <div class="player" v-for="player in show_players_list" :key="player.player_num">
            <el-tooltip effect="dark" :content="player.player_name" placement="top-start">
            <el-avatar shape="circle" :size="50" :src="avatar_type[player.is_ready]"></el-avatar>
            </el-tooltip>
            <span class="player-name" style="display: block;"> {{player.player_name}} </span>
        </div>
        <div class="button-status">
            <el-button ref="start_button" type="success" round :disabled="start_status" @click.native="clickStart">开始</el-button>
            <el-button ref="ready_button" :type="ready.pattern" round @click.native="clickReady">{{ready.name}}</el-button>
        </div>
    </div>
</template>

<script>
import {Config} from '../js/config'
import {mapState} from 'vuex'

export default {
/* eslint-disable */
    data(){
        return{
            max_player: Config.max_player,
            current_player: 1,
            avatar_type: [
                require('../assets/avatar.png'),
                require('../assets/avatar.png')
            ],
            ready:{
                is_ready:true,
                name: '准备',
                pattern: 'primary',
            },
            players:[{
                name: 'see',
                is_ready:1
            }]
        }
    },
    methods:{
        clickReady: function(){
            if(this.ready.is_ready == true){
                //click ready
                this.ready.is_ready = false;
                this.ready.name = "取消";
                this.ready.pattern = "danger"
                this.$store.commit("READY_STATE", {playerName: this.player_name})
            }else{
                //click cancel
                this.ready.is_ready = true;
                this.ready.name = "准备";
                this.ready.pattern = "primary"
                this.$store.commit("UNREADY_STATE", {playerName: this.player_name})
            }
        },
        clickStart: function(){
            this.$store.commit("START_STATE")
        }
    },
    computed: {
    ...mapState([
      'room_id',
      'player_name'
    ]),
        start_status: function(){
            var result = 0;
            for( var player in this.players ){
                result += this.players[player].is_ready;
            }
            return (result == this.current_player)? false: true;
        },
        show_players_list: function() {
            let result =[]
            for(var i=0; i < this.max_player; i++){
                var name = (this.players[i] == null)? 'NULL' :this.players[i].name
                var ready_flag = (this.players[i] == null)? 0 : this.players[i].is_ready
                result.push({
                    player_num: i,
                    player_name: name,
                    is_ready: ready_flag
                })
            }
            return result
        }
    },
    mounted() {
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
