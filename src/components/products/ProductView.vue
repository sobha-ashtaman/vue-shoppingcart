<template>
    <div class="row">
        <div class="col">
            <img :src="product.image" />
        </div>
        <div class="col text-start">
            <div v-html="product.description"></div>
            <p class="text-muted w-100 mb-2">Category: {{product.category}}</p>
            <p class="w-100 text-success">Price: ${{product.price}}</p>
            <div class="counter-holder">
                <button class="btn btn-sm btn-success p-2 mr-2" :disabled="counter<=1"  @click="decrement">-</button>
                <div class="counter">{{counter}}</div>
                <button class="btn btn-sm btn-success p-2 mr-2" @click="increment">+</button>
                <button class="btn btn-primary ms-3" @click="addToCart">Add to Cart</button>
            </div>
            <div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'ProductView',
        props: ['product', 'quantity'],
        data(){
            return {
               counter: this.quantity,
            }
        },
        methods: {
            increment(){
                this.counter++;
            },
            decrement(){
                this.counter--;
            },
            addToCart(){
                let storeProduct = this.product;
                let item = this.$store.state.cart.find(i=> i.id == storeProduct.id);
                if(item)
                {
                    item.quantity = this.counter;
                    storeProduct = item;
                }
                else{
                    storeProduct.quantity = this.counter;
                }
                this.$store.commit('addToCart', storeProduct);
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
}
</style>