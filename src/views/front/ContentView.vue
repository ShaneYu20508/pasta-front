<template>
  <v-container class="w-75">
    <v-row justify="center">
      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <v-img
          :width="500"
          :height="500"
          aspect-ratio="1/1"
          cover
          src="@/assets/contentUs.jpg"
          position="center center"
          rounded="lg"
          class="responsive-img"
        >
        </v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1 class="seventh">義在家</h1>
        <v-divider></v-divider>
        <br>
        <p>(xx)xxx-xxxx</p>
        <p>243新北市泰山區貴子里致遠新村55之1號</p>
        <p>營業時間:</p>
        <p>週一到週六 09:00 ~ 17:30</p>
        <p class="text-red">週日、見紅休</p>
        <p>
          以義式料理為主，提供多樣化的餐點，讓您在家也能享受到美味的義大利麵。
        </p>
      </v-col>
    </v-row>
  </v-container>

  <v-container class="mx-auto w-75" max-width="1200px">
    <v-card max-width="80vw">
      <v-card-title class="ninth">
        <v-icon class="seventh">mdi-map-marker</v-icon>&nbsp;
        位置資訊
      </v-card-title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7036499805677!2d121.41694067537684!3d25.04412927780987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7bec9ad74b1%3A0xa639904a89f26435!2z5Yue5YuV6YOo5Yue5YuV5Yqb55m85bGV572y5YyX5Z-65a6c6Iqx6YeR6aas5YiG572y5rOw5bGx6IG35qWt6KiT57e05aC0!5e0!3m2!1szh-TW!2stw!4v1726641965145!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        style="border: 0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </v-card>
  </v-container>
</template>

<style scoped>
.seventh {
  color: #D92323;
  font-size: 2rem;
}

.ninth {
  color: #31312D;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  font-weight: bold;
}

p,
.v-chip {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

iframe {
  width: 100%;
}

/* 修改圖片的樣式，使其在容器中居中顯示，並保持正確的比例 */
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover; /* 確保圖片覆蓋容器，但保持比例 */
  object-position: center center; /* 確保圖片在容器中居中 */
}

@media (max-width: 600px) {
  .seventh {
    font-size: 1.5rem;
  }

  .ninth {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
