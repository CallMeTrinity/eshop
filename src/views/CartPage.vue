<template>
  <h1>Your cart</h1>
  <div>
    <p v-if="isCartEmpty">Your cart is empty</p>
    <div v-else>
      <ul>
        <CartRow v-for="(quantity, id) in cart" :key="id" :id="id" :quantity="quantity"></CartRow>
      </ul>
    </div>
    <h3>Total: {{ cartTotal }}</h3>
  </div>
</template>



<script setup>
import {computed, inject} from 'vue';
import store from "@/store/index.js";
import CartRow from "@/components/Cart/CartRow.vue";

const cart = computed(() => store.cart);
const isCartEmpty = computed(() => Object.keys(cart.value).length === 0);
const data = inject('data');

const cartTotal = computed(() => {
  let total = 0;
  for (let [id, quantity] of Object.entries(cart.value)) {
    id = parseInt(id)
    const price = getProductPriceById(id, data);
    total += price * quantity;
  }
  return total;
});

function getProductPriceById(id, data) {
  const product = Object.values(data).find(el => {
    return el.id === id
  });
  return product ? product.price.euro : 0;
}
</script>


<style scoped>
ul{
  list-style: none;
}
h3{
  text-align: right;
}
</style>
