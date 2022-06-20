<template>
  <a class="stock-card" href="https://dikidi.net/494671?p=0.pi">
    <div class="stock-card__image">
      <img class="cover" :src="require(`@/assets/img/${image}.jpg`)" alt="">
    </div>
    <div class="stock-card__inner">
      <h4 class="headline stock-card__title">лазерная эпиляция</h4>
      <div class="stock-card__content">
        <div class="stock-card__complex">
          <p>Комплекс {{ index + 1 }}</p>
        </div>
        <h3 class="headline stock-card__name">{{ name }}</h3>
        <span class="line"></span>
        <p class="stock-card__price">{{ new Intl.NumberFormat('ru-RU').format(price).toString() }} ₽</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    price: Number,
    index: Number,
  },
}
</script>

<style lang="scss">
.stock-card {
  padding: 36px;

  width: 565px;
  height: 886px;

  border-radius: 32px;
  overflow: hidden;
  position: relative;
  color: #fff;

  @include small-tablet {
    padding: 23px;

    width: 70%;
    height: 754px;
  }

  @media (max-width: 644px) {
    width: 90%;
  }

  @media (max-width: 482px) {
    padding: 14px;
    width: 100%;
    height: 564px;
  }

  &__image {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 100%;

    text-align: center;
    border: 4px solid #FFFFFF;
    border-radius: 32px;

    position: relative;
    z-index: 1;

    @include small-tablet {
      border-width: 3px;
    }

    @include mobile {
      border-width: 2px;
    }
  }

  &__title.headline {
    padding-top: 30px;

    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: -0.06em;

    @include small-tablet {
      font-size: 3rem;
    }

    @media (max-width: 400px) {
      font-size: 2.4rem;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 47px;

    width: 291px;

    @include mobile {
      width: 60%;
    }

    @include small-mobile {
      width: 90%;
    }
  }

  &__complex {
    margin-bottom: 20px;
    padding: 4px 17px;

    font-weight: 600;
    font-size: 1.8rem;
    line-height: 20px;
    text-transform: uppercase;
    color: #000;
    background-color: #f8dfd1;
    overflow: hidden;

    @include mobile {
      font-size: 1.6rem;
    }
  }

  &__name.headline {
    @media (max-width: 408px) {
      font-size: 2.8rem;
    }
  }

  .line {
    display: block;
    margin-top: 20px;

    width: 60%;
    height: 3px;

    background-color: rgba(255, 255, 255, 0.6);

  }

  &__price {
    margin-top: 10px;
    position: relative;

    font-size: 4.8rem;
    line-height: 56px;
    color: $white;

    @include small-tablet {
      font-size: 4rem;
    } 

    @include mobile {
      font-size: 3.6rem;
    }
  }
}
</style>