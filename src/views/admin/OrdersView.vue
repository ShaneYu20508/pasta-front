<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 訂單
    VCol(cols="12")
      VDataTable(:items="orders" :headers="headers")
        template(#[`item.createdAt`]="{ item }")
          | {{ new Date(item.createdAt).toLocaleString() }}
        template(#[`item.cart`]="{ item }")
          ul
            li(v-for="cart in item.cart" :key="cart._id")
              | {{ cart.product.name }} . {{  cart.noodle  }}* {{ cart.quantity }}
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const orders = ref([])
const headers = [
  { title: '訂單編號', key: '_id', minWidth: '200px' },
  // { title: '訂購帳號', key: 'user.account' },
  { title: '姓名', key: 'name', minWidth: '90px' },
  { title: '電話', key: 'phone', minWidth: '90px' },
  { title: '寄件地址', key: 'address', minWidth: '200px' },
  { title: '下訂日期', key: 'createdAt', minWidth: '150px' },
  { title: '訂單內容', key: 'cart', sortable: false, minWidth: '190px' },
  {
    title: '金額',
    key: 'price',
    value: (item) => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.product.price
      }, 0)
    },
    minWidth: '95px'
  }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result)
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
