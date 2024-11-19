<template lang="pug">
VForm
  VContainer.w-75
    VCol(cols="12")
      h1.text-center 我的購物車
    VDivider
    VCol.mx-auto(cols="12")
      VDataTable(:items="cart" :headers="headers")
        template(#[`item.product.image`]="{ item }")
          VImg(:src="item.product.image" width="100" height="100" aspect-ratio="1/1" cover rounded="lg")
        template(#[`item.product.name`]="{ item }")
          span(v-if="item.product.sell") {{ item.product.name }}
          span.text-red.text-decoration-line-through(v-else) {{ item.product.name }} (已下架)

        template(#[`item.product.noodle`]="{ item }")
          span(v-if="item.product.noodle") {{ item.product.noodle }}
          span(v-else) 無麵條選擇

        template(#[`item.quantity`]="{ item }")
          VBtn(variant="text" icon="mdi-minus" color="red" @click="addCart(item.product._id, -1, item.noodle)")
          | {{ item.quantity }}
          VBtn(variant="text" icon="mdi-plus" color="green" @click="addCart(item.product._id, 1, item.noodle)")
        template(#[`item.action`]="{ item }")
          VBtn(variant="text" icon="mdi-delete" color="red" @click="addCart(item.product._id, item.quantity * -1, item.noodle)")
    //- VCol(cols="12")
    //-   p 你的購物車共有 {{ cart.length }} 項商品

    //- 取件人資料
    VRow
      VCol(cols="6" md="3")
        VTextField(
          label="取件人姓名"
          prepend-inner-icon="mdi-account-circle-outline"
          variant="outlined"
          v-model="name"
          :rules="[rules.required]"
        )
      VCol(cols="6" md="3")
        VTextField(
          label="取件人電話"
          prepend-inner-icon="mdi-cellphone"
          variant="outlined"
          v-model="phone"
          :rules="[rules.required]"
        )
      VCol(cols="12" md="6")
        VTextField(
          label="取件人地址"
          prepend-inner-icon="mdi-map-marker"
          variant="outlined"
          v-model="address"
          :rules="[rules.required]"
        )

    VCol.d-flex.align-center.justify-space-between(cols="12")
      p.text-h5 總金額:
      p.text-h5.text-red NT.{{ total }}
    VCol.text-center(cols="12")
      VBtn(color="green" :disabled="!canCheckout" :loading="isSubmitting" @click="checkout") 結帳
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const name = ref('')
const phone = ref('')
const address = ref('')

const rules = ref({
  required: value => !!value || '必填欄位'
})

const cart = ref([])
const headers = [
  { title: '商品圖片', key: 'product.image', minWidth: '100px' },
  { title: '商品名稱', key: 'product.name', minWidth: '150px' },
  { title: '麵條種類', key: 'noodle', minWidth: '120px' },
  { title: '單價', key: 'product.price', minWidth: '95px' },
  { title: '數量', key: 'quantity', minWidth: '90px' },
  { title: '總價', key: 'total', value: item => item.product.price * item.quantity, minWidth: '95px' },
  { title: '刪除', key: 'action', minWidth: '90px' }
]

const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity * current.product.price
  }, 0)
})

const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const addCart = async (product, quantity, noodle) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }

  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product,
      quantity,
      noodle
    })
    user.cart = data.result

    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    const idx = cart.value.findIndex(item => item.product._id === product && item.noodle === noodle)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
    }
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

// 結帳
const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders', {
      name: name.value,
      phone: phone.value,
      address: address.value
    })
    user.cart = 0
    router.push('/orders')
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

  isSubmitting.value = false
}
onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
})
</script>
