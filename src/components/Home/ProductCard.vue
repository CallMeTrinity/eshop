<template>
  <li>
    <img :src="product.picture"/>
    <div class="footer">
      <span class="name">{{product.name}}</span>
      <span class="description">{{getSmallDescription(product.description)}}</span>
      <span class="price">{{product.price.euro}}</span>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  product:Object
})
function getSmallDescription (description) {
  if (description.length > 20) {
    return description.slice(0, 20) + '...'
  }
  return description
}
</script>

<style scoped>

li {
  list-style: none;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 3 / 4;
  box-shadow: var(--light-shadow);
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}

li:hover {
  box-shadow: var(--shadow);
}

li img {
  object-fit: cover;
  width: 100%;
  aspect-ratio: 3 / 4;
}

a {
  color: var(--text);
}

.footer {
  position: absolute;
  bottom: 0;
  height: 5rem;
  width: 100%;
  margin: 0;
  padding: 0.5rem 1rem;

  display: grid;
  grid-template-areas:
    'name price'
    'desc price';

  background: var(--background-transparent);
}

.name {
  grid-area: name;
  font-weight: bold;
  font-size: larger;
}

.description {
  grid-area: desc;
}

.price {
  grid-area: price;
  font-weight: bolder;
  font-size: larger;
  text-align: center;
  align-self: center;
}
</style>
