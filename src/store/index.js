import {reactive} from 'vue'


const store = reactive({
  dark: false,
  cart: {},
  currency: 'euro',
})

export default store
