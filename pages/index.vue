<template>
  <section class="container">
    <Header></Header>

    <product-list :products="products" />
  </section>
</template>

<script>
import ProductList from '@/components/ProductList'
import Header from '@/components/Header/Header';

export default {
  name: 'Home',
  data: function() {
    return {
      cart: []
    }
  },
  props: ['products'],
  components: {
    ProductList,
    Header
  },
}
</script>

<style>


</style>

