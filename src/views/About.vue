<template>
  <div class="about">
    <div class="about-intro">
      <div class="about-intro__content">
        <h4 class="headline">Основная наша специализация – это лазерная эпиляция и электроэпиляция.</h4>
        <div class="about-intro__text">
          <p>Лазерная эпиляция, как наиболее востребованная на сегодняшний день процедура в области профессиональной аппаратной косметологии. На сегодняшний день это единственный способ избавления от лишних волос на теле объединяющий преимущества всех существовавших ранее способов эпиляции и лишённый их недостатков: процедура совершенно безболезненна, занимает всего несколько минут времени, не вызывает раздражения или повреждения кожи, результат сохраняется на долгие годы.</p>
          <p>Электроэпиляция - это метод перманентного удаления волос с помощью электрического разряда, направленного непосредственно на волосяную луковицу.</p>
        </div>
        <router-link class="about-intro__link" :to="{ name: 'Contacts' }">
          <span>Контакты</span>
          <app-icon class="about__arrow" name="arrow-2" />
        </router-link>
      </div>
      <div class="about-intro__image about-intro__image--1">
        <img class="cover" src="@/assets/img/photo-4.jpg" alt="">
      </div>
      <div class="about-intro__image about-intro__image--2">
        <img class="cover" src="@/assets/img/photo-2.jpg" alt="">
      </div>
    </div>
    <div class="about-services">
      <!-- <div class="about-services__image">
        <img class="cover" src="@/assets/img/photo-4.jpg" alt="">
      </div> -->
      <div class="container">
        <div class="about-services__inner">
          <h4 class="about-services__title headline">Подробнее</h4>
          <ul class="about-services__list">
            <li class="about-services__item" v-for="(item, index) in aboutList" :key="index">
              <h4 class="about-services__name headline"><span>({{ index + 1 }})</span> {{ item.name }}</h4>
              <transition-group 
                class="about-services__content"
                tag="div"
                appear
                @before-enter="beforeEnter" 
                @enter="enter"
              >
                <p class="about-services__text" v-for="(text, index) in item.text" :key="index" :data-index="index">{{ text }}</p>
              </transition-group>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Power4 } from 'gsap/all';
import { onMounted, ref } from '@vue/runtime-core';

gsap.registerPlugin(ScrollTrigger)

export default {
  setup() {
    const aboutList = ref([
      { 
        name: 'Что такое Электроэпиляция?', 
        text: [
          'Электроэпиляция - это метод перманентного удаления волос с помощью электрического разряда, направленного непосредственно на волосяную луковицу.',
          'По результатам клинических исследований электроэпиляция является единственным методом удаления волос навсегда.'
        ]
      },
      { 
        name: 'Что такое Лазерная эпиляция?', 
        text: [
          'Лазерная эпиляция - это не просто дешевле чем шугаринг, это даже дешевле, чем комплект одноразовых станков для бритья!',
          'В нашей студии вы можете делать процедуру сами (мы вас обучим) и экономить или со специалистом.'
        ]
      },
      { 
        name: 'Наше оборудование', 
        text: [
          'В нашей студии мы используем LP-Laser. Он аккуратно передает энергию через кожу и через меланин в волосяные фолликулы. LPLaser использует импульсы на 2-300 мс, расходуя, при этом, довольно много энергии (12-120 Дж. на см2).',
          'Мы работаем на самом крутом оборудовании APILUS (Канада). Новая система Apilus имеет большую мощность и работает с частотой до 6 раз быстрее, чем любые другие аппараты для электроэпиляции, а удаление волос выполняется быстро и почти не заметно для вашей кожи.'
        ]
      },
      { 
        name: 'Что такое Apilus?', 
        text: [
          'Цифровая технология Apilus, использующая частоту 13,5 МГц, предлагает идеальные компьютеризированные настройки с эффективной концентрацией энергии в волосяном фолликуле для передачи высокочастотных импульсов длительностью до одной тысячной секунды, что обеспечивает практически безболезненное удаление волос.',
          'Используемая высокоточная технология также защищает вашу кожу и обеспечивает максимальную эффективность электроэпиляции с минимальным раздражением.'
        ]
      },
    ])
    const tl = gsap.timeline()

    onMounted(() => {
      tl.from('.about-intro .headline', {
        y: -40,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 1
      })
      tl.from('.about-intro__text p:first-child', {
        x: -20,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 1
      }, '-=.8')
      tl.from('.about-intro__text p:last-child', {
        x: -10,
        opacity: 0,
        ease: Power4.easeOut,
        duration: 1
      }, '-=.7')
      tl.from('.about-intro__link', {
        x: -10,
        opacity: 0,
        ease: Power4.easeOut,
        duration: .7
      }, '-=.8')
      tl.to('.about-intro__image--1', {
        width: '100%',
        ease: Power4.easeOut,
        duration: 1.4
      }, '-=1.4')
      if (innerWidth >= 470) {
        tl.from('.about-intro__image--2', {
          height: 0,
          ease: Power4.easeOut,
          duration: 1
        }, '-=1')
      } else {
        tl.from('.about-intro__image--2', {
          height: 0,
          opacity: 0,
          ease: Power4.easeOut,
          duration: 1
        }, '-=1.4')
      }
    })

    const beforeEnter = (el) => {
      el.style.transform = 'translateX(20px)'
      el.style.opacity = 0
    }

    const enter = (el) => {
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: '70% bottom' },
        x: 0,
        opacity: 1,
        duration: 1.2,
        delay: el.dataset.index * .2,
        ease: Power4.easeOut
      })
    }

    return { aboutList, beforeEnter, enter }
  }
}
</script>

