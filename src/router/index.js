// Composables
import { createRouter, createWebHashHistory, START_LOCATION } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: '義在家',
          login: false,
          admin: false
        }
      },
      {
        path: 'productintroduce',
        name: 'ProductIntroduce',
        component: () => import('@/views/front/ProductIntriduce.vue'),
        meta: {
          title: '義在家 | 產品介紹',
          login: false,
          admin: false
        }
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/front/ProductView.vue'),
        meta: {
          title: '義在家 | 快速預定',
          login: false,
          admin: false
        }
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import('@/views/front/ContentView.vue'),
        meta: {
          title: '義在家 | 聯繫我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'signup',
        name: 'Signup',
        component: () => import('@/views/front/SignUpView.vue'),
        meta: {
          title: '義在家 | 註冊登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'ProductDetail',
        component: () => import('@/views/front/ProductDetail.vue'),
        meta: {
          title: '義在家 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/front/CartView.vue'),
        meta: {
          title: '義在家 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/front/OrdersView.vue'),
        meta: {
          title: '義在家 | 訂單',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      // {
      //   path: '',
      //   name: 'AdminHome',
      //   component: () => import('@/views/admin/HomeView.vue'),
      //   meta: {
      //     title: '義在家 | 管理',
      //     login: true,
      //     admin: true
      //   }
      // },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('@/views/admin/ProductsView.vue'),
        meta: {
          title: '義在家 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import('@/views/admin/OrdersView.vue'),
        meta: {
          title: '義在家 | 訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

router.beforeEach(async (to, from, next) => {
  const user = useUserStore()

  if (from === START_LOCATION) {
    await user.getProfile()
  }

  if (user.isLogin && ['/signup'].includes(to.path)) {
    // 如果有登入，要去註冊或登入頁，重新導向回首頁
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    // 如果要去的頁面要登入，但是沒登入，重新導向回登入頁
    next('/signup')
  } else if (to.meta.admin && !user.isAdmin) {
    // 如果要去的頁面要管理員，但是不是管理員，重新導向回首頁
    next('/')
  } else {
    // 不重新導向
    next()
  }
})

export default router
