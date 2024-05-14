<template>
  <div class="home">
    <div class="filter">
      <h2>Filters</h2>
      <div>
        <h3>Type</h3>
        <BaseRadioButton v-model="selectedType" :options="options"/>
        <h3>Min Price</h3>
        <BaseInput v-model="minPrice" min="0" placeholder="0" type="number"/>
        <h3>Max Price</h3>
        <BaseInput v-model="maxPrice" min="0" :placeholder="max.toString()" type="number"/>
      </div>
      <BaseButton class="error" @click="resetFilters">Reset</BaseButton>
    </div>
    <div class="product">
      <h2>Our products</h2>
      <ul>
        <router-link
          v-for="el in displayedData"
          :key="el.id"
          :to="`/product/${el.id}`">
          <ProductCard :product="el"/>
        </router-link>

      </ul>
    </div>
  </div>
</template>


<script setup>
import ProductCard from '@/components/Home/ProductCard.vue'
import {computed, inject, ref} from 'vue'
import BaseRadioButton from "@/components/UI/BaseRadioButton.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

const data = inject('data')
const max = 4000;
const selectedType = ref('all');
const minPrice = ref(0);
const maxPrice = ref(max);


const displayedData = computed(() => {
  return Object.values(data).filter(product => {
    return (selectedType.value === 'all' || product.type === selectedType.value) &&
      product.price.euro >= minPrice.value &&
      product.price.euro <= maxPrice.value;
  });
});


const options = [
  {name: 'All', value: 'all'},
  {name: 'Shelf', value: 'shelf'},
  {name: 'Chair', value: 'chair'},
  {name: 'Sofa', value: 'sofa'},
]

function resetFilters() {
  selectedType.value = 'all';
  minPrice.value = 0;
  maxPrice.value = max;
}
</script>


<style scoped>
.home {
  display: flex;
}

.filter {
  flex-basis: 20%;
}

.product {
  flex-basis: 80%;
}

ul {
  list-style: none;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

a {
  text-decoration: none;
  width: fit-content;
  color: #333;
}

</style>
