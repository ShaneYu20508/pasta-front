<template lang="pug">
//- 手機版側欄
VNavigationDrawer(v-model="drawer" temporary location="left" v-if="isMobile")
  VList(nav)
    template(v-for="item in navItems" :key="item.to")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
        VListItemTitle {{ item.text }}
    VListItem(v-if="user.isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      VListItemTitle 登出
//- 導覽列
VAppBar(color="#008C45")
  VContainer.d-flex.align-center.w-50
    VBtn(to="/" :active="false")
      VAppBarTitle 
        strong 義在家
    VSpacer
    //- 手機板導覽列
    template(v-if="isMobile")
      VAppBarNavIcon(@click="drawer = true")
    //- 電腦版導覽列
    template(v-else)
      template(v-for="item in navItems" :key="item.to")
        VBtn.text-h6(:to="item.to" :prepend-icon="item.icon" v-if="item.show") {{ item.text }}
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" floating)
      VBtn.text-h6(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出
//- 頁面內容
VMain(style="min-height: calc(100vh)")
  RouterView(:key="$route.path")
VFooter(class="px-0")
  VRow(class="text-center bg-third" )
    VCol(cols="12")
      strong ©{{ new Date().getFullYear() }} &nbsp; - &nbsp; 義在家 pasta straight home
        VBtn(v-for="icon in icons" 
        :key="icon"
        class="ms-4"
        :icon="icon.name"
        :href="icon.link"
        target="_blank"
        variant="plain")
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const router = useRouter()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 手機版判斷
const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// 手機版惻欄開關
const drawer = ref(false)

// 導覽列項目
const navItems = computed(() => {
  return [
    { to: '/productintroduce', text: '產品介紹', show: !user.isLogin|| user.isLogin },
    { to: '/products', text: '快速訂購', show: !user.isLogin || user.isLogin},
    { to: '/content', text: '聯繫我們', show: !user.isLogin },
    { to: '/signup', text: '會員', show: !user.isLogin },
    // { to: '/login', text: '登入', icon: 'mdi-login', show: !user.isLogin },
    { to: '/cart', text: '購物車', show: user.isLogin },
    { to: '/orders', text: '我的訂單', show: user.isLogin },
    { to: '/admin', text: '管理', show: user.isLogin && user.isAdmin }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

const icons = ref([
  {
    name: 'mdi-facebook',
    link: 'https://www.facebook.com/'
  },
  {
    name: 'mdi-instagram',
    link: 'https://www.instagram.com'
  }
])
</script>

<style scoped lang="scss">
.bg-third{
  background-color:#CD212A;
  color:white
}

.v-btn{
  color: white;;
  font-size: 1.4rem;
}
</style>
