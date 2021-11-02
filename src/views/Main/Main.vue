<template>
  <div class="home">
    <div class="page__header">
      <h1 class="page__title">Main</h1>
      <HeaderRight />
    </div>

    <div class="home__recomendations">
      <h2 class="main-description">recomendation</h2>
      <div class="row home__recomendations__row">
        <div class="col-3">
          <div class="home__recomendations__item">
            <img class="home__recomendations__image" src="@/assets/images/recomendations__back.png" alt="back" />
            <p class="home__recomendations__title">Lorem ipsum dolor sit</p>
            <p class="home__recomendations__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
        </div>

        <div class="col-3">
          <div class="home__recomendations__item">
            <img class="home__recomendations__image" src="@/assets/images/recomendations__back.png" alt="back" />
            <p class="home__recomendations__title">Lorem ipsum dolor sit</p>
            <p class="home__recomendations__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
        </div>

        <div class="col-3">
          <div class="home__recomendations__item">
            <img class="home__recomendations__image" src="@/assets/images/recomendations__back.png" alt="back" />
            <p class="home__recomendations__title">Lorem ipsum dolor sit</p>
            <p class="home__recomendations__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
        </div>

        <div class="col-3">
          <div class="home__recomendations__item">
            <img class="home__recomendations__image" src="@/assets/images/recomendations__back.png" alt="back" />
            <p class="home__recomendations__title">Lorem ipsum dolor sit</p>
            <p class="home__recomendations__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderRight from '@/views/_components/HeaderRight.vue'

export default {
  name: 'Main',
  components: {
    HeaderRight,
  },
}
</script>

<style lang="scss">
@import 'style';
</style>
