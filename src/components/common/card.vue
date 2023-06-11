<script setup>
import { onMounted, ref } from "vue";

defineProps({
  description: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  model: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
});

const refImg = ref(null);

/**
 * 檢查 lozad 是否存在
 */
function checkLozad() {
  return new Promise((resolve, reject) => {
    const check = () => {
      if (typeof lozad !== 'undefined') {
        console.log('lozad is ready');
        resolve();
      } else {
        console.warn('wait for lozad');
        setTimeout(check, 300);
      }
    };
    check();
  });
}

/**
 * 延遲載入圖片
 */
async function lazyImage() {
  await checkLozad()
  const observer = lozad(refImg.value, {
    load: (el) => {
      const imgSrc = el.getAttribute('data-src');
      if (!imgSrc) {
        return;
      };
      const CLASS_NAME_LOADING = 'start-loading';
      const CLASS_NAME_LOADED = 'active-loaded';
      const icon = el.parentNode.querySelector('.loading-icon');
      if (icon) {
        icon.addEventListener('transitionend', (event) => {
          if ('opacity' === event.propertyName) {
            icon.remove();
            el.classList.remove(CLASS_NAME_LOADING, CLASS_NAME_LOADED);
          }
        });
      };
      el.onload = () => {
        el.classList.add(CLASS_NAME_LOADED);
      };
      el.onerror = () => {
        el.classList.remove(CLASS_NAME_LOADING);
      };
      el.classList.add(CLASS_NAME_LOADING);
      el.src = imgSrc;
    },
  });
  observer.observe();
}

onMounted(() => {
  lazyImage();
});

</script>

<template>
  <div
    class="jk-box-border jk-overflow-hidden jk-rounded-2xl jk-border jk-border-solid jk-border-black-20 jk-bg-black-0 jk-mx-auto jk-max-w-[22rem] md:jk-max-w-[26rem]">
    <a :href="link"
      class="card-img jk-relative jk-block jk-mx-auto jk-overflow-hidden jk-max-h-[19.5rem] before:jk-block before:jk-w-full before:jk-pt-[88.89%]">
      <img ref="refImg"
        class="lozad jk-absolute jk-top-0 jk-left-1/2 jk-block jk-h-full jk-max-w-none jk-transition-transform jk-duration-[280ms]"
        :data-src="imageUrl" alt="card image" loading="lazy" />
      <span
        class="loading-icon jk-absolute jk-top-0 jk-left-0 jk-flex jk-justify-center jk-items-center jk-w-full jk-h-full jk-bg-cover"></span>
      <noscript>
        <img :src="imageUrl" alt="card image" />
      </noscript>
    </a>
    <div class="card-intro jk-block jk-py-5 jk-px-8 jk-text-black-100">
      <h3 class="card-title text-heading-6 bold">{{ title }}</h3>
      <p class="text-small jk-mt-3 jk-text-black-80">{{ description }}</p>
    </div>
    <div
      class="text-body jk-flex jk-justify-between jk-items-center jk-py-5 jk-px-8 jk-text-black-100 jk-border-t jk-border-solid jk-border-black-20">
      <h4 class="text-body bold">AI 模型</h4>
      <span class="name">{{ model }}</span>
    </div>
    <div
      class="text-body jk-flex jk-justify-between jk-items-center jk-py-5 jk-px-8 jk-text-black-100 jk-border-t jk-border-solid jk-border-black-20">
      <span class="tag">#{{ type }}</span>
      <button type="button"
        class="text-heading-5 jk-inline-flex jk-justify-center jk-items-center jk-w-[1em] jk-h-[1em] jk-bg-transparent jk-border-none jk-outline-none jk-align-text-bottom jk-cursor-pointer hover:jk-text-black-60">
        <span class="material-icons"> share </span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/variable';

.card-img {
  img {
    transform: translateX(-50%);
    transform-origin: center;
  }

  &:hover img {
    transform: scale(1.21) translateX(-50%);
  }
}

.card-intro p {
  height: 2em * $line-height-1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.loading-icon {
  background: url(data:image/png;base64,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) no-repeat center;
  transition: all 0.28s, opacity 0.5s;

  .start-loading+& {
    width: 105%;
    height: 105%;
    margin-left: -2.5%;
    margin-top: -2.5%;
    filter: blur(8px);
  }

  .active-loaded+& {
    opacity: 0;
  }
}
</style>
