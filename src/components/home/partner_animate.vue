<script setup>
/**
 * @type {{ src:string, alt:string }[]}
 */
const imgsRow1 = [
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise1.png?raw=true',
    alt: 'enterprise 1'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise2.png?raw=true',
    alt: 'enterprise 2'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise3.png?raw=true',
    alt: 'enterprise 3'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise4.png?raw=true',
    alt: 'enterprise 4'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise5.png?raw=true',
    alt: 'enterprise 5'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise6.png?raw=true',
    alt: 'enterprise 6'
  },
];
/**
 * @type {{ src:string, alt:string }[]}
 */
const imgsRow2 = [
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise7.png?raw=true',
    alt: 'enterprise 7'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise8.png?raw=true',
    alt: 'enterprise 8'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise9.png?raw=true',
    alt: 'enterprise 9'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise5.png?raw=true',
    alt: 'enterprise 5'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise11.png?raw=true',
    alt: 'enterprise 11'
  },
  {
    src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise12.png?raw=true',
    alt: 'enterprise 12'
  },
];
</script>

<template>
  <div class="jk-relative">
    <div class="jk-absolute jk-top-0 -jk-left-3 jk-z-[1] lg:-jk-left-px">
      <span class="jk-block jk-h-10 jk-w-[5.1875rem] partner-gradient lg:jk-w-[12.25rem]"></span>
      <span class="jk-mt-3 jk-block jk-h-10 jk-w-[5.1875rem] partner-gradient lg:jk-mt-5 lg:jk-w-[12.25rem]"></span>
    </div>
    <div class="jk-flex jk-overflow-hidden">
      <div class="partner-list" v-for="i in 3" :key="i">
        <ul class="jk-flex jk-translate-x-[-3.875rem]">
          <li v-for="(item, index) in imgsRow1" :key="item.alt" :class="{ 'jk-ml-5': index }">
            <img class="jk-block jk-max-w-none jk-h-10" :src="item.src" :alt="item.alt" />
          </li>
        </ul>
        <ul class="jk-flex jk-mt-3 jk-translate-x-[1rem] lg:jk-mt-5">
          <li v-for="(item, index) in imgsRow2" :key="item.alt" :class="{ 'jk-ml-5': index }">
            <img class="jk-block jk-max-w-none jk-h-10" :src="item.src" :alt="item.alt" />
          </li>
        </ul>
      </div>
    </div>
    <div class="jk-absolute jk-top-0 -jk-right-3 jk-z-[1] -jk-scale-x-100 lg:-jk-left-px">
      <span class="jk-block jk-h-10 jk-w-[5.1875rem] partner-gradient lg:jk-w-[12.25rem]"></span>
      <span class="jk-mt-3 jk-block jk-h-10 jk-w-[5.1875rem] partner-gradient lg:jk-mt-5 lg:jk-w-[12.25rem]"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partner-gradient {
  background: linear-gradient(90deg,
      #000000 0%,
      rgba(0, 0, 0, 0.991615) 11.79%,
      rgba(0, 0, 0, 0.967585) 21.38%,
      rgba(0, 0, 0, 0.9296) 29.12%,
      rgba(0, 0, 0, 0.879348) 35.34%,
      rgba(0, 0, 0, 0.818519) 40.37%,
      rgba(0, 0, 0, 0.7488) 44.56%,
      rgba(0, 0, 0, 0.671881) 48.24%,
      rgba(0, 0, 0, 0.589452) 51.76%,
      rgba(0, 0, 0, 0.5032) 55.44%,
      rgba(0, 0, 0, 0.414815) 59.63%,
      rgba(0, 0, 0, 0.325985) 64.66%,
      rgba(0, 0, 0, 0.2384) 70.88%,
      rgba(0, 0, 0, 0.153748) 78.62%,
      rgba(0, 0, 0, 0.0737185) 88.21%,
      rgba(0, 0, 0, 0) 100%);
}

.partner-list {
  animation-duration: 40s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}

.partner-list:nth-of-type(1) {
  animation-name: partner-list-1;
}

.partner-list:nth-of-type(2) {
  animation-name: partner-list-2;
}

.partner-list:nth-of-type(3) {
  animation-name: partner-list-3;
}

@keyframes partner-list-1 {

  /* 0% */
  0% {
    transform: translateX(0);
  }

  /* 1% */
  33.33% {
    transform: translateX(-100%);
  }

  49% {
    opacity: 1;
  }

  /* 1.5% */
  49.995% {
    transform: translateX(-150%);
    opacity: 0;
  }

  /* 1.5% */
  50.1% {
    transform: translateX(150%);
    opacity: 0;
  }

  50.5% {
    opacity: 1;
  }

  /* 2% */
  66.67% {
    transform: translateX(100%);
  }

  /* 3% */
  100% {
    transform: translateX(0%);
  }
}

@keyframes partner-list-2 {

  /* 0% */
  0% {
    transform: translateX(0);
  }

  /* 1% */
  33.33% {
    transform: translateX(-100%);
  }

  /* 2% */
  66.67% {
    transform: translateX(-200%);
  }

  /* 2.5% */
  83.325% {
    transform: translateX(-250%);
    opacity: 1;
  }

  83.4% {
    opacity: 0;
  }

  /* 2.5% */
  83.5% {
    transform: translateX(50%);
    opacity: 0;
  }

  83.6% {
    opacity: 1;
  }

  /* 3% */
  100% {
    transform: translateX(0%);
  }
}

@keyframes partner-list-3 {

  /* 0% */
  0% {
    transform: translateX(0);
    opacity: 0;
  }

  1% {
    opacity: 1;
  }

  99.8% {
    opacity: 1;
  }

  /* 3% */
  99.9% {
    transform: translateX(-300%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 0;
  }
}
</style>
