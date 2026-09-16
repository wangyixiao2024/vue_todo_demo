 import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // 首页导航页
    component: () => import('@/views/Nav.vue')
  },
  {
    path: '/axiosbasic',
    component: () => import('@/views/AxiosBasic.vue')
  },
  {
    path: '/axioswrap',
    component: () => import('@/views/AxiosWrap.vue')
  },
  {
    path: '/piniasimple',
    component: () => import('@/views/PiniaSimple.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/Todo.vue'),
    meta:{requiresAuth:true}
    
  },
  {
    path:'/login',
    component:()=>import('@/views/login.vue'),
   
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  const token =
  localStorage.getItem('token')
  if(to.meta.requiresAuth){
    if(token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router