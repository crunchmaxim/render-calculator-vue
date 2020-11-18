<template>
  <div class="card-select">
    <div @click="isOpen = !isOpen" class="card-select__title">{{currentOption}}<img class="card-select__arrow" :src="require('../assets/vector.png')"> </div>
    <div class="option" v-if="isOpen">
      <p
        class="card-select__option"
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
  },
  data() {
    return {
      currentOption: '',
      isOpen: false
    };
  },
  methods: {
    selectOption(option) {
      this.currentOption = option.name
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
    this.currentOption = this.options[0].name
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

    &__title {
      cursor: pointer;
    }

    &__arrow {
      margin-left: 75px;
      height: 6px;
    }
  }
</style>