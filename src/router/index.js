import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/infoTest',
      name: 'InfoTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InfoTest.vue')
    },
    {
      path: '/gender',
      name: 'gender',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Gender.vue')
    },
    {
      path: '/gender/birthYear',
      name: 'birthYear',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BirthYear.vue')
    },
    {
      path: '/gender/birthYear/excess',
      name: 'excess',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Excess.vue')
    },
    {
      path: '/gender/birthYear/excess/number',
      name: 'number',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Number.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock',
      name: 'ColorBlock',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ColorBlock.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2',
      name: 'ColorBlock2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ColorBlock2.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city',
      name: 'City',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/City.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure',
      name: 'Figure',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Figure.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority',
      name: 'Priority',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Priority.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority/img',
      name: 'Img',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Img.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority/img/star',
      name: 'Star',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Star.vue')
    },
    {
      path: '/gender/birthYear/excess/number/colorBlock/colorBlock2/city/figure/priority/img/star/rezultTest',
      name: 'RezultTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RezultTest.vue')
    }
  ]
})

export default router
