<template>
  <nav :class="isScrolled ? 'scrolled' : ''">

    <span id="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </span>

      <router-link to="/"><img alt="logo" class="logo" src="@/assets/logo.png"></router-link>

    <span id="ui-tools">
      <router-link to="/cart"><CartPreview/></router-link>
      <DarkThemeSwitch/>
    </span>

  </nav>
</template>



<script setup>
import DarkThemeSwitch from '@/components/UI/DarkThemeSwitch.vue'
import CartPreview from '@/components/Cart/CartPreview.vue'
import {ref, onMounted, onUnmounted} from 'vue'

const isScrolled = ref(false)

function handleScroll() {
  if (window.scrollY > 10 && !isScrolled.value) {
    isScrolled.value = true
  } else if (window.scrollY <= 10 && isScrolled.value) {
    isScrolled.value = false
  }
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>



<style scoped>
nav {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 4rem;
  font-size: 1.2em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: var(--background);
  transition: background-color 0.5s;
}

nav.scrolled {
  box-shadow: var(--shadow);
}

span {
  display: flex;
  align-items: center;
  line-height: unset;
  width: 40%;
}

span#ui-tools{
  justify-content: end;
  line-height:1em;
}

a {
  text-decoration: none;
  font-weight: bold;
  margin: 0 0.75rem;
  color: var(--text);
}

a:first-child{
  margin-left: 0;
}

#menu a{
  color: var(--textlight);
}
#menu a.router-link-active {
  color: var(--text);
}

.logo {
  display: block;
  height: 50px;
  filter: invert(1);
}

.dark .logo {
  filter: none;
}
</style>
