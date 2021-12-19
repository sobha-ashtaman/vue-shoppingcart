<template>
  <div class="custom-modal-backdrop">
    <div class="custom-modal">
      <header class="custom-modal-header">
        <h3 class="w-100 text-center">
            <slot name="header">
            This is the default title!
            </slot>
        </h3>
        <button
          type="button"
          class="custom-btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="custom-modal-body">
        <slot name="body">
          This is the default body!
        </slot>
       </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .custom-modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .custom-modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .custom-modal-header,
  .custom-modal-footer {
    padding: 15px;
    display: flex;
  }

  .custom-modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .custom-modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .custom-modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .custom-btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
</style>