<template>
  <div class="contacts">
    <div class="contacts__map" style="position:absolute;overflow:hidden;">
      <a href="https://yandex.ru/maps/44/izhevsk/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ижевск</a><a href="https://yandex.ru/maps/44/izhevsk/house/ulitsa_imeni_vadima_sivkova_273/YUoYdAdjQEUPQFtsfXR3dHlnYQ==/?ll=53.204631%2C56.865633&utm_medium=mapframe&utm_source=maps&z=18" style="color:#eee;font-size:12px;position:absolute;top:14px;">Улица имени Вадима Сивкова, 273 на карте Ижевска — Яндекс Карты</a>
      <iframe src="https://yandex.ru/map-widget/v1/-/CCUJBLThWB" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
    </div>
    <div class="container">
      <div class="contacts__inner">
        <div class="contacts__content">
          <div class="bg bg--1"></div>
          <div class="bg bg--2"></div>
          <transition-group 
            class="contacts__list"
            tag="ul"
            appear
            @before-enter="beforeEnter" 
            @enter="enter"
          >
            <li class="contacts__item" v-for="(item, index) in contacts" :key="index" :data-index="index">
              <a :href="item.link" class="contacts__link">
                <app-icon class="contacts__icon" v-if="item.icon" :name="item.icon" />
                <span v-else class="contacts__name">{{ item.name }}:</span>
                <span class="contacts__value" v-if="item.value">{{ item.value }}</span>
                <span class="contacts__value" v-else>{{ item.link }}</span>
              </a>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power4 } from 'gsap/all';
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  setup () {
    const contacts = ref([
      { icon: 'phone', value: '+7 (999) 189-40-25', link: 'tel:+79991894025' },
      { icon: 'insta', link: 'https://www.instagram.com/epil.izhevsk/' },
      { icon: 'vk', link: 'https://vk.com/epilashkaizh' },
      { icon: 'world', value: 'ул. Вадима Сивкова 273, Ижевск', link: 'https://yandex.ru/maps/-/CCUJBLHllB' },
      { name: 'ИНН', value: '160102712304' },
      { name: 'ОРГНИП', value: '321169000100943' },
    ])

    const tl = gsap.timeline()

    onMounted(() => {
      if (innerWidth > 576) {
        tl.to('.bg--1', {
          x: -15,
          y: 15,
          duration: 1.2,
          ease: Power4.easeOut
        })
        tl.to('.bg--2', {
          x: -30,
          y: 30,
          duration: 1.5,
          ease: Power4.easeOut
        }, '-=.7')
      } else {
        tl.to('.bg--1', {
          y: -15,
          duration: 1.2,
          ease: Power4.easeOut
        })
        tl.to('.bg--2', {
          y: -30,
          duration: 1.5,
          ease: Power4.easeOut
        }, '-=.7')
      }
    })

    const beforeEnter = (el) => {
      if (innerWidth >= 576) {
        el.style.transform = 'translateX(25px)'
        el.style.opacity = 0
      }
    }

    const enter = (el) => {
      gsap.to(el, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: el.dataset.index * .1,
        ease: Power4.easeOut
      })
    }

    return { contacts, beforeEnter, enter }
  }
}
</script>

<style lang="scss">
.contacts {
  position: relative;
  height: calc(100vh - 109px);

  &__map {
    width: 100%;
    height: 100%;

    background-image: url('../assets/img/map.png');
    background-size: cover;

    iframe {
      width: 100%;
      height: 100%;

      @include small-tablet {
        display: none;
      }
    }
  }

  .container {
    height: 100%;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }

  &__content {
    position: relative;

    @include tablet {
      margin-left: 30px;
    }

    @include mobile {
      width: 100%;
      margin-left: 0;
      margin-top: 100px;
    }
  }

  .bg {
    &--1 {
      width: 100%;
      height: 100%;

      background: #835D52;
      border-radius: 20px;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
    }

    &--2 {
      width: 100%;
      height: 100%;

      background: $primary;
      border-radius: 20px;

      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;

    background-color: #fff;
    box-shadow: $shadow;
    border-radius: 20px;
    overflow: hidden;

    position: relative;
    z-index: 3; 
  }

  &__item {
    &:first-child {
      .contacts__link {
        padding-top: 40px;
      }
    }
    &:last-child {
      .contacts__link {
        padding-bottom: 40px;
      }
    }
    &:not(:nth-last-child(-n+2)):hover {
      .contacts__link {
        background-color: $white;
      }
    }
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 18px 50px;
    gap: 30px;

    transition: background-color .5s $ease;

    @include mobile {
      gap: 20px;
      padding: 18px 30px;
    }

    @include small-mobile {
      padding: 15px 30px;
    }
  }

  &__icon {
    width: 30px;
    height: 30px;

    flex-shrink: 0;

    @include small-mobile {
      width: 20px;
      height: 20px;
    }
  }

  &__name {
    font-size: 2rem;

    @include small-mobile {
      font-size: 1.6rem;
    }
  }

  &__value {
    font-size: 1.8rem;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @include small-mobile {
      font-size: 1.4rem;
    }
  }
}
</style>