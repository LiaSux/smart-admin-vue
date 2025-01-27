<script lang="ts" setup="">
import { useSmart } from '@smart/admin'
import bg from '@smart/admin/assets/background.jpeg'
import logo from '@smart/admin/assets/logo.png'
import { useTitle } from '@vueuse/core'
import { type FormInstance, message } from 'ant-design-vue'

useTitle('Smart - 登录')

const { userStore } = useSmart()

// const userType = route.path === '/merchant/login' ? 'mch' : 'admin'
// if (userIsLogin(userType)) {
//   router.push(`/${userType}`)
// }

const loading = ref<boolean>(false)
const formRef = ref<FormInstance>()
const form = reactive({
  mobile: '',
  password: '',
})

const rules = {
  mobile: [
    { required: true, message: '手机号不能为空' },
  ],
  password: [
    { required: true, message: '密码不能为空' },
  ],
}

async function onSubmit() {
  try {
    loading.value = true
    await formRef.value.validate()
    const result = await AuthApi.login(form)
    if (result.success) {
      // userStore.login(userType, result.data)
      // await router.push(`/${userType}`)
    }
    else {
      message.error(result.msg)
    }
  }
  catch {}
  finally {
    loading.value = false
  }
}
</script>

<template>
  <a-flex
    class="w-full h-full bg-cover bg-no-repeat"
    justify="flex-end"
    align="center"
    :style="{ backgroundImage: `url(${bg})` }"
  >
    <a-flex align="center" class="h-full px-[75px] bg-[#d8eafb] bg-opacity-50">
      <a-flex vertical>
        <a-flex justify="flex-start" class="leading-[40px]">
          <img :src="logo" class="w-[40px] h-[40px]">
          <span class="text-[28px] pl-3 text-[#444]">Smart Admin 系统登录</span>
        </a-flex>
        <a-form
          ref="formRef"
          :model="form"
          class="w-[350px] py-[20px] text-[#fff]"
          :loading="loading"
        >
          <a-form-item :rules="rules.mobile" name="mobile">
            <a-input
              v-model:value="form.mobile"
              size="large"
              placeholder="请输入手机号"
            />
          </a-form-item>
          <a-form-item :rules="rules.password" name="password">
            <a-input-password v-model:value="form.password" size="large" placeholder="请输入密码" />
          </a-form-item>
          <sm-button text="登录" size="large" type="primary" class="w-full" @click="onSubmit" />
        </a-form>
      </a-flex>
    </a-flex>
  </a-flex>
</template>

<style>
.ant-select-selection-item {
  color: #333;
}
</style>
