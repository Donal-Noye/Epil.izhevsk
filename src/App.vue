<template>
  <div class="page">
    <TheHeader />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
    <a class="pulse-button" href="https://dikidi.net/494671?p=0.pi">
 
      <span class="pulse-button__icon"></span>
  
      <span class="pulse-button__rings"></span>
      <span class="pulse-button__rings"></span>
      <span class="pulse-button__rings"></span>
  
    </a>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  setup () {
  },
  components: { TheHeader, TheFooter }
}
</script>

<style lang="scss">
.page {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .4s $ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.pulse-button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 40px;
  padding: 10px;
  border: none;
  background: #E32626;
  box-shadow: $shadow;
  position: fixed;
  bottom: 50px;
  right: 70px;
  cursor: pointer;
  outline: none;
  z-index: 1000;

  @include mobile {
    right: 30px;
    bottom: 30px;

    width: 60px;
    height: 60px;
  }

  &__icon {
    display: block;
    width: 24px;
    height: 24px;
    background: url("./assets/img/icon/desk.svg") center center/cover no-repeat;

    @include mobile {
      width: 18px;
      height: 18px;
    }
  }
}

.pulse-button__rings {
  border: 1px solid #E32626;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
  width: auto;
  border-radius: 50%;
  animation-duration: 2.0s;
  animation-name: pulse_1;
  animation-iteration-count: infinite;
  z-index: -1;
}
 
.pulse-button__rings:nth-child(2) {
  animation-name: pulse_2;
}
 
.pulse-button__rings:nth-child(3) {
  animation-name: pulse_3;
}

@keyframes pulse_1 {
  from {
    opacity: 1;
    transform: scale(0.9, 0.9);
  }
 
  to {
    opacity: 0;
    transform: scale(1.3, 1.3);
  }
}
 
@keyframes pulse_2 {
  from {
    opacity: 1;
    transform: scale(0.8, 0.8);
  }
 
  to {
    opacity: 0;
    transform: scale(1.5, 1.5);
  }
}
 
@keyframes pulse_3 {
  from {
    opacity: 1;
    transform: scale(0.8, 0.8);
  }
 
  to {
    opacity: 0;
    transform: scale(1.7, 1.7);
  }
}
</style>
