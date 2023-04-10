<template>
  <div>
    <div>
      <TaskssList :allTasks="allTasks" />
      <!-- <TasksAdd @add="add"/> -->
      <!--<TasksEdit /> -->
    </div>
  </div>
</template>
<script setup lang="ts">
const authHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODI2MDQxMzd9.fN5GXumFy2qfwx3QUyjbUaVCKmRPwmlYiog3WPw40OQ",
};
const { pending, data: task } = useLazyFetch(
  `https://v1-orm-lib.mars.hipso.cc/tasks/CONTACTS/1`,
  {
    method: "GET",
    headers: authHeader,
  }
);
const allTasks = task.value;
// Add - add to database and create task
const add = async (name: string) => {
  await useLazyFetch(`https://v1-orm-lib.mars.hipso.cc/tasks/CONTACTS/1`, {
    method: "POST",
    headers: authHeader,
    body: {
      project_id: "1",
      entity_id: "1",
      owner_id: "1",
      name: "sukanya",
      category: "new",
      status: "NEW",
      description: "hello",
      entity: "CONTACTS",
      is_active: "ACTIVE",
      due_date: "2023-04-05",
      kanban_order: [],
    },
  });
  // Push new tag into existing tags
  allTasks.push(name);
};
</script>
