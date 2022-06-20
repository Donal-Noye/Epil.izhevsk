<template>
  <li class="price-card">
    <div class="price-card__inner">
      <div class="price-card__content">
        <div class="price-card__top">
          <h6 class="price-card__name" v-if="name">{{ name }}</h6>
          <p class="price-card__descr" v-if="descr">{{ descr }}</p>
        </div>
        <div class="price-card__bottom">
          <ul class="price-card__services">
            <li class="price-card__item" v-for="item in servicePrices" :key="item">
              <p class="price-card__title">{{ item.title }}</p>
              <div class="price-card__price">{{ new Intl.NumberFormat('ru-RU').format(item.price).toString() }} ₽</div>
            </li>
            <p v-if="text" class="price-card__text">{{ text }}</p>
          </ul>
          <a class="price-card__btn" href="https://dikidi.net/494671?p=0.pi">записаться</a>
        </div>
      </div>
    </div>
    <div class="bg bg--1"></div>
    <div class="bg bg--2"></div>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    descr: String,
    servicePrices: Object,
    text: String,
  },
  
}
</script>

<style lang="scss">
.price-card {
  position: relative;

  @include small-tablet {
    height: auto;
  }

  @include mobile {
    height: auto;
  }

  .bg {
    width: 100%;
    height: 100%;

    border-radius: 32px;

    position: absolute;
    top: 0;
    left: 0;

    &--1 {
      background-color: #835D52;
      z-index: 2;
    }

    &--2 {
      background-color: #9C7B6D;
      z-index: 1;
    }
  }

  &__inner {
    padding: 20px 24px;
    height: 498px;

    background-color: $white;
    border-radius: 32px;

    position: relative;
    z-index: 3;

    @include small-tablet {
      padding: 20px;
    }

    @include mobile {
      height: auto;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 27px 20px 0;

    height: 100%;

    overflow: hidden;
    border: 2px solid $primary;
    border-radius: 22px;

    @include small-tablet {
      gap: 50px;
      padding: 17px 17px 0;
    }

    @include mobile {
      gap: 40px;
    }
  }

  &__name {
    margin-bottom: 16px;

    font-weight: 600;
    font-size: 2.2rem;
    line-height: 25px;
    text-transform: uppercase;
    color: #000;
  }

  &__descr {
    font-size: 1.8rem;
    line-height: 23px;
    text-transform: capitalize;
    color: rgba(#000, .8);

    @include mobile {
      font-size: 1.6rem;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
  }

  &__services {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    border-bottom: 1px solid #E7E0DA;
  }

  &__title {
    width: 70%;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    text-transform: uppercase;
    
    @include mobile {
      font-size: 1.6rem;
    }

    @include small-mobile {
      font-size: 1.2rem;
    }
  }

  &__price {
    font-size: 1.8rem;

    @include small-tablet {
      font-size: 2rem;
    }

    @include small-mobile {
      font-size: 1.6rem;
    }
  }

  &__text {
    margin-top: 20px;

    font-weight: 600;
    font-size: 1.8rem;
    color: #000;
  }

  &__btn {
    margin: 28px -20px 0;
    padding: 17px 0;

    text-transform: uppercase;
    background-color: darken($white, 5%);
    text-align: center;

    transition: background-color .1s $ease;

    @include small-tablet {
      margin: 28px -17px 0;
    }

    &:hover {
      background-color: darken($white, 7%);
    }

    &:active {
      background-color: darken($white, 10%);
    }
  }
}
</style>