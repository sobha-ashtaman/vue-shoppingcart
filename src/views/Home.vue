<template>
  <div class="container">
    <div class="row">
      <ProductCard v-for="product in items" :key="product.id" :product="product" v-on:view-product="viewProduct($event)" />
    </div>
  </div>
  <Modal v-show="isModalVisible" @close="closeModal">
    <template v-slot:header v-if="product">
      {{product.name}}
    </template>

    <template v-slot:body>
      <div v-if="product">
        <ProductView :product="product" :quantity="productQuantity" :key="product.id" />
      </div>
    </template>

  </Modal>
</template>

<script>
import items from '../data/items.js'
import ProductCard from '../components/products/ProductCard.vue'
import Modal from '../components/Modal.vue'
import ProductView from '../components/products/ProductView.vue'

export default {
  name: 'Home',
  components: {
    ProductCard, Modal, ProductView
  },
  data(){
    return{
      items: items,
      product: null,
      productQuantity: 1,
      isModalVisible: false,
    }
  },
  methods: {
    viewProduct(product){
      this.product = product;
      this.productQuantity = this.$store.getters.productQuantity(this.product);
      this.showModal();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
