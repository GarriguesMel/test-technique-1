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
.hero-button {
  margin-left: 5px;
  margin-right: 5px;
}
.hero-section {
  display: block;
  padding: 0.25rem;
}
</style>

