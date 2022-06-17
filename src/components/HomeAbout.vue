<template>
  <div class="home-about">
    <div class="home-about__content">
      <h3 class="home-about__headline">
        Электроэпиляция - 
        <br>
        это способ удаления нежелательных волос НАВСЕГДА
      </h3>
      <p class="home-about__text">Мы предлагаем современные методы ухода за своим телом, которые имеют преимущества перед традиционными. Они безопасны и имеют длительный эффект.</p>
      <router-link class="home-about__link" :to="{ name: 'About' }">
        <span>О нас</span>
        <app-icon class="home-about__arrow" name="arrow-2" />
      </router-link>
    </div>
    <div class="home-about__image home-about__image--1">
      <img class="cover" src="@/assets/img/photo-2.jpg" alt="">
    </div>
    <div class="home-about__image home-about__image--2">
      <img class="cover" src="@/assets/img/photo-3.jpg" alt="">
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';
import { onMounted } from '@vue/runtime-core';

gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      gsap.from('.home-about__headline', {
        scrollTrigger: {
          start: 'top 70%',
          trigger: '.home-about',
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut,
      })
      gsap.from('.home-about__text', {
        scrollTrigger: {
          start: '10% 70%',
          trigger: '.home-about'
        },
        x: -50,
        opacity: 0,
        duration: 1.3,
        ease: Power4.easeOut,
      })
      gsap.from('.home-about__link', {
        scrollTrigger: {
          start: '10% 70%',
          trigger: '.home-about'
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: Power4.easeOut,
      })
      gsap.from('.home-about__image--1', {
        scrollTrigger: {
          start: '10% 70%',
          trigger: '.home-about'
        },
        width: '0%',
        duration: 1.5,
        ease: Power4.easeOut,
      })
      gsap.from('.home-about__image--2', {
        scrollTrigger: {
          start: '20% 60%',
          trigger: '.home-about'
        },
        height: '0%',
        duration: 1,
        ease: Power4.easeOut,
      })
    })
  }
}
</script>

<style lang="scss">
.home-about {
  height: 100vh;
  position: relative;

  background-color: $white;

  @include mobile {
    height: 85vh;
  }

  @include small-mobile {
    height: 60vh;
  }

  &__content {
    width: 405px;

    position: absolute;
    top: 72px;
    left: 50%;

    transform: translateX(-50%);

    @include small-tablet {
      width: 50%;
    }

    @media (max-width: (920px)) {
      left: 64%;
    }

    @media (max-width: (654px)) {
      left: 68%;
    }

    @media (max-width: (654px)) {
      left: 61%;
    }

    @include mobile {
      left: 37%;
      width: auto;
    }
  }

  &__headline {
    font-size: 3.6rem;
    line-height: 45px;
    color: #000;

    @include small-tablet {
      font-size: 3rem;
      line-height: 37px;
    }

    @include mobile {
      font-size: 2.6rem;
      line-height: 30px;
    }

    @media (max-width: 540px) {
      font-size: 2rem;
      line-height: 26px;
    }
  }

  &__text {
    margin: 14px 0;

    font-size: 1.4rem;
    line-height: 18px;
    color: rgba($black, .9);

    @include mobile {
      width: 80%;
    }

    @media (max-width: 540px) {
      font-size: 1.2rem;
      line-height: 16px;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      span {
        color: #000;
      }

      .home-about__arrow {
        transform: translateX(-5px);
      }
    }

    &:active {
      .home-about__arrow {
        transform: translateX(0);
      }
    }

    span {
      font-weight: 600;
      font-size: 1.8rem;
      line-height: 19px;
      color: rgba($black, .9);

      transition: color .3s $ease;
    }
  }

  &__arrow {
    transition: transform .3s $ease-bounce;
  }

  &__image {
    &--1 {
      width: 21%;
      height: 70%;

      position: absolute;
      top: 125px;
      left: 0;

      @include small-tablet {
        width: 33%;
      }

      @media (max-width: (654px)) {
        width: 29%;
        height: 50%;
      }

      @include mobile {
        right: 0;
        left: auto;
      }
    }

    &--2 {
      width: 36%;
      height: 30%;

      position: absolute;
      right: 0;
      bottom: 114px;

      @include mobile {
        left: 0;
        right: auto;
        bottom: 80px;
      }

      @include small-mobile {
        display: none;
      }
    }
  }
}
</style>