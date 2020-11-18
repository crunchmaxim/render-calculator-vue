<template>
  <div class="card-select">
    <div @click="isOpen = !isOpen" class="card-select__title">{{currentOption}}<img class="card-select__arrow count" :src="require('../assets/vector.png')"> </div>
    <div class="option" v-if="isOpen">
      <p
        class="card-select__option"
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
//   props: {
//     options: Array,
//   },
  data() {
    return {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentOption: '',
      isOpen: false
    };
  },
  methods: {
    selectOption(option) {
      this.currentOption = option
      this.isOpen = false;
    }
  },
  watch: {
    currentOption() {
      const optionInfo = {
        options_type: this.options_type,
        optionName: this.currentOption
      }
      this.$emit('changeTypes', optionInfo)
    }
  },
  mounted() {
    this.currentOption = this.options[0]
  }
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
    // padding-right: 14px;

    &__title {
      cursor: pointer;
    }

    &__arrow {
      height: 6px;

      &.count {
          margin-left: 95px;
      }
    }
  }
</style>