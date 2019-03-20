import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list,
      children:[

      ]
    },
    {
      path:"/detail",
      name:"detail",
      component:detail,
    }
  ]
})
