
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
  deleteItem(state, product ) {
    this.state.cart.forEach(function (elem, index, object){
      if (elem.product.id === product.product.id){
        if(elem.qty > 1){
          elem.qty--
        } else {
          object.splice(index, 1);
        }
      }
    });
  },

}
