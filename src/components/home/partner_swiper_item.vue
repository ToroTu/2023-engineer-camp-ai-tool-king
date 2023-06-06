<script setup>

defineProps({
  star: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: '',
  },
  avatarImg: {
    type: String,
    default: '',
  },
  avatarAlt: {
    type: String,
    default: '',
  },
  avatarName: {
    type: String,
    default: '',
  },
  avatarCompany: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="partner-comment jk-h-full jk-rounded-2xl jk-p-5 jk-bg-white/[0.08] jk-flex jk-flex-col lg:jk-p-10">
    <span class="text-body jk-flex jk-h-[1em]">
      <span class="material-icons jk-block jk-text-[length:1em] jk-mr-1" v-for="i in star" :key="i">
        star
      </span>
    </span>
    <p class="text-body jk-my-5 jk-text-black-20 jk-flex-1 lg:jk-min-h-[13.4375rem]">{{ description }}</p>
    <div class="text-body bold jk-flex jk-text-black-0">
      <div class="jk-self-start jk-w-[3em] jk-h-[3em] jk-mr-4 jk-rounded-full jk-overflow-hidden">
        <img class="jk-block jk-w-full jk-max-w-none" :src="avatarImg" :alt="avatarAlt" />
      </div>
      <div class="jk-flex-1">
        <span class="text-body bold jk-block jk-mb-1">{{ avatarName }}</span>
        <span class="text-small jk-block">{{ avatarCompany }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.partner-comment {
  box-shadow: 0px 100px 80px rgba(18, 18, 18, 0.07), 0px 41.7776px 33.4221px rgba(18, 18, 18, 0.0503198), 0px 22.3363px 17.869px rgba(18, 18, 18, 0.0417275), 0px 12.5216px 10.0172px rgba(18, 18, 18, 0.035), 0px 6.6501px 5.32008px rgba(18, 18, 18, 0.0282725),
    0px 2.76726px 2.21381px rgba(18, 18, 18, 0.0196802);
}
</style>
