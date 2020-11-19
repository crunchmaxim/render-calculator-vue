import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const gpu = require('./gpu.json')

export default new Vuex.Store({
  state: {
    gpu: gpu,
    currentCards: [
      { id: 0, graphicCard: 'GT', cardLine: '4xx', cardModel: 'GT 420', cardCount: 1 }
    ],
    projectDetails: "static",
    framesCount: "",
    clientRenderTime: {
      hours: "", minutes: ""
    },
    clientBenchmark: "",
    renderTime: "",
    price: "",
    error: ""
  },
  mutations: {
    SET_PROJECT_DETAILS: (state,) => {
      if (state.projectDetails === "static") {
        state.projectDetails = "animation"
      } else {
        state.projectDetails = "static"
      }
    },
    SET_FRAMES: (state, payload) => {
      state.framesCount = payload
    },
    SET_HOURS: (state, payload) => {
      state.clientRenderTime.hours = payload
    },
    SET_MINUTES: (state, payload) => {
      state.clientRenderTime.minutes = payload
    },

    // Change current values for card
    SET_GRAPHIC_CARD: (state, payload) => {
      state.currentCards[payload.cardId].graphicCard = payload.graphicCard
    },
    SET_CARD_LINE: (state, payload) => {
      state.currentCards[payload.cardId].cardLine = payload.cardLine
    },
    SET_CARD_MODEL: (state, payload) => {
      state.currentCards[payload.cardId].cardModel = payload.cardModel
    },
    SET_CARD_COUNT: (state, payload) => {
      state.currentCards[payload.cardId].cardCount = payload.cardCount
    },
    // Add new card
    ADD_NEW_CARD: (state) => {

      if (state.currentCards.length !== 0) {
        let newId = state.currentCards[state.currentCards.length - 1].id + 1
        state.currentCards.push({ id: newId, graphicCard: 'GT', cardLine: '4xx', cardModel: 'GT 420', cardCount: 1 })
      } else {
        state.currentCards = [{ id: 0, graphicCard: 'GT', cardLine: '4xx', cardModel: 'GT 420', cardCount: 1 }]
      }

    },
    // Delete card
    DELETE_CARD: (state, id) => {
      // state.currentCards = state.currentCards.filter(card => card.id !== id)

      let currentCards = []
      state.currentCards.filter(card => card.id !== id).forEach((card, index) => {
        card.id = index
        currentCards.push(card)
      })
      state.currentCards = currentCards

    },

    // Calculate renderTime and price. Add info in console.
    CALCULATE: (state) => {
      // Thwor erros if frames or times not filled
      if (state.framesCount === '' || (state.clientRenderTime.hours === '' && state.clientRenderTime.minutes === '')) {
        return state.error = "Frames, and hours or minutes requred"
      }
      state.error = ''

      // Calculate benchmarks
      let clientBenchmark = 0;
      state.currentCards.forEach(card => {
        clientBenchmark += (state.gpu.benchmark[card.cardModel] * card.cardCount)
      })
      state.clientBenchmark = clientBenchmark

      // Calculate render time
      let hours;
      let minutes;
      state.clientRenderTime.hours === "" ? hours = 0 : hours = (+state.clientRenderTime.hours)
      state.clientRenderTime.minutes === "" ? minutes = 0 : minutes = (+state.clientRenderTime.minutes)
      let clientRenderTime = hours * 60 + minutes
      let renderTime = clientBenchmark/50 * clientRenderTime * state.framesCount
      state.renderTime = renderTime

      // Calculate price
      let price = renderTime*10
      state.price = price

      // Console log final obj
      let models = '';
      state.currentCards.forEach(card => {
        models += card.cardModel + '; '
      })

      let finalObj = {
        models: models,
        benchmark: state.clientBenchmark,
        renderInfo: {
          sceneType: state.projectDetails,
          frameCount: state.framesCount,
          renderTime: state.renderTime
        }
      }
      console.log(finalObj);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    GET_PROJECT_DETAILS: (state) => {
      return state.projectDetails
    },

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
      for (let key in state.gpu.list) {
        cards_types.push({ name: key })
      }
      return cards_types
    },
    GET_CARDS_LINES: (state, getters) => (cardId) => {
      let cards_lines = []

      let graphicCard = getters.GET_GRAPHIC_CARD(cardId)

      for (let key in state.gpu.list[graphicCard]) {
        cards_lines.push({ name: key })
      }

      return cards_lines
    },
    GET_CARDS_MODELS: (state, getters) => (cardId) => {
      let cards_models = []

      let graphicCard = getters.GET_GRAPHIC_CARD(cardId)
      let cardLine = getters.GET_CARD_LINE(cardId)

      for (let key in state.gpu.list[graphicCard].[cardLine]) {
        cards_models.push({ name: state.gpu.list[graphicCard].[cardLine].[key] })
      }

      return cards_models
    },
    // Get all current cards
    GET_CURRENTS_CARDS: (state) => {
      return state.currentCards
    },
    GET_ERROR: (state) => {
      return state.error
    }
  }
})
