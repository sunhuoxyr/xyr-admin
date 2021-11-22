<template>
  <div class="icon">
    <icon-local-logo v-if="props.type === 'logo'" />
    <slot v-else> </slot>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: [Number, String],
    default: 24,
  },
  color: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: '',
  },
});
const size = computed(() => `${props.size}px`);
const color = computed(() => `${props.color}`);
</script>
<style lang="scss" scoped>
.icon {
  font-size: v-bind(size);
  color: v-bind(color);
}
</style>
