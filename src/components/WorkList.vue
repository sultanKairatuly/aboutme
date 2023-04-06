<template>
  <h1 class="title">Демо версии проектов</h1>
  <div class="works q-pa-md wrap row justify-center">
    <WorkItem
      v-for="work in props.works"
      :key="work.id"
      :work="work"
    ></WorkItem>
  </div>
</template>

<script setup>
import WorkItem from "./WorkItem.vue";

const props = defineProps({
  works: {
    type: Array,
    default: () => [],
    required: true,
  },
});
</script>

<style scoped>

.works {
  row-gap: 40px;
  column-gap: 40px;
}

.title {
  font-size: 20px;
  text-align: center;
}
</style>
