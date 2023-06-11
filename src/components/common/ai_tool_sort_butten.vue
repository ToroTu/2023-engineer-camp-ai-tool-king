<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    default: () => [],
  },
  selectedItem: {
    type: Object,
    default: () => null,
  },
});

const emit = defineEmits(['update:selectedItem'])

const renderId = Math.random().toString(36).slice(2);
const refToggle = ref(null);

const onChangeChecked = (event) => {
  const { value } = event.target;
  emit('update:selectedItem', props.items.find((item) => item.value == value));
  refToggle.value.checked = false;
};

</script>

<template>
  <div class="tool-filter-btn-wrap jk-relative">
    <input ref="refToggle" class="jk-hidden jk-absolute" :id="renderId" type="checkbox" />
    <button class="tool-filter-btn text-body" type="button">
      <label :for="renderId">
        <span>{{ selectedItem?.name }}</span>
        <span class="material-icons jk-ml-3 jk-text-[length:inherit]">keyboard_arrow_down</span>
      </label>
    </button>
    <div
      class="tool-filter-menu jk-hidden jk-absolute jk-top-full jk-right-0 jk-mt-1 jk-py-4 jk-rounded-2xl jk-box-border jk-bg-black-0 jk-z-[1]">
      <ul class="text-body">
        <li v-for="item in items" :key="item.id">
          <label class="tool-filter-option jk-block jk-w-full jk-cursor-pointer">
            <input class="jk-hidden jk-absolute" type="radio" :name="name" :value="item.value" :checked="selectedItem?.id === item
              .id" @change="onChangeChecked($event)" />
            <span
              class="jk-flex jk-justify-between jk-items-center jk-w-full jk-text-black-100 jk-box-border jk-py-1 jk-px-10">{{
                item.name }}</span>
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
