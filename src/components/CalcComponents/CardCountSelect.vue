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
        :key="option"
        @click="selectOption(option)"
      >
        {{option}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCountSelect",
  props: {
    optionsType: String,
  },
  data() {
    return {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentOption: "",
      isOpen: false,
    };
  },
  methods: {
    selectOption(option) {
      this.currentOption = option;
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
    this.currentOption = this.options[0];
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

    &__title {
      cursor: pointer;
    }

    &__arrow {
      height: 6px;
    }
  }
</style>