<template>
  <nav class="container navbar  is-fixed-top ">
    <font-awesome-icon :icon="['fas', 'twitter']" class="icon alt"/>

    <div class="navbar-brand  ">
    <a class="button is-large">
    <span class="icon is-medium">
      <i class="fab fa-github"></i>
    </span>
      <span>({{cartQty}})- {{ cartTotal }}CART</span>
    </a>


  </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cartTotal() {
      let sum = 0
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
    }
  }
}
</script>

<style scoped>

</style>
