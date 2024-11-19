<template>
  <v-container class="w-75">
    <!-- <h1 class="text-center">三種麵條任你挑選</h1>
    <v-divider class="mb-6"></v-divider> -->
    <v-row class="mb-5 mx-auto w-100">
      <v-col class="text-center left" cols="4" v-for="(noodle, i) in noodles" :key="i">
        <h2>{{ noodle.text1 }}</h2>
        <v-img
        width="auto"
        height="225"
        aspect-ratio="1/1"
        cover
        :src="noodle.image"
        rounded="lg"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row v-for="(item, i) in items" :key="i" class="mt-5 mb-5 mx-auto right">
      <v-col cols="12" md="4">
        <v-img
        width="auto"
        height="225"
        aspect-ratio="1/1"
        cover
        :src="item.image"
        rounded="lg"
        >
        </v-img>
      </v-col>
      <v-col cols="12" md="8">
        <h1>{{ item.text1 }}</h1>
        <v-divider class="mb-6"></v-divider>
        <p>{{ item.text2 }}</p>
        <p>{{ item.text3 }}</p>
        <p>{{ item.text4 }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const noodles = ref([
  {
    image: new URL('@/assets/noodle-1.jpg', import.meta.url).href,
    text1: '直麵'
  },
  {
    image: new URL('@/assets/noodle-2.jpg', import.meta.url).href,
    text1: '筆管麵'
  },
  {
    image: new URL('@/assets/noodle-3.jpg', import.meta.url).href,
    text1: '寬扁麵'
  }
])

const items = ref([
  {
    image: new URL('@/assets/marinara-spaghetti.jpg', import.meta.url).href,
    text1: '肉醬義大利麵',
    text2: '選用上等食材，帶來純正的意式風味。每份義大利麵都經過精心調配，讓您在家就能輕鬆享受餐廳級的美味。',
    text3: '擁有豐富的番茄香氣和絞肉的鮮美，洋蔥和蒜末的香味更是讓人垂涎欲滴。',
    text4: '每一口都能感受到義大利經典風味的完美結合，無論是作為家常便飯還是招待朋友的佳品，皆能令人滿意。'
  },
  {
    image: new URL('@/assets/cream-spaghetti.jpg', import.meta.url).href,
    text1: '白醬義大利麵',
    text2: '以濃郁的白醬為基底，搭配新鮮食材，為您帶來令人滿足的美味體驗。',
    text3: '豐富的奶香和濃郁的白醬，結合培根的煙燻味、杏鮑菇的滑嫩口感以及花椰菜的清脆感。',
    text4: '每一口都是奶香、鹹香和微辣的完美融合，每一口都充滿滋味與幸福感！令人每餐都充滿期待。'
  },
  {
    image: new URL('@/assets/Pesto-Spaghetti.jpg', import.meta.url).href,
    text1: '青醬義大利麵',
    text2: '簡約卻絕對美味的佳品讓每一餐都變得特別。選用新鮮青醬，搭配濃郁的帕瑪森起司和清香的羅勒葉，讓您每一口都感受到義大利的傳統風味與現代美食的完美結合。',
    text3: '經典青醬的迷人風味，搭配上帕瑪森起司的濃郁口感，讓每一口都充滿豐富的層次。',
    text4: '清新草本香氣與帕瑪森的奶香完美融合，令人每餐都能感受到義大利料理的純粹魅力。'
  }
])

onMounted(() => {
  gsap
    .from('.left', {
      // x: '-100%',
      opacity: 0,
      duration: 1,
      ease: 'ease-in',
      stagger: 0.5
    })
  gsap
    .from('.right', {
      // x: '100%',
      opacity: 0,
      duration: 1,
      ease: 'ease-in',
      stagger: 0.5
    }, '-=0.5')
})

</script>

<style scoped>
p{
  margin-bottom: 10px;
  font-size: 1rem;
}
</style>
