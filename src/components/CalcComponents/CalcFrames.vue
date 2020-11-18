<template>
  <div class="frames">
    <div class="frames__wrapper frames__number-wrapper">
      <div class="frames__title">Number of frames</div>
      <input
        class="input"
        type="text"
        placeholder="1"
      >
    </div>
    <div class="frames__wrapper">
      <div class="frames__title">Average render time per frame on your PC</div>
      <div class="frames__time-inputs">
        <input
          class="input input_hours"
          type="text"
          placeholder="Hours"
        >
        <input
          class="input"
          type="text"
          placeholder="Minutes"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalcFrames",
};
</script>

<style lang="scss">
  .frames {
    margin-top: 7px;
    height: 109px;
    border-radius: 4px;
    background-color: #f5f6fc;
    padding-top: 14px;
    padding-left: 22px;
    display: flex;

    &__title {
      font-size: 14px;
      margin-bottom: 11px;
    }

    &__number-wrapper {
      margin-right: 100px;
    }

    &__line {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .frames {
      background-color: #fff;
      margin-top: 0;
      position: relative;
      flex-direction: column;
      height: 100%;
      padding: 0 20px;

      &__title {
        text-align: center;
        font-weight: 700;
        margin: 0 auto;
        margin-bottom: 16px;
        margin-top: 14px;
        text-align: left;
      }

      &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 80%;
        border-top: 1px solid rgba(28, 92, 237, 0.1);
      }

      &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__time-inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      &__number-wrapper {
        margin-right: 0;
      }
    }

    .input_hours {
      margin-bottom: 16px;
    }
  }
</style>