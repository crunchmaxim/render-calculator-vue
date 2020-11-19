<template>
  <div class="card-select-wrapper">
    <div class="card-select-wrapper__select">
      <div>Graphic Card</div>
      <CardSelect
        :options="this.cardsTypes"
        optionsType="cards"
        v-on:changeOptions="changeOptions"
      />
    </div>
    <div class="card-select-wrapper__select">
      <div>Graphics card line</div>
      <CardSelect
        :options="this.cardsLines"
        optionsType="lines"
        v-on:changeOptions="changeOptions"
      />
    </div>

    <div class="card-select-wrapper__select">
      <div>Graphics card model</div>
      <CardSelect
        :options="this.cardsModels"
        optionsType="models"
        v-on:changeOptions="changeOptions"
      />
    </div>
    <div class="card-select-wrapper__select">
      <div>Number or cards</div>
      <CardCountSelect
        optionsType="count"
        v-on:changeOptions="changeOptions"
      />
    </div>
    <div
      class="card-select-wrapper__delete"
      @click="deleteCard"
    >
      <img :src="require('../../assets/delete_circle.png')">
    </div>
    <div
      class="card-select-wrapper__delete-mobile"
      @click="deleteCard"
    >
      <img :src="require('../../assets/close.png')">
    </div>
  </div>
</template>

<script>
import CardSelect from "@/components/CalcComponents/CardSelect.vue";
import CardCountSelect from "@/components/CalcComponents/CardCountSelect.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "CardSelectWrapper",
  props: {
    cardId: Number,
  },
  components: {
    CardSelect,
    CardCountSelect,
  },
  methods: {
    ...mapMutations([
      "SET_GRAPHIC_CARD",
      "SET_CARD_LINE",
      "SET_CARD_MODEL",
      "SET_CARD_COUNT",
      "DELETE_CARD",
    ]),
    changeOptions(optionsInfo) {
      if (optionsInfo.optionsType === "cards") {
        const payload = {
          cardId: this.cardId,
          graphicCard: optionsInfo.optionName,
        };
        this.SET_GRAPHIC_CARD(payload);
      } else if (optionsInfo.optionsType === "lines") {
        const payload = {
          cardId: this.cardId,
          cardLine: optionsInfo.optionName,
        };
        this.SET_CARD_LINE(payload);
      } else if (optionsInfo.optionsType === "models") {
        const payload = {
          cardId: this.cardId,
          cardModel: optionsInfo.optionName,
        };
        this.SET_CARD_MODEL(payload);
      } else if (optionsInfo.optionsType === "count") {
        const payload = {
          cardId: this.cardId,
          cardCount: optionsInfo.optionName,
        };
        this.SET_CARD_COUNT(payload);
      }
    },
    deleteCard() {
      this.DELETE_CARD(this.cardId);
    },
  },
  computed: {
    ...mapGetters([
      // "GET_GRAPHIC_CARD",
      // "GET_CARD_LINE",
      // "GET_CARD_MODEL",
      // "GET_CARD_COUNT",
      "GET_CARDS_TYPES",
      "GET_CARDS_LINES",
      "GET_CARDS_MODELS",
    ]),
    // graphicCard() {
    //   return this.GET_GRAPHIC_CARD(this.cardId);
    // },
    // cardLine() {
    //   return this.GET_CARD_LINE(this.cardId);
    // },
    // cardModel() {
    //   return this.GET_CARD_MODEL(this.cardId);
    // },
    // cardCount() {
    //   return this.GET_CARD_COUNT(this.cardId);
    // },
    cardsTypes() {
      return this.GET_CARDS_TYPES;
    },
    cardsLines() {
      return this.GET_CARDS_LINES(this.cardId);
    },
    cardsModels() {
      return this.GET_CARDS_MODELS(this.cardId);
    },
  },
};
</script>

<style lang="scss">
  .card-select-wrapper {
    display: flex;
    margin-bottom: 30px;

    &__select {
      margin-right: 25px;
    }

    &__delete {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      cursor: pointer;
    }

    &__delete-mobile {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    .card-select-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-top: 16px;
      margin-bottom: 0;
      // background-color: #fff;
      padding: 20px 0;
      border-radius: 4px;
      background-color: #f5f6fc;
      border-radius: 4px;
      position: relative;

      &__delete {
        display: none;
      }

      &__delete-mobile {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        width: 26px;
        height: 26px;
        box-shadow: 0px 4px 20px rgba(28, 92, 237, 0.1);
        top: 10px;
        right: 10px;
      }
      
      &__select {
        margin-top: 17px;
      }
    }
  }

  @media (max-width: 768px) {
    .card-select-wrapper {
      background: #fff;
      // padding: 20px 0;
      // border-radius: 4px;
    }
  }
</style>