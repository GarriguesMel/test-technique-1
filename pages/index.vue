<template>
  <section class="container">
    <product-list :products="products" />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
  name: 'Home',
  data: function() {
    return {
      cart: []
    }
  },
  props: ['products'],
  components: {
    ProductList
  },
}
</script>

<style>


</style>

