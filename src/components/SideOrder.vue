<template>
  <div class="side-order">
    <img :src="require('../assets/side-order.png')">
  </div>
</template>

<script>
export default {
  name: "SideOrder",
};
</script>

<style lang="scss">
  .side-order {
    position: absolute;
    left: 120px;
    top: 345px;
  }

  @media (max-width: 768px) {
    .side-order {
      display: none;
    }
  }
</style>