<style lang="scss">
.about {
  padding-top: 200px;

  color: #fff;
  background: $gradient;

  @include tablet {
    padding-top: 150px;
  }

  @include mobile {
    padding-top: 120px;
  }
}

.about-intro {
  display: grid;
  grid-template-columns: repeat(24, 1fr);

  min-height: calc(84vh - 200px);

  @include small-tablet {
    min-height: calc(90vh - 200px);
  }

  @media (max-width: 470px) {
    display: block;
    width: 80%;
    margin: 0 auto;
    min-height: auto;
    position: relative;
  }

  &__content {
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    padding-top: 10px;
    gap: 20px;

    width: 60%;
    
    grid-area: 1 / 8 / 9 / 18;

    @include laptop {
      width: 80%;
    }

    @include tablet {
      width: 100%;
    }

    @include small-tablet {
      justify-content: center;
      grid-area: 1 / 9 / 9 / 24;
    }

    @media (max-width: 470px) {
      padding-top: 115px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 20px;

    line-height: 23px;
    color: rgba(#fff, .9);

    @include small-tablet {
      font-size: 1.4rem;
    }

    @include mobile {
      font-size: 1.2rem;
      line-height: 18px;
    } 
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 15px;

    font-size: 1.8rem;

    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }

    &:active {
      svg {
        transform: translateX(0);
      }
    }

    svg {
      transition: transform .3s $ease-bounce;
    }
  }

  &__image {
    &--1 {
      width: 0;

      grid-area: 1 / 1 / 9 / 7;
      
      @include small-tablet {
        grid-area: 1 / 1 / 9 / 8;
      }

      @media (max-width: 470px) {
        display: none;
      }
    }

    &--2 {
      height: 220px;
      grid-area: 6 / 19 / 9 / 25;
      
      transform: translateY(80px);

      @include small-tablet {
        display: none;
        transform: translate(0);
      }

      @media (max-width: 470px) {
        display: block;
        
        width: 100%;
        height: 100px;

        position: absolute;
        top: 0;
      }
    }
  }
}

.about-services {
  padding: 120px 0 108px;
  background-color: $black;
  overflow: hidden;

  @include small-tablet {
    padding-top: 55px;
  }

  &__image {
    margin: 0 auto 150px;

    width: 100%;
    height: 713px;
  }

  &__inner {
    display: grid;
    grid-template-columns: 30% 1fr;

    @include small-tablet {
      display: block;
    }
  }

  &__title {
    @include small-tablet {
      display: none;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 60px;

    @include mobile {
      gap: 50px;
    }
  }

  &__name.headline {
    font-size: 3rem;
    color: $white;

    @include mobile {
      font-size: 2.4rem;
      line-height: 24px;
    }

    span {
      font-size: .6em;
      color: rgba(#fff, .7);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    margin-top: 22px;

    @include mobile {
      gap: 20px;
    }

    @media (max-width: 440px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 14px;
    }

    @include small-mobile {
      margin-top: 12px;
    }
  }

  &__text {
    font-size: 1.6rem;
    line-height: 24px;
    color: rgba(#fff, .7);

    @include mobile {
      font-size: 1.4rem;
    }

    @media (max-width: 440px) {
      &:last-child {
        margin: 0;
      }
    }

    @include small-mobile {
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }
}
</style>