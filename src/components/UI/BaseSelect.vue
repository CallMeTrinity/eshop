<template>
  <select v-model="model">
    <option
      v-for="option of options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>



<script setup>
const props = defineProps({
  options:Array
})

const model = defineModel()
</script>



<style scoped>
select {
  background: var(--background);
  color: var(--text);
  padding: 0.5em;
  border-radius: 0.6em;
  font-size: 1rem;
  border: 2px solid var(--secondary-alt);
  outline: none;
  cursor: pointer;
  min-width: 8rem;
  width: fit-content;
}

select:hover {
  box-shadow: var(--shadow);
}

select:focus {
  border-color: var(--primary);
}
</style>
