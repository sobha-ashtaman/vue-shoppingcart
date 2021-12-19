import { createStore } from 'vuex'

function updateLocalStorage(cart)
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state)=>(product)=>{
      let item = state.cart.find(i => i.id === product.id);
      if(item)
        return item.quantity;
      else
        return 1;
    },
    cartTotal: (state)=>{
      let cartTotalPrice = 0;
      state.cart.forEach(function(item){
        cartTotalPrice += item.quantity*item.price;
      });
      return cartTotalPrice;
    }
  },
  mutations: {
    addToCart(state, product){
      let index = state.cart.findIndex(i=> i.id == product.id)
      if(index > -1)
        state.cart[index] = product;
      else
      {
        state.cart.push(product);
      }
      updateLocalStorage(state.cart);
      alert('Cart updated');
    },
    incrementCartQuantity(state, product){
      let index = state.cart.findIndex(i=> i.id == product.id);
      state.cart[index].quantity = state.cart[index].quantity+1;
      updateLocalStorage(state.cart);
    },
    decrementCartQuantity(state, product){
      let index = state.cart.findIndex(i=> i.id == product.id);
      state.cart[index].quantity = state.cart[index].quantity-1;
      if(state.cart[index].quantity <=0)
        state.cart.splice(index, 1)
      updateLocalStorage(state.cart);
    },
    removeFromCart(state, product){
      let index = state.cart.findIndex(i=> i.id == product.id);
      state.cart.splice(index, 1)
      updateLocalStorage(state.cart);
    },
    updateFromLocalStorage(state){
      const cart = localStorage.getItem('cart');
      if(cart){
        state.cart = JSON.parse(cart);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
