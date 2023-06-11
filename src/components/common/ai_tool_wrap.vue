<script setup>
import AiToolContainer from './ai_tool_container.vue';
import Card from './card.vue';

</script>

<template>
  <div
    class="-jk-mx-3 jk-rounded-[1.25rem] jk-bg-black-0 jk-py-20 jk-px-3 md:-jk-mx-6 md:jk-px-6 md:jk-rounded-[5rem] lg:jk-rounded-[10rem] lg:jk-py-40">
    <div class="wrap">
      <h2
        class="text-heading-3 bold jk-mb-8 jk-px-[1em] jk-text-black-100 jk-text-center lg:text-display-3 lg:bold lg:jk-px-0 lg:jk-mb-20">
        這些超酷的應用，都來自 AI工具王</h2>
      <!-- 工具王 - 搜尋、篩選、分頁 -->
      <AiToolContainer>
        <template #default="{ data }">
          <!-- 展示列表 -->
          <div class="jk-mt-12 jk-overflow-hidden">
            <ul class="-jk-mt-[3.419%] -jk-ml-[3.419%] lg:-jk-mt-[1.852%] lg:-jk-ml-[1.852%] jk-flex jk-flex-wrap">
              <li v-for="item in data" :key="item.id"
                class="jk-w-full jk-mt-[3.3058%] jk-ml-[3.3058%] md:jk-w-[46.6942%] lg:jk-mt-[1.818%] lg:jk-ml-[1.818%] lg:jk-w-[31.5153%]">
                <Card :description="item.description" :image-url="item.imageUrl" :link="item.link" :model="item.model"
                  :title="item.title" :type="item.type"></Card>
              </li>
            </ul>
          </div>
        </template>
      </AiToolContainer>
    </div>
  </div>
</template>
