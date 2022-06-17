<template>
  <div class="hero">
    <div class="container">
      <div class="hero__inner">
        <div class="hero__content">
          <sup class="sup">лазерная/электроэпиляция</sup>
          <h1 class="hero__headline">Epil.izhevsk</h1>
          <p class="hero__text">Мы&nbsp;предлагаем современные методы ухода за&nbsp;своим телом, которые имеют преимущества перед традиционными. Они безопасны и&nbsp;имеют длительный эффект.</p>
        </div>
        <div class="hero__image">
          <img class="cover" src="@/assets/img/photo-1.jpg" alt="">
          <a class="hero__btn" href="https://dikidi.net/494671?p=0.pi" target="_blank">
            <div>
              <span>Записаться</span>
              со скидкой
            </div>
            <app-icon name="arrow-1" />
          </a>
        </div>
        <div class="hero__menu">
          <p class="hero__title">меню</p>
          <transition-group 
            class="hero__list"
            tag="ul"
            appear
            @before-enter="beforeEnter" 
            @enter="enter"
          >
            <li class="hero__item" 
              v-for="(item, index) in menuList" 
              :key="index"
              :data-index="index"
            >
              <router-link class="hero__link" :to="{ name: item.path }">
                <h5 class="hero__name">{{ item.name }}</h5>
                <app-icon class="hero__arrow" name="arrow-1" />
              </router-link>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power4 } from 'gsap/all';
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';

export default {
  setup() {
    const menuList = ref([
      { name: 'Прайс', path: 'Price' },
      { name: 'Акции', path: 'Stock' },
      { name: 'О нас', path: 'About' },
      { name: 'Контакты', path: 'Contacts' },
    ])

    const tl = gsap.timeline()

    onMounted(() => {
      tl.from('.hero__image', {
        width: '0%',
        duration: 2,
        ease: Power4.easeOut
      })
      tl.from('.hero__btn', {
        yPercent: 100,
        duration: .8,
        ease: Power4.easeOut
      }, '-=.9')
      tl.from('.sup', {
        x: -25,
        opacity: 0,
        duration: .7,
        ease: Power4.easeOut
      }, '-=1.6')
      tl.from('.hero__headline', {
        x: -50,
        opacity: 0,
        duration: 1.3,
        ease: Power4.easeOut
      }, '-=2')
      tl.from('.hero__text', {
        y: 25,
        opacity: 0,
        duration: .8,
        ease: Power4.easeOut
      }, '-=1.4')
    })

    const beforeEnter = (el) => {
      if (innerWidth >= 768) {
        el.style.transform = 'translateX(40px)'
      } else {
        el.style.transform = 'translateY(20px)' 
      }
      el.style.opacity = 0
    }

    const enter = (el) => {
      if (innerWidth >= 768) {
        gsap.to(el, {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: el.dataset.index * .2,
          ease: Power4.easeOut
        })
      } else {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: .6,
          delay: el.dataset.index * .2,
          ease: Power4.easeOut
        })
      }
    }

    return { menuList, beforeEnter, enter }
  }
}
</script>

