<template>
  <nav class="container navbar  is-fixed-top ">
    <div class="navbar-brand  ">
      <nuxt-link :to="{ name: 'cart', params: { slug: cartCurr } }">
    <a class="button is-large">
      <span>({{cartQty}})- {{ cartTotal }}CART</span>
    </a>
      </nuxt-link>
  </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cartTotal() {
      let sum = 0
      if(this.$store.state.cart.length === 0)
        return '$'

      for (let key in this.$store.state.cart) {
        sum = sum + this.$store.state.cart[key].product.price * this.$store.state.cart[key].qty
      }
      return sum + '$'
    },
    cartQty: function() {
      let qty = 0
      for (let key in this.$store.state.cart) {
        qty = qty +  this.$store.state.cart[key].qty
      }
      return qty
    },
    cartCurr: function() {
      return  this.$store.state.cart;
    }
  }
}
</script>

<style scoped>

</style>
