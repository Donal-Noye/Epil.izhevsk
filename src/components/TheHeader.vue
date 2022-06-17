<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo" :to="{ name: 'Home' }">
          <img src="@/assets/img/logo.jpg" alt="">
          <span>Epil.izhevsk</span>
        </router-link>
        <button class="burger" @click="toggleMenu" :class="{ active: open }">
          <div class="burger__inner">
            <span></span>
          </div>
        </button>
        <transition name="menu">
          <nav class="nav" v-show="open">
            <div class="nav__top">
              <button class="burger" @click="toggleMenu" :class="{ active: open }">
                <div class="burger__inner">
                  <span></span>
                </div>
              </button>
            </div>
            <ul class="nav__list">
              <li class="nav__item" v-for="link in navList" :key="link">
                <router-link class="nav__link" :to="{ name: link.path }">
                  {{ link.name }}
                </router-link>
              </li>
            </ul>
          </nav>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from '@vue/reactivity'
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const navList = ref([
      { name: 'Главная', path: 'Home' },
      { name: 'Прайс', path: 'Price' },
      { name: 'Акции', path: 'Stock' },
      { name: 'О нас', path: 'About' },
      { name: 'Контакты', path: 'Contacts' },
    ])
    const open = ref(false)

    const toggleMenu = () => {
      open.value = !open.value
      document.body.classList.toggle('no-scroll')
    }

    ScrollTrigger.create({
      start: 'top -20',
      end: 99999,
      toggleClass: { className: 'header--scrolled', targets: '.header' }
    });

    return { navList, toggleMenu, open }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;

  width: 100%;
  height: $header;

  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  transition: height .4s $ease;

  @include small-mobile {
    height: calc($header - 20px);
  }

  &--scrolled {
    height: calc($header - 35px);
    border-bottom: 1px solid $white;

    @include small-mobile {
      height: calc($header - 40px);
    }

    .header__logo {
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-size: 1.4rem;

        @include small-mobile {
          font-size: 1.2rem;
        }
      }
    }
    .burger {
      transform: scale(.8);
    }
  }

  .container {
    height: 100%;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 13px;

    height: 100%;

    color: $black;
    text-transform: uppercase;

    transition: color .4s $ease;
    
    @include small-mobile {
      gap: 9px;
    }

    img {
      width: 40px;
      height: 40px;

      object-fit: cover;
      border-radius: 50%;

      transition: all .4s $ease;
    
      @include small-mobile {
        width: 30px;
        height: 30px;
      }
    }

    span {
      transition: font-size .4s $ease;

      @include small-mobile {
        font-size: 1.2rem;
      }
    }
  }
}

.burger {
  padding: 15px;
  margin: -15px;

  height: 100%;

  transition: transform .4s $ease;

  &__inner {
    width: 40px;

    @include mobile {
      transform: scale(.7);
    }

    &:before,
    &:after,
    span {
      content: "";
      display: block;
      margin: 3px 0;

      height: 3px;
      background-color: $black;

      transition: transform 0.5s $ease;
    }
  }
  
  &.active {
    .burger__inner {
      &:before {
        transform: translateY(6px) rotate(135deg);
      }
      &:after {
        transform: translateY(-6px) rotate(-135deg);
      }
      span {
        transform: scale(0);
      }
    }
  }
}

.nav {
  width: 700px;
  height: 100vh;

  background-color: #fff;
  box-shadow: $shadow;

  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;

  @include tablet {
    width: 50%;
  }

  @include mobile {
    width: 70%;
  }

  @include small-mobile {
    width: 90%;
  }

  &__top {
    display: flex;
    justify-content: flex-end;
    padding: 60px 60px 90px 40px;

    @include mobile {
      padding: 60px 30px 45px 40px;
    }
  }

  .headline {
    color: #fff;
    background-color: rgba($black, .7);
  }

  &__list {
    border-top: 1px solid $white;
  }

  &__item {
    overflow: hidden;
    position: relative;

    &:hover {
      &:before {
        transform: translate(0);
      }
    }

    &:before {
      content: '';
      width: 100%;
      height: 100%;

      background-color: rgba($white, .6);

      position: absolute;
      left: 0;
      top: 0;

      transition: transform .5s $ease;
      transform: translateX(-100%);
    }
  }

  &__link {
    padding: 37px 90px;
    
    font-weight: 600;
    font-size: 3.6rem;
    border-bottom: 1px solid $white;

    position: relative;
    z-index: 2;

    @include tablet {
      padding: 30px 60px;

      font-size: 2.6rem;
    }

    @include mobile {
      padding: 26px 40px;

      font-size: 2rem;
    } 

    &.active {
      background-color: rgba($white, .6);
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: transform .8s $ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}

</style>