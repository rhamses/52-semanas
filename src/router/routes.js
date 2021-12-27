import store from '../store';

const routes = [
  {
    path: '/',
    component: () => import('layouts/InitialSetting.vue'),
    beforeEnter(to, from, next){
      if (store().state.goals.goals.length > 0) {
        next('/list')
      }
      next();
    },
    props: {
      nav: {
        context: "simple",
        nav: false
      }
    },
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/InitialSetting.vue'),
    props: {
      nav: {
        context: "simple",
        nav: true
      }
    },
    children: [
      { path: '/credits', component: () => import('pages/Credits.vue') },
      { path: '/goal', component: () => import('pages/NewGoal.vue') }
    ]
  },
  {
    path: '/list',
    component: () => import('layouts/InitialSetting.vue'),
    beforeEnter(to, from, next){
      if (store().state.goals.goals.length == 0) {
        next('/')
      }
      next();
    },
    props: {
      nav: {
        context: "goals",
        nav: true
      }
    },
    children: [
      { path: '', component: () => import('pages/ListGoals.vue'), name:"Goals" },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
