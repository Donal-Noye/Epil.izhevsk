<template>
  <div class="stock">
    <div class="container">
      <div class="stock__inner">
        <h2 class="stock__headline headline">Акции</h2>
          <!-- <div class="stock__pag">
            <div class="stock__item active"></div>
            <div class="stock__item"></div>
          </div> -->
          <!-- <div class="stock__nav">
            <button class="stock__btn prev">
              <app-icon name="arrow-3" />
            </button>
            <button class="stock__btn next">
              <app-icon name="arrow-3" />  
            </button>
          </div> -->
          <transition-group
            class="stock__list"
            tag="div"
            appear
            @before-enter="beforeEnter" 
            @enter="enter"
          >
            <StockCard 
              v-for="(stock, index) in stocks" 
              :key="index" 
              :data-index="index"
              :index="index"
              :image="stock.image"
              :name="stock.name"
              :price="stock.price"
            />
          </transition-group>
        </div>
      </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';
import { ref } from '@vue/reactivity';
import StockCard from '../components/UI/StockCard.vue';
import { onMounted } from '@vue/runtime-core';

gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const stocks = ref([
      { image: 'photo-5', name: 'Бикини глубокое + подмышки', price: 1100 },
      { image: 'photo-2', name: 'Бикини глубокое + подмышки + голени', price: 1750 }
    ])

    const tl = gsap.timeline()
    
    onMounted(() => {
      tl.from('.stock-card__image', {
        scale: 1.5,
        duration: 1.4,
        ease: Power4.easeOut
      })
      tl.from('.stock-card__title', {
        y: 20,
        opacity: 0,
        duration: .8,
        ease: Power4.easeOut
      }, '-=1')
      tl.from('.stock-card__complex', {
        scaleX: 0,
        duration: .8,
        ease: Power4.easeOut
      }, '-=1.2')
      tl.from('.stock-card__complex p', {
        yPercent: 100,
        duration: .8,
        ease: Power4.easeOut
      }, '-=.9')
      tl.from('.stock-card__name', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut
      }, '-=.7')
      tl.from('.line', {
        width: 0,
        duration: 1.2,
        ease: Power4.easeOut
      }, '-=.8')
      tl.from('.stock-card__price', {
        y: 10,
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut
      }, '-=1')
    })

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(20px)'
      el.style.opacity = 0
    }

    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: el.dataset.index * .4,
        ease: Power4.easeOut
      })
    }

    return { stocks, beforeEnter, enter }
  },
  components: { StockCard }
}
</script>

<style lang="scss">
.stock {
  padding-top: calc($header + 50px);
  padding-bottom: 100px;

  min-height: 100vh;

  background: $gradient;

  @include tablet {
    padding-top: calc($header + 30px);
  }

  &__headline.headline {
    position: fixed;
    left: 5%;
    top: calc($header + 40px);

    @include tablet {
      margin-bottom: 20px;

      position: static;
      text-align: center;
    }
  }

  &__pag {
    display: flex;
    padding: 25px 36px 0;
    gap: 22px;

    width: 565px;
    height: 100px;

    background: #FFFFFF;
    border-radius: 32px 32px 0px 0px;
  }

  &__list {
    display: flex;
    gap: 20px;
  }

  &__item {
    width: 100%;
    height: 10px;
    border-radius: 6px;

    background-color: $white;
    
    &.active {
      background-color: $primary;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 30px;

    position: fixed;
    right: 26%;
    top: calc($header + 40px);
  }

  &__btn {
    svg {
      width: 80px;
      height: 68px;

      stroke: #fff;
      fill: transparent;
    }

    &.next {
      transform: rotate(-180deg);
    }
  }

  &__list {
    @media (max-width: 1753px) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>