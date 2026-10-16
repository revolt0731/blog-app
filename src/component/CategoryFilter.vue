<!-- 文件路径：src/components/CategoryFilter.vue -->
<script setup>
const props = defineProps({
  categories: Array,          // 所有分类列表
  activeCategory: String      // 当前选中的分类
})

// 声明要发送的事件
const emit = defineEmits(['update-category'])

function selectCategory(cat) {
  // 触发事件，将选中的分类传给父组件
  emit('update-category', cat)
}
</script>

<template>
  <div class="filter-bar">
    <button
      v-for="cat in categories"
      :key="cat"
      :class="{ active: activeCategory === cat }"
      @click="selectCategory(cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>

</style>