<template>
  <div class="calc-renderer">
    <div class="calc-renderer__title">Your renderer</div>
    <div class="calc-renderer__img-wrapper">
      <img
        class="calc-renderer__img"
        :src="require('../../assets/octane.png')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcRenderer",
};
</script>

<style lang="scss">
  .calc-renderer {
    padding-top: 8px;
    width: 100%;
    height: 144px;
    background-color: #f5f6fc;
    border-radius: 4px;

    &__title {
      margin-top: 8px;
      margin-left: 21px;
      font-size: 16px;
      font-weight: 700;
    }

    &__img-wrapper {
      height: 106px;
      width: 138px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    .calc-renderer {
      background-color: #fff;
      padding-top: 21px;
      padding-bottom: 25px;

      &__title {
        text-align: center;
      }

      &__img-wrapper {
        box-shadow: 0px 4px 50px rgba(28, 92, 237, 0.1);
      }
    }
  }
</style>