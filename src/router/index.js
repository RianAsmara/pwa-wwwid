import Vue from 'vue'
import Router from 'vue-router'
import Post from '@/components/Post'
import Detail from '@/components/Detail'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Post',
      component: Post
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

