<template>
  <div>
    <TasksMain :url="url" />
  </div>
</template>
<script setup lang="ts">
const url = "https://v1-orm-lib.mars.hipso.cc/tasks";
</script>
