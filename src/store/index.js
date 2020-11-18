import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const gpu = require('./gpu.json')

export default new Vuex.Store({
  state: {
    gpu: gpu,
    currentCards: [
      {id: 0, graphicCard: 'GT', cardLine: '4xx', cardModel: 'GT 420', cardCount: 1 }
    ]
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  },
  getters: {
    // Getting current values for card
    GET_GRAPHIC_CARD: (state) => (cardId) => {
      return state.currentCards[cardId].graphicCard
    },
    GET_CARD_LINE: (state) => (cardId) => {
      return state.currentCards[cardId].cardLine
    },
    GET_CARD_MODEL: (state) => (cardId) => {
      return state.currentCards[cardId].cardModel
    },
    GET_CARD_COUNT: (state) => (cardId) => {
      return state.currentCards[cardId].cardCount
    },
    // Getting options types for cards    
    GET_CARDS_TYPES: (state) => {
      let cards_types = []
      for (let key  in state.gpu.list) {
        cards_types.push({name: key})
      }
      return cards_types
    },
    GET_CARDS_LINES: (state, getters) => (cardId) => {
      let cards_lines = []
      
      let graphicCard = getters.GET_GRAPHIC_CARD(cardId)

      for (let key in state.gpu.list[graphicCard]) {
        cards_lines.push({name: key})
      }

      return cards_lines
    },
    GET_CARDS_MODELS: (state, getters) => (cardId) => {
      let cards_models = []
      
      let graphicCard = getters.GET_GRAPHIC_CARD(cardId)
      let cardLine = getters.GET_CARD_LINE(cardId)

      for (let key in state.gpu.list[graphicCard].[cardLine]) {
        cards_models.push({name: state.gpu.list[graphicCard].[cardLine].[key]})
      }

      return cards_models
    },
  }
})
