<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__info">Copyright © 2016-2020. AnimaRender</div>
      <div class="footer__links">
        <a href="#">Help</a>
        <a href="#">Software</a>
        <a href="#">Refferal programm</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
  .footer {
    padding-top: 150px;
    padding-bottom: 127px;
    background: #fbfbfb;
    color: #86868b;
    font-size: 12px;

    &__content {
      background: rgba(72, 100, 230, 0.2);
      height: 55px;
      padding: 0 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__links {
      a {
        margin: 0 20px;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
      .footer {
          background: #f5f6fc;
          padding-bottom: 20px;

          &__content {
              min-height: 130px;
              flex-direction: column-reverse;
              justify-content: center;
              padding: 0;
          }

          &__info {
              width: 100%;
              height: 50px;
              background: #E0E0E0;
              text-align: center;
              padding-top: 12px;
          }

          &__links {
            display: flex;
            flex-direction: column;
            padding-bottom: 10px;

            a {
                margin-top: 10px;
            }
          }
      }
  }
</style>