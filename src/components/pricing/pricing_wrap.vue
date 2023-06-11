<script setup>
const items = [
  {
    id: 1,
    name: '琪琪',
    advantage: ['初級', '速度最快'],
    price: 5,
  },
  {
    id: 2,
    name: '昊昊',
    advantage: ['中級'],
    price: 5,
  },
  {
    id: 3,
    name: '卡卡',
    advantage: ['高級'],
    price: 5,
  },
  {
    id: 4,
    name: '杰杰',
    advantage: ['最高級', '資訊最完善'],
    price: 5,
  },
];
</script>

<template>
  <ul class="-jk-mt-3 -jk-ml-3 jk-flex jk-flex-wrap lg:-jk-mt-6 lg:-jk-ml-6">
    <li v-for="item in items" :key="item.id"
      class="jk-mt-3 jk-ml-3 jk-w-full md:jk-w-[calc(50%-0.75rem)] lg:jk-mt-6 lg:jk-ml-6 lg:jk-w-[calc(50%-1.5rem)]">
      <a class="jk-block jk-rounded-2xl jk-border jk-border-solid jk-border-black-80 hover:jk-border-black-0 jk-transition-all jk-duration-300 jk-cursor-pointer"
        href="javascript:void(0);">
        <div class="jk-flex jk-flex-col jk-p-5 jk-min-h-[11rem] lg:jk-px-8 lg:jk-min-h-[15.875rem]">
          <h3 class="text-heading-3 bold jk-text-black-0 jk-mb-3">{{ item.name }}</h3>
          <ul class="text-body jk-text-black-20 jk-flex-1">
            <li v-for="ad in item.advantage" :key="ad" class="before:jk-content-['．']">{{ ad }}</li>
          </ul>
        </div>
        <div
          class="jk-border-t jk-border-solid jk-border-black-80 jk-p-5 jk-flex jk-justify-between jk-items-center jk-text-black-0 lg:jk-px-8">
          <span class="text-heading-6 jk-text-black-60"><span class="text-heading-6 bold jk-text-black-0">NT${{ item.price
          }}</span>／1k
            tokens</span>
          <span class="jk-inline-flex jk-items-center">開始使用<span class="material-icons jk-text-[length:1em] jk-ml-3">
              call_made </span></span>
        </div>
      </a>
    </li>
  </ul>
</template>
