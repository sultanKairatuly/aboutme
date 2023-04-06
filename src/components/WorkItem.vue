<template>
  <div class="work">
    <q-card class="my-card">
      <q-card-section class="bg-grey-3 text-black">
        <h3 class="text-h5">{{ props.work.name }}</h3>
        <div class="text-body1 text-weight-light">
          {{ props.work.description }}
        </div>
        <q-badge
          color="red q-pa-xsm q-my-sm text-body1"
          v-if="!props.work.adaptive"
        >
          Не адаптировано<q-icon name="warning" color="white" class="q-ml-xs" />
        </q-badge>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn flat>
          <a
            :href="work.link"
            target="_blank"
            class="text-weight-medium text-subtitle1 q-pa-sm"
            style="text-decoration: none; color: #000"
            >Посмотреть</a
          >
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps({
  work: Object,
});
</script>

<style scoped>
.my-card {
  width: 300px;
  height: 300px;
}
.q-card__section {
  height: 80%;
}
</style>
