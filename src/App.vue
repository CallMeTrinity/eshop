<template>
  <NavbarComponent/>
  <main>
    <RouterView/>
  </main>
  <FooterComponent/>
</template>



<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import store from "@/store";
import {computed, provide, watch} from "vue";

const dark = computed(() => store.dark)

watch(dark, () => {
  if (store.dark) {
    document.getElementById('app').classList.add('dark')
  } else {
    document.getElementById('app').classList.remove('dark')
  }
})


const data = {
  1: {
    id: 1,
    name: 'Yåanndörd',
    description: 'This chair is so amazing that you will sleep in it.',
    price: {
      euro: 100,
      dollar: 150
    },
    picture: '/images/chaise1.png',
    type: 'chair',
    url: '/product/1'
  },
  2: {
    id: 2,
    name: 'Baddindörd',
    description: 'This chair is really bad, but, fancy.',
    price: {
      euro: 150,
      dollar: 250
    },
    picture: '/images/chaise2.png',
    type: 'chair'
  },
  3: {
    id: 3,
    name: 'Le tabouret',
    description: 'A classique french stool.',
    price: {
      euro: 10,
      dollar: 1250
    },
    picture: '/images/chaise3.png',
    type: 'chair'
  },
  4: {
    id: 4,
    name: 'Smållykko',
    description: 'A small shelf.',
    price: {
      euro: 10,
      dollar: 12.50
    },
    picture: '/images/etagere1.png',
    type: 'shelf'
  },
  5: {
    id: 5,
    name: 'Bykkö',
    description: 'A big shelf.',
    price: {
      euro: 100,
      dollar: 125
    },
    picture: '/images/etagere2.jpg',
    type: 'shelf'
  },
  6: {
    id: 6,
    name: 'Svåkklegind',
    description: 'A shelf with legs.',
    price: {
      euro: 80,
      dollar: 90
    },
    picture: '/images/etagere3.png',
    type: 'shelf'
  },
  7: {
    id: 7,
    name: 'Myüro',
    description: 'A wall mounted shelf.',
    price: {
      euro: 40,
      dollar: 30
    },
    picture: '/images/etagere4.jpg',
    type: 'shelf'
  },
  8: {
    id: 8,
    name: 'Skärenka',
    description: 'Half a sofa.',
    price: {
      euro: 400,
      dollar: 300
    },
    picture: '/images/sofa1.png',
    type: 'sofa'
  },
  10: {
    id: 10,
    name: 'Iröildi',
    description: 'Round-ish sofa.',
    price: {
      euro: 1200,
      dollar: 500
    },
    picture: '/images/sofa2.jpg',
    type: 'sofa'
  },
  12: {
    id: 12,
    name: 'Yisjelkå',
    description: 'Why do we keep showing only half of the sofa?',
    price: {
      euro: 300,
      dollar: 200
    },
    picture: '/images/sofa3.png',
    type: 'sofa'
  },
  13: {
    id: 13,
    name: 'Dayduy',
    description: 'Not the chair nor the table.',
    price: {
      euro: 600,
      dollar: 700
    },
    picture: '/images/TelephoneRose.jpg',
    type: 'phone'
  }
}

function currencyToSymbol(currency) {
  switch (currency) {
    case 'euro':
      return '€'
    case 'dollar':
      return '$'
  }
}

provide('data', data)
provide('currencyToSymbol', currencyToSymbol)
</script>



<style scoped>
main {
  margin-top: 4rem;
  padding: 0 2rem;
  min-height: calc(100vh - 250px - 4rem);
}
</style>
