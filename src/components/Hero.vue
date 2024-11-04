<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div class="hero mb-4">
    <h1 class="dpf-font-style">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.hero {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(74, 62, 0);
  background-image: url(../assets/dp.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  border-bottom: 1px solid rgb(228, 199, 56);
}
.dpf-font-style {
    font-family: "Orelega One", serif;
    font-weight: 400;
    font-style: normal;
    font-style: italic;
    font-size: 4rem;
    text-transform: uppercase;
    color: rgb(228, 199, 56);
    mix-blend-mode: luminosity;
}
h1 {
  top: -10px;
  text-align: center;
  text-shadow: 1px 1px rgb(0, 0, 0);
}
</style>
