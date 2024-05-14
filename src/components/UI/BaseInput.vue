<template>
  <input :type="type" :placeholder="placeholder" v-model="model" >
</template>



<script setup>
const props = defineProps({
  type: String,
  placeholder: String
})

const model = defineModel()
</script>



<style scoped>
input {
  background-color: var(--background);
  color: var(--text);
  padding: 0.5em;
  line-height: 1em;
  border-radius: 0.6em;
  font-size: 1rem;
  border: 2px solid var(--secondary-alt);
  outline: none;
  width: 10rem;
}

input:hover {
  box-shadow: var(--shadow);
}

input:focus {
  border-color: var(--primary);
}

input:active {
  border-color: var(--primary);
}

input.error {
  border-color: var(--error);
}
</style>
