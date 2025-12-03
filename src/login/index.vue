<script setup lang="ts">
const roles = [
  {
    icon: 'user-setting',
    name: '园区管理人员',
    description: '负责日常监测、数据维护和运维工作',
    tag: { theme: 'primary', text: '操作级权限' },
  },
  {
    icon: 'user-marked',
    name: '监管人员',
    description: '负责指标配置、审核监督和标准评估',
    tag: { theme: 'warning', text: '管理级权限' },
  },
];
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-neutral-400">
    <div class="w-[500px] shadow-xl rounded-xl">
      <div class="py-8 text-center rounded-tl-xl rounded-tr-xl bg-linear-to-br text-white from-blue-700 to-purple-700">
        <div class="text-2xl font-bold">园区健康监管系统</div>
        <div class="pt-2">请选择您的角色登录</div>
      </div>
      <div class="flex gap-4 p-8 rounded-bl-xl rounded-br-xl bg-white">
        <div
          v-for="role in roles"
          class="flex-1 p-4 space-y-2 text-center cursor-pointer rounded-lg border-2 duration-300 border-neutral-200 bg-neutral-50 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-200"
          :key="role.name"
        >
          <t-icon :name="role.icon" class="text-5xl mb-4" />
          <div class="font-bold">{{ role.name }}</div>
          <div class="text-sm text-neutral-500">{{ role.description }}</div>
          <t-tag :theme="role.tag.theme" shape="round" variant="light">{{ role.tag.text }}</t-tag>
        </div>
      </div>
    </div>
  </div>
</template>
