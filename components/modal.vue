<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">

            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">

            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "custom-modal",
}
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      max-width: 1500px;
      width: 70vw;
      max-height: 95vh;
      height: auto;
      margin: 0 auto;
      padding: 20px 30px;
      background-color: white;
      border-radius: 15px;
      box-shadow: 0 0 1px rgba(12, 26, 75, 0.03), 0 4px 20px -2px rgba(50, 50, 71, 0.04);
      transition: all 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      color: black;

      .modal-header {
        padding: 0 15px;
        height: 64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      }

      .modal-body {
        padding: 0 20px;
        display: block;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: auto;
        min-height: 370px;
        overflow-y: auto;
      }

      .modal-footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 64px;
      }
    }
  }
}
.close-modal {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;

  i {
    color: black!important;
    font-size: 36px;
  }
}
</style>
