 import { createRouter, createWebHashHistory } from 'vue-router'
 
//====== 原有业务路由（pinia/axios） =====
const routes = [
 {
  path: '/',
  redirect: '/optionsapipage'
},
  {
    path: '/axiosbasic',
    component: () => import('@/views/business/AxiosBasic.vue')
  },
  {
    path: '/axioswrap',
    component: () => import('@/views/business/AxiosWrap.vue')
  },
  {
    path: '/piniasimple',
    component: () => import('@/views/business/PiniaSimple.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/business/Todo.vue'),
    meta:{requiresAuth:true}
    
  },
  {
    path:'/login',
    component:()=>import('@/views/business/login.vue')
   
  }
,
//===== 选项试 APIdemo路由 ======
 {
    path:'/todosplitpage',
    component:()=>import('@/views/practice/TodoSplitPage.vue')
  }, 
 {
    path:'/addemopage',
    component:()=>import('@/views/practice/AdDemoPage.vue') 
  }
   ,
   {
    path:'/checkboxoptiondemo',
    component :()=>import('@/views/practice/CheckboxOptionDemo.vue')
   },
//===== 新增练习demo路由 ======


 

 {path:'/todosinglepage',
component :()=>import('@/views/practice/TodoSinglePage.vue')
 },
 
 {path:'/lifehookpage',
component :()=>import('@/views/practice/LifeHookPage.vue')
 },

 {
  path:'/todoparentpage',
  component:()=>import('@/views/practice/TodoParentPage.vue') 
 },

  {
    path:'/fromdirectivepage',
    component:()=>import('@/views/practice/FromDirectivePage.vue') 
  }
  ,
 
  {
    path:'/todofullpage',
    component:()=>import('@/views/practice/TodoFullPage.vue') 
  },
{
  path: '/optionsapipage',
  component: () => import('@/views/practice/OptionsAPIPage.vue')
},
{
  path:'/practice',
  component:() => import('@/views/practice/Practice.vue')
}
]




const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  const token =
  localStorage.getItem('token')
  if(to.meta.requiresAuth){
    if(token){
      next()
    }else{
      next(
        {path:'/login',
      query : {redirect:to.fullPath}
    })
    }
  }else{
    next()
  }
})
export default router