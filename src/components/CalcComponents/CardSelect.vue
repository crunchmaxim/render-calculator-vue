<template>
  <div class="card-select">
    <div
      @click="isOpen = !isOpen"
      class="card-select__title"
    >{{currentOption}}<img
        class="card-select__arrow"
        :src="require('../../assets/vector.png')"
      > </div>
    <div
      class="card-select__option"
      v-if="isOpen"
    >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSelect",
  props: {
    options: Array,
    optionsType: String,
  },
  data() {
    return {
      currentOption: this.options[0].name,
      isOpen: false,
    };
  },
  methods: {
    selectOption(option) {
      this.currentOption = option.name;
      this.isOpen = false;
    },
  },
  watch: {
    currentOption() {
      const optionsInfo = {
        optionsType: this.optionsType,
        optionName: this.currentOption,
      };
      this.$emit("changeOptions", optionsInfo);
    },
  },
  mounted() {
    this.currentOption = this.options[0].name;
  },
};
</script>

<style lang="scss">
  .card-select {
    position: relative;
    width: 156px;
    min-height: 45px;
    border-radius: 4px;
    background: #fff;
    padding-top: 13px;
    padding-left: 14px;
    margin-top: 7px;

    &__option {
      position: absolute;
      background: #fff;
      width: 156px;
      left: 0px;
      top: 52px;
      padding-left: 14px;
      z-index: 2;
    }

    &__title {
      cursor: pointer;
      position: relative;
      margin-top: 5px;
    }

    &__arrow {
      margin-left: 75px;
      height: 6px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  @media (max-width: 768px) {
    .card-select {
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);

      &__option {
        box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
      }
    }
  }
</style>