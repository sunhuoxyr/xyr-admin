<template>
  <div class="flex h-screen bg-none lg:bg-login">
    <div class="center hidden lg:flex">
      <img :src="illustration" class="-enter-x" />
    </div>
    <div class="flex center flex-col">
      <Icon type="logo" size="70" class="enter-y" />
      <div class="title enter-y">xyr Admin</div>
      <div class="form enter-y">
        <div :class="['group', { active: isSelected.account }]">
          <icon-mdi-account />
          <div class="ml-2 relative">
            <div class="label">用户名</div>
            <input
              v-model="form.account"
              type="text"
              @focus="onFocus('account')"
              @blur="onBlur('account')"
            />
          </div>
        </div>
        <div :class="['group mt-8', { active: isSelected.password }]">
          <icon-mdi-password />
          <div class="ml-2 relative">
            <div class="label">密码</div>
            <input
              v-model="form.password"
              type="password"
              @focus="onFocus('password')"
              @blur="onBlur('password')"
            />
          </div>
        </div>
        <div class="mt-8">
          <el-button type="primary" class="w-full" round @click="login"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { generatePath } from '@/utils/source';
import loginApi from '@/api/login';

interface FormUser {
  account: string;
  password: string;
}

const getIllustration = () => {
  const week = new Date().getDay();
  const path = `src/assets/login/week/illustration${week}.svg`;
  return generatePath(path);
};

const illustration = getIllustration();

const form: FormUser = reactive({
  account: 'vben',
  password: '123456',
});
const isSelected = reactive({
  account: false,
  password: false,
});
const onFocus = <key extends keyof FormUser>(type: key) => {
  isSelected[type] = true;
};

const onBlur = <key extends keyof FormUser>(type: key) => {
  isSelected[type] = form[type].length > 0;
};

const login = async () => {
  try {
    const result = await loginApi(form);
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped>
$_groupHeight: 45px;
$_activeColor: #5392f0;
$_unactiveColor: #d9d9d9;
.center {
  @apply flex-1 items-center justify-center;
}

.form {
  width: 360px;
}
.title {
  @apply my-4 font-bold;
  color: #999;
  font-size: 2rem;
  text-transform: uppercase;
}

.group {
  @apply flex items-center;
  color: $_unactiveColor;
  border-bottom: 2px solid currentColor;
  height: $_groupHeight;
  line-height: $_groupHeight;

  .label {
    text-align: left;
    color: $_unactiveColor;
    font-weight: bold;
    font-size: 18px;
    transform: translateY(0);
    transition-property: transform font-size;
    transition-duration: 0.4s;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    color: #555;
    background: transparent;
  }
}

.active {
  color: $_activeColor;
  .label {
    transform: translateY(-1.8rem);
    font-size: 0.9rem;
    transition-property: transform font-size;
    transition-duration: 0.4s;
  }
}
</style>
