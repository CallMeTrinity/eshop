<template>
  <div class="icon">

    <vue-feather type="shopping-cart"></vue-feather>
    <div class="number" v-if="totalItems">{{ totalItems }}</div>
  </div>

</template>

<script setup>
import {computed} from 'vue';
import store from "@/store/index.js";

const totalItems = computed(() => {
  return Object.values(store.cart).reduce((sum, quantity) => sum + quantity, 0);
});
</script>


<style scoped>
.icon {
  position: relative;
}

.number {
  position: absolute;
  bottom: -29%;
  right: -13px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: small;
  background: red;
  border-radius: 1000px;
  width: 20px;
  height: 20px;
}
</style>
