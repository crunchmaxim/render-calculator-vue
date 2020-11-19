<template>
  <div class="frames">
    <div class="frames__wrapper frames__number-wrapper">
      <div class="frames__title">Number of frames</div>
      <input
        class="input"
        type="number"
        placeholder="1"
        v-model="frames"
        min="0"
        @change="changeFrames"
      >
    </div>
    <div class="frames__wrapper">
      <div class="frames__title">Average render time per frame on your PC</div>
      <div class="frames__time-inputs">
        <input
          class="input input_hours"
          type="number"
          placeholder="Hours"
          v-model="hours"
          min="0"
          @change="changeHours"
        >
        <input
          class="input"
          type="number"
          placeholder="Minutes"
          v-model="minutes"
          min="0"
          @change="changeMinutes"
        >
      </div>
    </div>
    <div
      class="frames__error"
      v-if="error !== ''"
    >
      <img
        :src="require('../../assets/caution.png')"
        alt=""
      >{{error}}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "CalcFrames",
  data() {
    return {
      frames: "",
      hours: "",
      minutes: "",
    };
  },
  methods: {
    ...mapMutations(["SET_FRAMES", "SET_HOURS", "SET_MINUTES"]),
    changeFrames() {
      this.SET_FRAMES(this.frames);
    },
    changeHours() {
      this.SET_HOURS(this.hours);
    },
    changeMinutes() {
      this.SET_MINUTES(this.minutes);
    },
  },
  computed: {
    ...mapGetters(["GET_ERROR"]),
    error() {
      return this.GET_ERROR;
    },
  },
};
</script>

<style lang="scss">
  .frames {
    margin-top: 7px;
    height: 135px;
    border-radius: 4px;
    background-color: #f5f6fc;
    padding-top: 14px;
    padding-left: 22px;
    padding-bottom: 20px;
    display: flex;
    position: relative;

    &__error {
      position: absolute;
      color: #ff5f74;
      display: flex;
      bottom: 15px;
      margin-top: 20px;

      & img {
        margin-right: 10px;
        height: 20px;
      }
    }

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
      padding-bottom: 60px;

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