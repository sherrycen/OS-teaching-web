import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push 
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {path: '/', redirect: '/introduce'},
    {path: '/login', name: 'Login', component: ()=>import('../views/login/Login')},
    {path: '/register', name:'Register', component: ()=>import('../views/login/Register')},
    {path: '/findkey', name:'Findkey', component: ()=>import('../views/login/Findkey')},  
    {path: '/introduce', name:'Introduce', component: ()=>import('../views/Introduce')},
    {path: '/student', name: 'Student', component: ()=>import('../views/student/Student'),},
    {path: '/teacher', name: 'Teacher', component: ()=>import('../views/Teacher/Teacher'),},
    {path: '/index', name: 'Index', component: ()=>import('../views/Index'),}
  ]
})

// 设置导航守卫，登陆后才能进入其他页面
// router.beforeEach((to,from,next)=>{
//   if(to.path === '/login') return next()
//   const tokenStr = windows.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })

export default router