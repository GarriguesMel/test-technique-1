
<template>
  <div class="container">
    <h1>Checkout</h1>
    <table class="table is-fullwidth ">
      <caption class="text-right h3">
        <b>Total:</b>
        Total {{cartTotal}}
      </caption>
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Item</th>
        <th scope="col">Qty</th>
        <th scope="col">Price</th>
        <th scope="col">Sub-total</th>
      </tr>
      </thead>
      <tbody>


      <tr v-for="item in this.$store.state.cart"  :key="item.product.id">

        <td class="has-text-centered">
          <div class="btn-group" role="group" aria-label="">
            <button @click="Add(item)"  class="button  is-success">
              +
            </button>
            <button @click="Del(item)" class="button is-outlined">
              -
            </button>
          </div>
        </td>
        <th scope="row">{{ item.product.name }}</th>
        <td>{{ item.qty }}</td>
        <td>
          {{ item.product.price }}
        </td>
        <td>
          {{ item.qty * item.product.price }}
        </td>

      </tr>
      </tbody>
    </table>
    <router-link class="button button-success" to="/"
    >Keep Shopping</router-link
    >
  </div></template
>

<script>
export default {
  name: "cart",
  computed: {
    cartTotal() {
      let sum = 0
      for (let key in this.$store.state.cart) {
        sum = sum + this.$store.state.cart[key].product.price * this.$store.state.cart[key].qty
      }
      return sum + '$'
    },
  },
  methods: {
    Add(item){
      console.log(item)
      this.$store.commit('addItem', item.product)
    },
    Del(item){
      this.$store.commit('deleteItem', item)
    }
  }
}
</script>

<style></style>
