<template>
    <div class="container">
        <div class="row">
            <ProductView :product="product" :quantity="productQuantity" :key="product.id" />
        </div>
    </div>
</template>

<script>
    import ProductView from '../components/products/ProductView.vue'
    import items from '../data/items.js'
    export default {
        name: 'ProductDetails',
        components: {
            ProductView
        },
        data(){
            return{
                items: items,
                product: {},
                productQuantity: 1,
                id: this.$route.params.id,
            }
        },
        mounted(){
            console.log(this.id);
            let item = this.items.find(i => i.id == this.id);
            this.product = item;
            console.log(this.product);
            this.productQuantity = this.$store.getters.productQuantity(this.product);
        }
    }
</script>