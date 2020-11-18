<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <CalcWrapper />
      <CardSelectWrapper :cardId=0 />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CalcWrapper from "@/components/CalcWrapper.vue";
import CardSelectWrapper from "@/components/CardSelectWrapper.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CalcWrapper,
    CardSelectWrapper
  },
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@300;400;600;700&display=swap");

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    // font-family: "Poppins", sans-serif;
    color: #595d6e;
  }

  .container {
    padding-top: 100px;
    padding-left: 172px;
    padding-right: 57px;
    background: #fbfbfb;

    /////
    height: 1000px;
  }

  .input {
    border: none;
    border-radius: 4px;
    width: 156px;
    height: 45px;
    margin-right: 25px;
    padding-left: 22px;
    font-size: 16px;
    color: #595d6e;
    border-radius: 4px;

    &::placeholder {
      color: #a7abc3;
    }

    &:focus {
      outline: 2px solid #526ae5;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
      background: #f5f6fc;
    }

    .input {
      box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    }
  }
</style>
