export const state = () => ({
  cart: []
})

export const mutations = {
  addItem(state, product) {
    let whichProduct
    let existing =  state.cart.filter(function(item, index) {
      if (item.product.id == Number(product.id)) {
        whichProduct = index
        return true
      } else {
        return false
      }
    })

    if (existing.length) {
      state.cart[whichProduct].qty++
    } else {
      state.cart.push({ product: product, qty: 1 })
    }
  },
  remove(state, { todo }) {
    state.cart.splice(state.cart.indexOf(todo), 1)
  },
}
