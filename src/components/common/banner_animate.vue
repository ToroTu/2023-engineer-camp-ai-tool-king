<template>
  <div class="banner-animate jk-flex jk-overflow-hidden banner-animate">
    <span v-for="i in 3" :key="i">
      <svg width="117" height="117" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M52 0H65V78C66.8414 75.5449 68.8583 73.2178 71.0381 71.0381C77.0739 65.0023 84.2394 60.2144 92.1256 56.9478C100.012 53.6813 108.464 52 117 52V65C110.171 65 103.409 66.345 97.1005 68.9583C90.7915 71.5715 85.0591 75.4018 80.2305 80.2304C75.4018 85.0591 71.5715 90.7915 68.9583 97.1005C66.3486 103.401 65.0037 110.153 65 116.972C65 116.981 65 116.991 65 117H52V116.98C51.9974 110.158 50.6525 103.403 48.0417 97.1005C45.4285 90.7915 41.5982 85.0591 36.7696 80.2305C31.9409 75.4018 26.2085 71.5715 19.8995 68.9583C13.5906 66.345 6.82874 65 0 65L-8.57229e-06 117V52C8.53591 52 16.9883 53.6813 24.8744 56.9478C32.7606 60.2144 39.9261 65.0023 45.9619 71.0381C48.1417 73.2178 50.1586 75.5449 52 78V0Z"
          fill="white" />
      </svg>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/mixin';

.banner-animate {
  span {
    position: relative;
    display: block;
    flex: 1 0 0;
    max-width: 7.3125rem;
    transform: translateY(110%);
    animation: banner-animate 4s infinite;

    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 100%;
    }

    &:nth-child(1) {
      animation-delay: 0.6s;
    }

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    @include media(lg) using ($type) {
      max-width: 11.25rem;
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
}

@keyframes banner-animate {
  0% {
    transform: translateY(110%);
    opacity: 0;
  }

  1% {
    opacity: 1;
  }

  40% {
    transform: translateY(0%);
  }

  60% {
    transform: translateY(0%);
  }

  90% {
    transform: translateY(-110%);
    opacity: 1;
  }

  91%,
  100% {
    opacity: 0;
  }
}
</style>
