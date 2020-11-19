<template>
  <div class="side-menu">
    <div class="side-menu__item active">
      <img :src="require('../assets/menu-icons/menu-item-1.png')">
      <span class="side-menu__item-border active"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-2.png')">
      <span class="side-menu__item-border"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-3.png')">
      <span class="side-menu__item-border"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-4.png')">
      <span class="side-menu__item-border"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-5.png')">
      <span class="side-menu__item-border"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-6.png')">
      <span class="side-menu__item-border"></span>
    </div>
    <div class="side-menu__item">
      <img :src="require('../assets/menu-icons/menu-item-7.png')">
      <span class="side-menu__item-border"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
};
</script>

<style lang="scss">
  .side-menu {
    height: 549px;
    width: 100px;
    background-color: #fff;
    padding: 20px 0 100px 0;
    position: absolute;
    top: 82px;
    left: 0;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      position: relative;
      cursor: pointer;

      &:hover {
        background-color: #f5f6fc;
      }

      &.active {
        background-color: #f5f6fc;
      }
    }

    &__item-border {
      display: none;
      position: absolute;
      right: 0;
      height: 100%;
      width: 3px;
      background: #526ae5;
      float: right;
      border-radius: 4px;

      &.active {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    .side-menu {
      display: none;
    }
  }
</style>