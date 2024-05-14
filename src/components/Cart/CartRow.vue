<template>
  <li>
    <div class="left">
      <img :alt="product.name" :src="product.picture">
      <div class="info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div class="action">
      <span>{{ quantity }} x {{ product.price.euro }} €</span>
      <vue-feather type="trash" @click="removeFromCart"></vue-feather>
    </div>
  </li>
</template>

<script setup>

import {inject, toRefs} from 'vue';
import store from "@/store/index.js";


const data = inject('data')
const props = defineProps({
  id: Number,
  quantity: Number
});

const {id, quantity} = toRefs(props);
const product = data[id.value];

const removeFromCart = () => {
  delete store.cart[id.value];
};
</script>

<style scoped>

.action {
  display: flex;
  align-items: center;
  gap: 1rem
}

li {
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  border-bottom: solid 1px gray;
}

.left {
  display: flex;
  gap: 2rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 200px;
}
</style>
