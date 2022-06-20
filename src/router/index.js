import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Главная',
    }
  },
  {
    path: '/price',
    name: 'Price',
    component: () => import('../views/Price.vue'),
    meta: {
      title: 'Прайс',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: 'О нас',
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
    meta: {
      title: 'Контакты',
    }
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import('../views/Stock.vue'),
    meta: {
      title: 'Акции',
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },

})

router.beforeEach((to, from, next) => {
  document.title = `Epil.izhevsk - ${to.meta.title}`
  next()
})

export default router
