<template>
  <footer>
    <img class="logo" alt="logo" src="@/assets/logo.png">
    <div class="currency-selector">
      <BaseSelect :options="currencies" v-model="selectValue""></BaseSelect>
    </div>
  </footer>
</template>




<script setup>
import BaseSelect from "@/components/UI/BaseSelect.vue";
import { computed, ref } from "vue";
import store from "@/store/index.js";

const currencies = [
  { name: '$', value: 'dollar' },
  { name: '€', value: 'euro' }
];

const selectValue = ref(0)
console.log("=>(FooterComponent.vue:24) selectValue", selectValue);



</script>




<style scoped>
footer {
  background: var(--text);
  color: var(--background);
  min-height: 250px;
  position: relative;
}

.logo {
  display: block;
  margin: 0 auto;
  max-width: 100%;

}

.dark .logo {
  filter: invert(1);
}

.currency-selector {
  position: absolute;
  right: 100px;
  bottom: 100px;
}
</style>
