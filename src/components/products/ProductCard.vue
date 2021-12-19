<template>
    <div class="col">
        <div class="card mb-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"><router-link :to="'/product/'+product.id">{{product.name}}</router-link></h5>
                <h6 class="card-subtitle mb-2 text-muted">Price : ${{product.price}}</h6>
                <p class="card-text mb-2">{{description}}</p>
                <h7 class="card-subtitle text-muted clearfix">Category : {{product.category}}</h7>
                <button class="btn btn-sm btn-success mt-2" @click="$emit('view-product', product)">Quick View</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['product'],
        computed: {
            description(){
                return this.product.description.substring(0, 150);
            }
        }
    }
</script>