<style lang="scss">
.hero {
  padding-top: 40px;

  height: 100vh;

  background: $gradient;
  
  &__inner {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    min-height: 100vh;
    
    position: relative;

    @include tablet {
      grid-template-columns: 1fr 37%;
    }

    @include small-tablet {
      grid-template-columns: auto;
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    z-index: 1;

    @include small-tablet {
      margin-top: -220px;
    }

    @media (max-width: 506px) {
      align-items: center;
      text-align: center;
    }
  }

  &__container {
    overflow: hidden;
  }

  &__headline {
    font-family: 'Tiro Devanagari Sanskrit', serif;
    font-size: 9.6rem;
    line-height: 128px;
    color: #fff;

    @include tablet {
      font-size: 7.6rem;
      line-height: 98px;
    }

    @media (max-width: 506px) {
      font-size: 5.6rem;
      line-height: 88px;
    }

    @include small-mobile {
      font-size: 4.6rem;
    }
  }

  &__text {
    margin-top: 13px;

    width: 28%;

    line-height: 23px;
    color: $white;

    @include laptop {
      width: 38%;
    }

    @include tablet {
      width: 48%;
      margin: 0;
    }

    @include small-tablet {
      width: 60%;
    }

    @media (max-width: 506px) {
      width: 80%;
      font-size: 1.4rem;
      line-height: 19px;
    }

    @media (max-width: 400px) {
      width: 70%;
    }
  }

  &__image {
    width: 40%;
    height: 76%;

    overflow: hidden;
    box-shadow: $shadow;
    border-radius: 32px;
    background-color: $black;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    @include tablet {
      width: 50%;
    }

    @include small-tablet {
      margin-top: -70px;
      height: 66%;
      box-shadow: none;
    }

    @include mobile {
      width: 60%;
    }

    @media (max-width: 454px) {
      width: 80%;
    }

    @media (max-width: 400px) {
      width: 100%;
    }

    &:after {
      content: '';
      display: none;
      width: 100%;
      height: 100%;

      background-color: rgba(#000, .3);

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;

      @include tablet {
        display: block;
      }

      @include small-tablet {
        background-color: rgba(#000, .5);
      }

      @include mobile {
        background-color: rgba(#000, .6);
      }
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    padding: 15px 14px 12px 20px;
    gap: 40px;

    font-size: 1.4rem;
    line-height: 18px;
    color: $black;
    background-color: $white;
    border-radius: 0px 12px 0px 0px;

    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;

    transition: background-color .4s $ease;

    &:hover {
      background-color: darken($white, 5%);
    }

    &:active {
      background-color: darken($white, 10%);
    }

    span {
      display: block;
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 19px;
      text-transform: uppercase;
      color: #000;
    }
  }

  &__menu {
    width: 303px;

    color: #fff;

    @include tablet {
      padding: 40px 30px;
      width: auto;

      color: $black;
      background-color: $white;

      position: relative;
      z-index: 1;
    }

    @include small-tablet {
      width: 100%;
      
      border-radius: 12px 12px 6px 6px;
      box-shadow: $shadow;

      position: absolute;
      left: 0;
      bottom: 30px;
    }

    @include mobile {
      padding: 30px;
    }

    @include small-mobile {
      padding: 20px 25px;
    }
  }

  &__title {
    margin-bottom: 35px;

    text-transform: uppercase;
    opacity: .7;

    @include tablet {
      margin-bottom: 5px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;

    @include small-tablet {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    @include small-mobile {
      gap: 5px;
    }
  }

  &__item {
    padding-left: 12px;
    margin-left: -12px;

    overflow: hidden;
    position: relative;
    
    color: $white;

    @include tablet {
      color: $black;
    }

    @include small-mobile {
      padding: 0;
      margin: 0;
    }

    &:after {
      content: '';
      width: 100%;
      height: 100%;

      visibility: hidden;
      background-color: rgba($white, .15);

      position: absolute;
      top: 0;
      left: 0;

      transform: translateX(-100%);
      transition: all .5s $ease;
    }

    &:hover {
      &:after {
        visibility: visible;
        transform: translateX(0);
      }

      .hero__arrow {
        transform: translateX(-12px);
      }
    }

    &:active {
      .hero__arrow {
        transform: translateX(0px);
      }
    }
  }

  &__link {
    padding: 14px 0 18px;
    position: relative;
    z-index: 1;

    border-bottom: 1px solid lighten($primary, 2%);

    @include tablet {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 8px;

      border-bottom: 1px solid rgba($primary, .4);
    }

    @include small-tablet {
      border-bottom: 1px solid rgba($black, .1);
    }

    @include small-mobile {
      padding-bottom: 0;
    }
  }

  &__name {
    font-weight: 500;
    font-size: 2.6rem;
    line-height: 39px;
    text-transform: capitalize;

    @include small-tablet {
      font-size: 2rem;
    }

    @include mobile {
      font-size: 1.8rem;
    }

    @include small-mobile {
      font-size: 1.4rem;
    }
  }

  &__arrow {
    position: absolute;
    bottom: 16px;
    right: 0;

    transition: transform .3s $ease;

    @include tablet {
      position: static;
    }

    @include small-tablet {
      display: none;
    }
  }
}
</style>