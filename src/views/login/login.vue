<template>
  <div class="flex h-screen md:bg-none lg:bg-login">
    <div class="flex flex-1 items-center justify-center">
      <img :src="illustration" />
    </div>
    <div class="flex-1">
      <!-- <icon-local-logo style="font-size: 60px" />
      <Icon size="60" color="red">
        <icon-mdi-account />
      </Icon>
      <Icon size="60" type="logo"> </Icon> -->
      <test></test>
      <Icon />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { generatePath } from '@/utils/source';
import test from '@/components/Icon/login';
import Icon from '@/components/Icon/icon.vue';

const getIllustration = () => {
  const week = new Date().getDay();
  const path = `src/assets/login/week/illustration${week}.svg`;
  return generatePath(path);
};

const illustration = getIllustration();
</script>

<style scoped></style>
