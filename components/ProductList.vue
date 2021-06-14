<template>
  <transition-group name="products" appear>
    <div
      v-for="item in products"
      :key="item.id"
      id="item-list"
      class="columns is-vcentered is-mobile"
    >
      <product :item="item" />
    </div>
  </transition-group>
</template>

<script>
import Product from '/components/Product'
export default {
   components: {
    Product
  },
  data: function() {
    return {
      cart: [],
      products: []
    }
  },
  created() {
    fetch('https://hplussport.com/api/products/order/price')
      .then(response => response.json())
      .then(data => {
        this.products = data
      })
  },
  methods: {
    addItem(product) {
      let whichProduct
      let existing = this.cart.filter(function(item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index
          return true
        } else {
          return false
        }
      })

      if (existing.length) {
        this.cart[whichProduct].qty++
      } else {
        this.cart.push({ product: product, qty: 1 })
      }
    },

  },
  computed: {
    cartTotal() {
      let sum = 0
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty
      }
      return sum
    },
    cartQty: function() {
      let qty = 0
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty
      }
      return qty
    }
  }
}
</script>

<style>
.products-enter-active,
.products-leave-active {
  transition: all 0.5s ease-in-out;
}

.products-enter-from {
  opacity: 0;
  transform: translateX(300px);
}

.products-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>
