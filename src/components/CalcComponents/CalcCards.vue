<template>
  <div class="calc-cards">
    <div class="calc-cards__title">Your PC</div>
    <div
      v-for="card in currentCards"
      :key="card.id"
      class="calc-cards__wrap"
    >
      <CardSelectWrapper :cardId="card.id" />
    </div>
    <div
      class="add-card"
      @click="addCard"
    >
      <span>Add another type card <img
          class="add-card__img"
          :src="require('../../assets/add_circle.png')"
          alt=""
        ></span>
    </div>
    <div class="calc-cards__calculate">
      <button
        @click="makeCalculate"
        class="calc-cards__calculate-btn"
      >Calculate</button>
    </div>
  </div>
</template>

<script>
import CardSelectWrapper from "@/components/CalcComponents/CardSelectWrapper.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CalcCards",
  components: {
    CardSelectWrapper,
  },
  methods: {
    ...mapMutations(["ADD_NEW_CARD", "CALCULATE"]),
    addCard() {
      this.ADD_NEW_CARD();
    },
    makeCalculate() {
      this.CALCULATE();
    },
  },
  computed: {
    ...mapGetters(["GET_CURRENTS_CARDS"]),
    currentCards() {
      return this.GET_CURRENTS_CARDS;
    },
  },
};
</script>

<style lang="scss">
  .calc-cards {
    background-color: #f5f6fc;
    margin-top: 7px;
    padding-top: 28px;
    padding-left: 21px;
    padding-bottom: 20px;
    min-height: 200px;
    border-radius: 4px;

    &__title {
      margin-bottom: 14px;
    }

    &__calculate-btn {
      width: 179px;
      height: 40px;
      background: #526ae5;
      border-radius: 46px;
      box-shadow: -5px -5px 10px #fafbff, 5px 5px 10px #a6abbd;
      border: none;
      color: #fff;
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      font-weight: 600;
      display: block;
      margin: 0 auto;
      cursor: pointer;
      outline: none;
    }
  }

  .add-card {
    display: flex;

    & span {
      display: flex;
      cursor: pointer;
    }

    &__img {
      margin-left: 15px;
    }
  }

  @media (max-width: 1200px) {
    .calc-cards {
      padding-top: 10px;
      background-color: #fbfbfb;
      padding-left: 0;
      &__title {
        font-weight: 700;
        text-align: center;
        margin-bottom: 0;
        padding: 10px 0;
        background-color: #f5f6fc;
      }

      &__wrap {
        margin-top: 16px;
      }

      &__calculate {
        background-color: #f5f6fc;
        padding-bottom: 20px;
        padding-top: 20px;
      }
    }

    .add-card {
      background-color: #f5f6fc;
      display: flex;
      justify-content: center;
    }

    .calc-cards .calc-cards__wrap:nth-child(2) {
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
    .calc-cards {
      margin-top: 16px;
      padding: 0;
      background-color: #f5f6fc;

      &__title {
        background-color: #fff;
      }

      &__calculate {
        background: #fff;
      }
    }

    .add-card {
      background: #fff;
    }
  }
</style>