<template>
  <div class="product">
    <div>
      <img :alt="product.name" :src="product.picture">
    </div>
    <div class="info">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <h2>{{ product.price.euro }} €</h2>
      <BaseButton @click="addToCart()" class="primary" type="button">Buy</BaseButton>
    </div>
  </div>

</template>


<script setup>
import {inject} from 'vue'
import {useRoute} from 'vue-router'
import store from "@/store/index.js";
import BaseButton from "@/components/UI/BaseButton.vue";

const route = useRoute()
const id = route.params.id
const data = inject('data')

const product = data[id]

function addToCart(){
  if (!store.cart[id]) {
    store.cart[id] = 0;
  }
  store.cart[id]++;
}

</script>


<style scoped>
.product{
  display: flex;
  padding: 2rem;
  gap: 2rem;
}

img {
  border-radius: 20px;
  box-shadow: rgba(67, 67, 67, 0.55) 0px 0px 5px;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info button {
width: fit-content;
}
</style>
