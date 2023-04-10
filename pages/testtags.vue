<template>
  <div>
    <TagsMain
      :url="url"
      :entity="entity"
      :entityId="entityId"
      :projectId="projectId"
    />
  </div>
</template>
<script setup lang="ts">
const url = "https://v1-orm-lib.mars.hipso.cc/tags";
const entity = "CONTACTS";
const entityId = "1";
const projectId = "1";
</script>
