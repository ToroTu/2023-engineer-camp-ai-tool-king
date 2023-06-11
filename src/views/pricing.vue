<script setup>
import AiToolWrap from '../components/common/ai_tool_wrap.vue';
import BannerAnimate from '../components/common/banner_animate.vue';
import FaqItem from '../components/pricing/faq_item.vue';
import PricingWrap from '../components/pricing/pricing_wrap.vue';

const terms = [
  {
    title: '守法',
    content: '請遵守相關的法規和政策，不得進行任何違法違規的活動。',
  },
  {
    title: '資訊安全',
    content: '請務必保護好自己的帳號和密碼，不得將其透露給他人。',
  },
  {
    title: '守密',
    content: '需對使用過程中產生的數據負責，不得擅自泄露數據。',
  },
];

const faq = [
  {
    title: '如何選擇適合的AI模型？',
    content: '選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價和反饋，來選擇最合適的模型。',
  },
  {
    title: '租用模型的費用是如何計算的？',
    content: '租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、佔用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動計算出對應的租用費用。',
  },
  {
    title: '如何進行付款？',
    content: '付款方式可以通過網站上提供的線上支付平臺進行支付。具體而言，您可以選擇使用信用卡、銀行轉帳、電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用費用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。',
  },
  {
    title: '租用模型的期限是多久？',
    content: '租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。',
  },
  {
    title: '如果在使用過程中遇到問題，應該怎麼處理？',
    content: '如果在使用過程中遇到問題，您可以聯繫客服或技術支持人員進行諮詢或報告問題。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。',
  },
];

</script>

<template>
  <!-- Banner -->
  <div class="wrap jk-pt-10">
    <h1 class="text-heading-1 bold jk-mb-16 lg:text-display-2 lg:bold lg:jk-mb-20">用多少，<br />付多少。</h1>
    <p
      class="text-heading-4 bold jk-flex jk-justify-end jk-mb-[16.125rem] lg:text-heading-1 lg:bold lg:jk-mb-[14.875rem]">
      <span class="jk-block jk-w-[73.219%] jk-max-w-[25rem] lg:jk-max-w-[39.75rem]">我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。</span>
    </p>
    <BannerAnimate></BannerAnimate>
  </div>
  <!-- 定價 -->
  <div class="wrap jk-mt-[7.5rem] lg:jk-mt-40">
    <h2 class="text-heading-6 bold jk-mb-6 lg:text-heading-3 lg:bold lg:jk-mb-20">定價</h2>
    <PricingWrap></PricingWrap>
  </div>
  <!-- 使用規範 -->
  <div class="wrap jk-mt-[7.5rem] md:jk-flex md:jk-justify-between lg:jk-mt-40">
    <h2 class="text-heading-6 bold jk-mb-12 lg:text-heading-3 lg:bold md:jk-mb-0">使用規範</h2>
    <ul class="jk-text-black-0 md:jk-max-w-[66.05%] md:jk-flex-1">
      <li v-for="(item, i) in terms" :key="item.title" class="jk-pb-10 jk-border-b jk-border-solid jk-border-black-80"
        :class="{ 'jk-mt-6': i }">
        <h3 class="text-heading-3 bold jk-mb-6">{{ item.title }}</h3>
        <p class="text-body">{{ item.content }}</p>
      </li>
    </ul>
  </div>
  <!-- 工具王 -->
  <AiToolWrap class="jk-mt-[7.5rem]"></AiToolWrap>
  <!-- 常見問題 -->
  <div class="wrap jk-my-[7.5rem] md:jk-flex md:jk-justify-between lg:jk-my-40">
    <h2 class="text-heading-6 bold jk-mb-6 lg:text-heading-3 lg:bold md:jk-mb-0">常見問題</h2>
    <ul class="jk-text-black-0 md:jk-max-w-[66.05%] md:jk-flex-1">
      <li v-for="(ques, i) in faq" :key="ques.title" :class="{ 'jk-mt-4': i }">
        <FaqItem :="ques"></FaqItem>
      </li>
    </ul>
  </div>
</template>
