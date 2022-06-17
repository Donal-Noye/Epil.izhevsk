<template>
  <div class="price">
    <div class="container">
      <sup class="sup">Прайс</sup>
      <div class="price__laser-hair">
        <div class="price__headline">
          <h2 class="headline">Лазерная эпиляция по зонам</h2>
        </div>
        <transition-group 
          class="price__list"
          tag="ul"
          appear
          @before-enter="beforeEnter" 
          @enter="enter"
        >
          <PriceCard 
            v-for="(card, index) in laserHairCards" 
            :key="index" 
            :data-index="index"
            :name="card.name"
            :descr="card.descr"
            :servicePrices="card.servicePrices"
          />
        </transition-group>
      </div>
      <div class="price__electrolysis">
        <div class="price__headline">
          <h2 class="headline">Электроэпиляция по зонам</h2>
        </div>
        <ul class="price__list">
          <PriceCard 
            v-for="(card, index) in electrolysisCards" 
            :key="index" 
            :data-index="index"
            :servicePrices="card.servicePrices"
            :text="card.text"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';
import { onMounted, ref } from '@vue/runtime-core';
import PriceCard from '../components/UI/PriceCard.vue';

gsap.registerPlugin(ScrollTrigger)

export default {
  components: { PriceCard },
  setup() {
    const laserHairCards = ref([
      { 
        name: 'малая зона', 
        descr: 'Подмышки, Верхняя губа, межбровье, бакенбарды, классическое бикини, линия живота',
        servicePrices: [
          { title: 'Разовое посещение', price: '500' },
          { title: '5 посещений', price: '2250' },
          { title: '10 посещений', price: '4000' },
        ]
      },
      { 
        name: 'средняя зона', 
        descr: 'глубокое бикини, ягодицы, руки до локтя, руки выше локтя, грудь',
        servicePrices: [
          { title: 'Разовое посещение', price: '1100' },
          { title: '5 посещений', price: '4950' },
          { title: '10 посещений', price: '8800' },
        ]
      },
      { 
        name: 'большая зона', 
        descr: 'бёдра, голени, живот, спина',
        servicePrices: [
          { title: 'Разовое посещение', price: '1500' },
          { title: '5 посещений', price: '6750' },
          { title: '10 посещений', price: '12000' },
        ]
      },
    ])

    const electrolysisCards = ref([
      {
        servicePrices: [
          { title: 'Стажёр', price: '9' },
          { title: 'Мастер', price: '15' },
        ],
        text: '+ 150 ₽ одноразовая игла'
      }
    ])

    const tl = gsap.timeline() 

    onMounted(() => {
      tl.from('.price__headline .headline', {
        yPercent: 100,
        stagger: 0.1,
        duration: 1.2,
        ease: Power4.easeOut
      })
      if (innerWidth > 768) {
        tl.to('.bg--1', {
          x: -12,
          y: 12,
          duration: 1,
          ease: Power4.easeOut
        }, '-=.8')
        tl.to('.bg--2', {
          x: -24,
          y: 24,
          duration: .8,
          ease: Power4.easeOut
        }, '-=.6')
      } else {
        tl.to('.bg--1', {
          y: 12,
          duration: 1,
          ease: Power4.easeOut
        }, '-=.8')
        tl.to('.bg--2', {
          y: 24,
          duration: .8,
          ease: Power4.easeOut
        }, '-=.6')
      }
    })

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(25px)'
      el.style.opacity = 0
    }

    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: el.dataset.index * .2,
        ease: Power4.easeOut
      })
    }

    return { laserHairCards, electrolysisCards, beforeEnter, enter }
  }
}
</script>

<style lang="scss">
.price {
  padding-top: calc($header + 40px);
  padding-bottom: 60px;

  min-height: 90vh;

  background: $gradient;

  @include mobile {
    padding-top: 116px;
  }

  &__headline {
    margin: 15px 0 30px;
    overflow: hidden;
  }

  &__text {
    margin-left: 70px;

    font-size: 2rem;
    line-height: 25px;
    color: rgba(#fff, .9);

    @include small-tablet {
      margin-left: 40px;

      font-size: 1.6rem;
    }

    @include mobile {
      font-size: 1.4rem;
    }

    @include small-mobile {
      font-size: 1.2rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 43px;
    margin-top: 64px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include small-tablet {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 33px;
    }
  }

  &__electrolysis {
    margin-top: 100px;

    .price-card__inner {
      height: auto;
    }
  }
}
</style>