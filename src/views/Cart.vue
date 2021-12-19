<template>
    <div class="container">
        <div class="row">
            <h1>Your Cart</h1>
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="items.length>0">
                        <tr  v-for="product in items" :key="product.id">
                            <th><router-link :to="'/product/' + product.id">{{product.name}}</router-link></th>
                            <td>
                                <div class="counter-holder">
                                    <button class="btn btn-sm btn-success p-2 mr-2" @click="decrementCartQuantity(product)">-</button>
                                    <div class="counter">{{product.quantity}}</div>
                                    <button class="btn btn-sm btn-success p-2 mr-2" @click="incrementCartQuantity(product)">+</button>
                                </div>
                            </td>
                            <td>${{product.quantity*product.price}}</td>
                            <td><button class="btn btn-sm btn-secondary" @click="removeFromCart(product)">Remove</button></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td colspan="3" class="text-center">${{cartTotal}}</td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="4">
                                <p class="text-center text-danger">No items found in cart!</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data(){
        return{
            items: this.$store.state.cart,
            cartTotal: this.$store.getters.cartTotal,
        }
    },
    methods: {
        incrementCartQuantity(product){
            this.$store.commit('incrementCartQuantity', product);
            this.cartTotal = this.$store.getters.cartTotal;
        },
        decrementCartQuantity(product){
            this.$store.commit('decrementCartQuantity', product);
            this.cartTotal = this.$store.getters.cartTotal;
        },
        removeFromCart(product){
            this.$store.commit('removeFromCart', product);
            this.cartTotal = this.$store.getters.cartTotal;
        }
    }
}
</script>

<style>
.counter{
    float: left;
    width: 50px;
    text-align: center;
    padding: 8px;
}

.counter-holder{
    display: flex;
    justify-content: center;
}
</style>