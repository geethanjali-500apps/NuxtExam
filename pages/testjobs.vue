<template>
  <div>
    <div>
      <JobsMain :url="url" />
    </div>
  </div>
</template>
<script setup lang="ts">
const url = "https://v7-stark-db-orm.mercury.infinity-api.net/api/jobs";
</script>
