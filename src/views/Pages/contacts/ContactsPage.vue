<!-- <template>
  <div>
    <h2>Ерошевского 22</h2>
    <h2>89867943576</h2>
    <h2>Время работы: c 8:00 до 16:00</h2>
    <div>
      <yandex-map :settings="settings">
        <ymap-marker :coords="coords" v-if="coords && coords.length === 2" />
      </yandex-map>
    </div>
  </div>
</template>

<script >
import { yandexMap, ymapMarker } from "vue-yandex-maps";

export default {
  components: {
    yandexMap,
    ymapMarker,
  },
  data() {
    return {
      settings: {
        apiKey: "85b7eced-749e-429b-8f7c-8da127f9ba60",
        lang: "ru_RU",
        coordorder: "latlong",
        enterprise: false,
        version: "2.1",
      },
      coords: [53.215763, 50.162411],
    };
  },
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords = [position.coords.latitude, position.coords.longitude];
      this.$nextTick(() => {
        this.$refs.map.map.panTo(this.coords);
      });
    });
  },
};
</script> -->
<template>
  <div>
    <h2>Ерошевского 22</h2>
    <h2>89867943576</h2>
    <h2>Время работы: c 8:00 до 16:00</h2>
    <div>
      <YandexMap :coordinates="coordinates">
        <YandexMarker :coordinates="coordinates" :marker-id="123">
          <template #component>
            <CustomBalloon v-model="name" />
          </template>
        </YandexMarker>
      </YandexMap>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { yandexMap } from "vue-yandex-maps";
import CustomBalloon from "./CustomBalloon.vue";
const coordinates = [53.215763, 50.162411];
const name = ref("Custom");
</script>

<style>
.yandex-container {
  height: 400px;
}
.yandex-balloon {
  height: 200px;
  width: 200px;
}
</style>
