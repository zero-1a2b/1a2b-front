<template>
    <div class="game_start">
    <div id="game_title"> 1A2B</div>
    <div id="game_logo">(这里放个zero娘的logo)</div>
    <el-row >
      <el-button class="game_button" type="primary" round>开始游戏</el-button>
    </el-row>
    <el-row >
      <el-button  class="game_button" type="warning" round @click="show_rule" >规则介绍</el-button>
    </el-row>
    </div>
</template>

<script>
import {Config} from '../js/config'
export default {
  name: 'GameStart',
  data () {
    return {
      rule_text: Config.rule_text
    }
  },
  methods: {
    show_rule: function () {
      this.$alert(this.rule_text, '游戏规则', {
        confirmButtonText: '确定',
        customClass: 'rule_box',
        callback: action => {}
      })
    }
  }
}
</script>

<style >

.game_button{
  margin: 50px;
  font-size: 25px;
}

.game_start{
  height: inherit;
  margin: 0;
  padding: 0;
  border: 0;
}

#game_logo{
  color: antiquewhite;
  margin: 0 0 50px 0;
}

.el-message-box{
  width: auto !important;
}

#game_title{
  margin: auto;
  padding: 100px;
  background-color: transparent;
  font-weight: normal;
  font-size :64px;
  color: aliceblue;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
