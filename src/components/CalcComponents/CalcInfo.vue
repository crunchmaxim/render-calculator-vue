<template>
  <div class="calc-info">
    <img
      class="calc-info__img"
      :src="require('../../assets/caution.png')"
    >
    <div class="calc-info__title">This estimation is approximate. It is based only on comparison of capacity between your PC and our servers.
      Try a free test to get more accurate estimation.</div>
  </div>
</template>

<script>
export default {
  name: "CalcInfo",
};
</script>

<style lang="scss">
  .calc-info {
    margin-top: 7px;
    background: #f5f6fc;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-top: 23px;
    padding-left: 21px;
    min-height: 85px;
    border-radius: 4px;

    &__img {
      height: 30px;
    }

    &__title {
      max-width: 780px;
      margin-left: 17px;
      font-family: "Poppins", sans-serif;
      font-size: 14px;
      color: #ff5f74;
    }
  }

  @media (max-width: 768px) {
    .calc-info {
      background: #fff;
      margin-top: 16px;
      padding-left: 6px;
      padding-right: 6px;
      padding-bottom: 13px;

      &__title {
        font-size: 12px;
      }
    }
  }
</style>