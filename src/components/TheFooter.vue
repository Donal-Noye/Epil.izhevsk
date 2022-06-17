<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <p class="footer__text">*Имеются противопоказания, необходима консультация специалиста.</p>
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="https://www.instagram.com/epil.izhevsk/" target="_blank">Instagram</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="https://vk.com/epilashkaizh" target="_blank">VK</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="tel:+79991894025">+7 (999) 189-40-25</a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="https://yandex.ru/maps/-/CCUJBLHllB" target="_blank">ул. Вадима Сивкова 273, Ижевск</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss">
.footer {
  margin-top: auto;
  border-top: 1px solid $white;

  background-color: #fff;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;

    @include small-mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }

  &__text {
    width: 30%;

    font-size: 1.4rem;
    line-height: 20px;
    color: rgba($black, .4);

    @include small-mobile {
      width: 100%;
    }
  }

  &__list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;

    width: 30%;
    text-align: right;

    @include small-tablet {
      width: 50%;
    }

    @include small-mobile {
      width: 100%;
      justify-content: flex-start;
    }
  }

  &__link {
    font-size: 1.4rem;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>