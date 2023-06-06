<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import PartnerSwiperItem from './partner_swiper_item.vue';

const swiper = ref(null);

onMounted(() => {
  swiper.value = new Swiper('.partner-swiper', {
    spaceBetween: 12,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        spaceBetween: 12,
        slidesPerView: 2,
      },
      1024: {
        slidesPerGroup: 3,
        spaceBetween: 24,
        slidesPerView: 3,
      },
    },
  });
});
onBeforeMount(() => {
  swiper.value?.destroy();
});
</script>

<template>
  <div class="swiper jk-mt-12 jk-pb-9 partner-swiper lg:jk-mt-40 lg:jk-pb-10">
    <div class="swiper-wrapper">
      <div class="swiper-slide jk-h-auto">
        <PartnerSwiperItem :star="5"
          description="非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！"
          avatar-img="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar3.png?raw=true"
          avatar-alt="avatar 1" avatar-name="陳小姐" avatar-company="ABC科技有限公司">
        </PartnerSwiperItem>
      </div>
      <div class="swiper-slide jk-h-auto">
        <PartnerSwiperItem :star="5"
          description="作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！"
          avatar-img="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar1.png?raw=true"
          avatar-alt="avatar 2" avatar-name="劉小姐" avatar-company="XYZ 醫療器材有限公司">
        </PartnerSwiperItem>
      </div>
      <div class="swiper-slide jk-h-auto">
        <PartnerSwiperItem :star="5"
          description="我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！"
          avatar-img="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar2.png?raw=true"
          avatar-alt="avatar 3" avatar-name="黃先生" avatar-company="EFG 銀行">
        </PartnerSwiperItem>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style lang="scss">
@import '../../styles/variable';

.partner-swiper .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 0;
}

.partner-swiper .swiper-pagination-bullets.swiper-pagination-horizontal .swiper-pagination-bullet {
  vertical-align: middle;
}

.partner-swiper .swiper-pagination-bullet {
  background: $color-black-80;
  opacity: 1;
}

.partner-swiper .swiper-pagination-bullet-active {
  width: 0.75rem;
  height: 0.75rem;
  background: $color-black-0;
}
</style>
