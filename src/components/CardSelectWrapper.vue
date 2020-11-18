<template>
  <div class="card-select-wrapper">
    <div class="card-select-wrapper__select">
      <div>Graphic Card</div>
      <CardSelect
        :options="this.cardsTypes"
      />
    </div>
    <div class="card-select-wrapper__select">
      <div>Graphics card line</div>
        <CardSelect
        :options="this.cardsLines"
      />
    </div>

    <div class="card-select-wrapper__select">
      <div>Graphics card model</div>
      <CardSelect 
      :options="this.cardsModels"
      />
    </div>
    <div class="card-select-wrapper__select">
      <div>Number or cards</div>
      <CardCountSelect />
    </div>

  </div>
</template>

<script>
import CardSelect from "@/components/CardSelect.vue";
import CardCountSelect from "@/components/CardCountSelect.vue";
import {mapGetters} from "vuex"

export default {
  name: "CardSelectWrapper",
  props: {
      cardId: Number
  },
  components: {
    CardSelect,
    CardCountSelect
  },
  methods: {

  },
  computed: {
      ...mapGetters(["GET_GRAPHIC_CARD", "GET_CARD_LINE", "GET_CARD_MODEL", "GET_CARD_COUNT","GET_CARDS_TYPES", "GET_CARDS_LINES", "GET_CARDS_MODELS"]),
      graphicCard() {
        return this.GET_GRAPHIC_CARD(this.cardId)
      },
      cardLine() {
        return this.GET_CARD_LINE(this.cardId)
      },
      cardModel() {
        return this.GET_CARD_MODEL(this.cardId)
      },
      cardCount() {
        return this.GET_CARD_COUNT(this.cardId)
      }, 
      cardsTypes() {
          return this.GET_CARDS_TYPES
      },
      cardsLines() {
        return this.GET_CARDS_LINES(this.cardId)
      },
      cardsModels() {
        return this.GET_CARDS_MODELS(this.cardId)
      },
  }
};
</script>

<style lang="scss">
  .card-select-wrapper {
    display: flex;
    background-color: #f5f6fc;

    &__select {
      margin-right: 25px;
    }
  }
</style>