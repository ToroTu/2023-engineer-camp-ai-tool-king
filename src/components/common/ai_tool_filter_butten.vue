<!-- 暫時無用 -->
<script setup>

defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <div class="tool-filter-btn-wrap jk-relative" :class="{ '!jk-pointer-events-none !jk-opacity-50': disabled }">
    <input class="jk-hidden jk-absolute" id="tool-filter-btn" type="checkbox" />
    <button class="text-body tool-filter-btn" type="button">
      <label for="tool-filter-btn">篩選<span
          class="material-icons jk-ml-3 jk-text-[length:inherit]">filter_alt</span></label>
    </button>
    <div
      class="wrap jk-hidden jk-absolute jk-top-full jk-left-0 jk-mt-1 jk-py-4 jk-rounded-2xl jk-box-border jk-bg-black-0 jk-w-[calc(100vw-1.5rem)] tool-filter-menu jk-z-[1] md:jk-w-60">
      <span class="text-tiny bold jk-block jk-text-black-60 jk-my-1 jk-pr-8 jk-pl-10">AI 模型</span>
      <ul class="text-body">
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="aimode" value="all" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">所有模型<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="aimode" value="卡卡" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">卡卡<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="aimode" value="杰杰" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">杰杰<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="aimode" value="琪琪" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">琪琪<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="aimode" value="昊昊" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">昊昊<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
      </ul>
      <span class="jk-block jk-mt-3 jk-ml-10 jk-mr-8 jk-mb-6 jk-border-b jk-border-solid jk-border-black-20"></span>
      <span class="text-tiny bold jk-block jk-text-black-60 jk-my-1 jk-pr-8 jk-pl-10">類型</span>
      <ul class="text-body">
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="all" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">所有模型<span
                class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="1" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              1<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="2" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              2<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="3" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              3<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="4" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              4<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="5" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              5<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
        <li>
          <label class="jk-block jk-w-full jk-cursor-pointer tool-filter-option">
            <input class="jk-hidden jk-absolute" type="radio" name="cate" value="6" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-pr-8 jk-pl-10">篩選項目
              6<span class="material-icons jk-hidden jk-text-[1em]">check</span></span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/variable';

.tool-filter-btn {
  display: block;
  padding: 0;
  color: $color-black-100;
  background: transparent;
  box-shadow: inset 0 0 0 1px $color-black-20;
  border: none;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2rem 1.25rem 2.5rem;
    border-radius: inherit;
    cursor: inherit;
    box-sizing: border-box;
  }
}

.tool-filter-menu {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
}

.tool-filter-option {

  &:hover>span,
  &>input:checked+span {
    background-color: $color-black-20;
  }

  &>input:checked+span>.material-icons {
    display: block;
  }
}

.tool-filter-btn-wrap {
  &>input:checked+.tool-filter-btn {
    box-shadow: inset 0 0 0 1px $color-black-100;
  }

  &>input:checked~.tool-filter-menu {
    display: block;
  }
}
</style>
