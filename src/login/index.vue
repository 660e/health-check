<script setup lang="ts">
console.log('login');
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-neutral-400">
    <div class="w-[500px] shadow-xl rounded-xl">
      <div class="py-6 text-center rounded-tl-xl rounded-tr-xl bg-linear-to-br text-white from-sky-700 to-purple-700">
        <div class="text-2xl font-bold">园区健康监管系统</div>
        <div class="pt-2">请选择您的角色登录</div>
      </div>
      <div class="flex gap-8 p-8 rounded-bl-xl rounded-br-xl text-center bg-white">
        <div
          class="flex-1 p-8 space-y-4 cursor-pointer border-2 rounded-lg duration-300 bg-neutral-50 border-neutral-200 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500"
        >
          <div class="text-base font-bold">园区管理人员</div>
          <div>负责日常监测、数据维护和运维工作</div>
          <t-tag shape="round" theme="primary" variant="light">操作级权限</t-tag>
        </div>
        <div
          class="flex-1 p-8 space-y-4 cursor-pointer border-2 rounded-lg duration-300 bg-neutral-50 border-neutral-200 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500"
        >
          <div class="text-base font-bold">监管人员</div>
          <div>负责指标配置、审核监督和标准评估</div>
          <t-tag shape="round" theme="warning" variant="light">管理级权限</t-tag>
        </div>
      </div>
    </div>
  </div>
</template>
