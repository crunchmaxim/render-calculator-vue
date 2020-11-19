<template>
  <div class="details">
    <div class="details__title">
      Specify your project details
    </div>
    <div class="details__checkboxes">
      <div class="details__checkbox-wrapper">
        <label for="animation">Animation</label>
        <input
          class="details__checkbox"
          type="checkbox"
          id="animation"
          name="animation"
          v-model="animationChecked"
          @change="changeAnimation"
        >
        <span class="details__radio"></span>
      </div>
      <div class="details__checkbox-wrapper">
        <label for="static">Still </label>
        <input
          v-model="staticChecked"
          @change="changeStatic"
          class="details__checkbox"
          type="checkbox"
          id="static"
          name="static"
        >
        <span class="details__radio"></span>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CalcProjectDetails",
  data() {
    return {
      animationChecked: "",
      staticChecked: "",
    };
  },
  methods: {
    ...mapMutations(["SET_PROJECT_DETAILS"]),
    changeAnimation() {
      this.staticChecked = !this.staticChecked
      this.SET_PROJECT_DETAILS()
    },
    changeStatic() {
      this.animationChecked = !this.animationChecked
      this.SET_PROJECT_DETAILS()
    },
  },
  mounted() {
    if (this.projectDetails === "static") {
      this.animationChecked = false;
      this.staticChecked = true;
    } else if (this.projectDetails === "animation") {
      this.animationChecked = true;
      this.staticChecked = false;
    }
  },
  computed: {
    ...mapGetters(["GET_PROJECT_DETAILS"]),
    projectDetails() {
      return this.GET_PROJECT_DETAILS;
    },
  },
};
</script>

<style lang="scss">
  .details {
    margin-top: 7px;
    background-color: #f5f6fc;
    border-radius: 4px;
    padding-top: 21px;
    padding-left: 22px;
    height: 109px;

    &__title {
      font-size: 16px;
      margin-bottom: 25px;
    }

    &__checkboxes {
      display: flex;
    }

    &__checkbox-wrapper {
      margin-right: 90px;
      display: flex;
      align-items: center;

      & label {
        margin-right: 20px;
        cursor: pointer;
        font-size: 14px;
      }
    }

    &__checkbox {
      display: none;
    }

    &__radio {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid rgba(28, 92, 237, 0.1);
      background: #fff;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #526ae5;
        opacity: 0;
        transition: 0.2s;
      }
    }

    .details__checkbox:checked + .details__radio::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .details {
      background-color: #fff;
      padding-top: 21px;
      margin-top: 0;
      height: 140px;

      &__title {
        text-align: center;
        font-weight: 700;
      }

      &__checkboxes {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__checkbox-wrapper {
        margin-top: 20px;
      }

      &__checkbox-wrapper:last-child {
        margin-right: 45px;
      }
    }
  }
</style>