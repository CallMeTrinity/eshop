<template>
  <button :disabled="inactive">
    <slot></slot>
  </button>
</template>



<script setup>
const props = defineProps({
  inactive: Boolean
})
</script>



<style scoped>
button {
  padding: 0.5em 1.25em;
  margin-right: 0.5em;
  line-height: 1.2em;
  border-radius: 1.2em;
  border: none;
  font-size: 1.2rem;
  color: var(--white);
  background-color: var(--primary);
  transition: background-color 0.5s, transform 0.05s;
}

button:hover {
  background-color: var(--primary-alt);
  cursor: pointer;
}

button:not([disabled]):active {
  transform: translate(1px, 1px);
}
/** Error **/
button.error {
  background-color: var(--error);
}

button:hover.error{
  background-color: var(--error-alt);
}

/** Secondary **/
button.secondary {
  background-color: var(--secondary);
  color: var(--primary)
}

button:hover.secondary{
  background-color: var(--secondary-alt);

}

button.secondary.error {
  background-color: var(--error-secondary);
  color: var(--error)
}

button:hover.secondary.error{
  background-color: var(--error-secondary-alt);
}

/*** Disabled ***/
button[disabled] {
  background-color: var(--secondary);
  color: var(--secondary-alt);
  cursor: not-allowed;
}

</style>
