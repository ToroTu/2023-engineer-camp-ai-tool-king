<script setup>
import { RouterLink } from 'vue-router';
import { MAP_ROUTE_PATH } from '../enums';
import ButtonStart from '../components/home/button_start.vue';
import BannerAnimate from '../components/common/banner_animate.vue';
import ServiceItem from '../components/home/service_item.vue';
import PartnerAnimate from '../components/home/partner_animate.vue';
import PartnerSwiper from '../components/home/partner_swiper.vue';
import AiToolWrap from '../components/common/ai_tool_wrap.vue';

</script>

<template>
  <!-- Banner -->
  <div class="wrap jk-pt-10">
    <h1 class="text-heading-1 bold jk-w-[72%] jk-mb-10 lg:text-display-2 lg:bold lg:jk-w-full">
      <span>透過</span>
      <br />
      <span>AI 工具王的</span>
      <br />
      <span>強大模型</span>
      <br />
      <span>讓您的業務更聰明</span>
    </h1>
    <ButtonStart :tag="RouterLink" :to="MAP_ROUTE_PATH.PRICING"
      class="text-heading-6 bold jk-mb-[11.25rem] lg:jk-mb-[6.25rem]">開始使用</ButtonStart>
    <BannerAnimate class="jk-justify-end"></BannerAnimate>
  </div>
  <!--  我們的服務 -->
  <div class="wrap jk-mt-[7.5rem] md:jk-flex md:jk-flex-wrap md:jk-justify-between lg:jk-mt-40">
    <h2 class="text-heading-6 bold jk-mb-6 md:jk-mb-0 lg:text-heading-3 lg:bold">我們的服務</h2>
    <p class="text-heading-3 bold md:jk-flex-1 md:jk-max-w-[66.05%] md:jk-flex md:jk-flex-wrap lg:text-heading-1 lg:bold">
      <span>我們相信透過 AI 技術，</span><span>包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。</span>
    </p>
    <ul class="jk-mt-12 md:jk-w-full lg:jk-mt-20 lg:jk-flex">
      <ServiceItem tag="li" title="快速" description="我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。">
        <template #icon="{ klass }">
          <span class="material-icons" :class="klass">
            flash_on
          </span>
        </template>
      </ServiceItem>
      <ServiceItem tag="li" title="靈活" description="我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。"
        class="jk-mt-3 lg:jk-mt-0 lg:jk-ml-6">
        <template #icon="{ klass }">
          <span class="material-icons" :class="klass">
            auto_awesome
          </span>
        </template>
      </ServiceItem>
      <ServiceItem tag="li" title="擴充" description="我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。"
        class="jk-mt-3 lg:jk-mt-0 lg:jk-ml-6">
        <template #icon="{ klass }">
          <span class="material-icons" :class="klass">
            library_add
          </span>
        </template>
      </ServiceItem>
    </ul>
  </div>
  <!-- 合作夥伴 -->
  <div class="wrap jk-mt-[7.5rem] lg:jk-mt-40">
    <h2 class="text-heading-6 bold jk-mb-6 lg:text-heading-3 lg:bold lg:jk-mb-20">來自合作夥伴</h2>
    <PartnerAnimate></PartnerAnimate>
    <PartnerSwiper></PartnerSwiper>
  </div>
  <!-- 工具王 -->
  <AiToolWrap class="jk-mt-[7.5rem]"></AiToolWrap>
  <!-- 開始使用 -->
  <div class="wrap jk-my-10 jk-py-[7.5rem] jk-flex jk-flex-col jk-items-center jk-text-center jk-text-black-0">
    <h2 class="text-heading-3 bold jk-flex jk-flex-wrap jk-justify-center jk-mb-8 lg:text-heading-1 lg:bold lg:jk-mb-10">
      <span>現在就來建立</span>
      <span>屬於你的服務吧</span>
    </h2>
    <ButtonStart :tag="RouterLink" :to="MAP_ROUTE_PATH.PRICING" class="text-heading-6 bold !jk-pr-8 !jk-pl-10">開始使用<span
        class="material-icons jk-text-[1.2em] jk-ml-3"> call_made </span></ButtonStart>
  </div>
</template>

<style lang="scss" scoped></style>
