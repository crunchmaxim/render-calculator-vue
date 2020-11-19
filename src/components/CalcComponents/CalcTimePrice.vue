<template>
  <div class="time-price">
    <div class="time-price__input-wrapper">
      <div class="time-price__input-title">Render time</div>
      <input
        class="input time"
        type="text"
        readonly
      >
    </div>
    <div class="time-price__input-wrapper">
      <div class="time-price__input-title">Price</div>
      <input
        class="input price"
        type="text"
        readonly
      >
      <img
        class="time-price__warning"
        :src="require('../../assets/warning.png')"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcTimePrice",
};
</script>

<style lang="scss">
  .time-price {
    background: #f5f6fc;
    padding-left: 21px;
    min-height: 204px;
    padding-top: 42px;
    border-radius: 4px;

    &__input-wrapper {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-top: 11px;
    }

    &__input-title {
      color: #526AE5;
    }

    &__warning {
      cursor: pointer;
    }
  }

  .input.time,
  .input.price {
    margin-left: 450px;
    width: 336px;
    border: 1px solid #dfe2e6;
  }

  .input.price {
    margin-left: 504px;
  }

  @media (max-width: 1200px) {
    .time-price {
      padding-left: 0;

      &__input-wrapper {
        flex-direction: column;
      }

      &__warning {
        display: none;
      }
    }

    .input.time,
    .input.price {
      margin: 0;
    }
  }

    @media (max-width: 768px) {
    .time-price {
      background: #fff;
      margin-top: 16px;

      &__input-title {
        width: 85%;
        text-align: left;
      }
    }

    .input.time,
    .input.price {
      width: 80%;
    }
  }
</style>