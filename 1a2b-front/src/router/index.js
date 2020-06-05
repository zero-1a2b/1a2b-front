import Vue from 'vue'
import Router from 'vue-router'
import GameStart from '@/components/GameStart'
import GameUI from '@/components/GameUI'
import Flip from '@/components/flip'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game_start',
      component: GameStart
    },
    {
      path: '/gameui',
      name: 'game_ui',
      component: GameUI
    },
    {
      path: '/flip',
      name: 'flip',
      component: Flip
    }
  ]
})
