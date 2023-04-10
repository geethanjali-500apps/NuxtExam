<template>
  <div class="ml-[45px] mt-5 inset-0 flex items-center justify-start">
    <!-- <TasksList :totalTasks="totalTasks" /> -->
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Create a new task
    </button>
  </div>
  <div style="width: fit-content" class="mt-2 ml-3">
    <TasksList :totalTasks="totalTasks" />
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <TasksAdd @add="add" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
const authHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODI2MDQxMzd9.fN5GXumFy2qfwx3QUyjbUaVCKmRPwmlYiog3WPw40OQ",
};
const { pending, data: tasks } = await useLazyFetch(
  `https://v1-orm-lib.mars.hipso.cc/tasks/CONTACTS/1?offset=0&limit=100&sort_column=id&sort_direction=desc
`,
  { method: "GET", headers: authHeader }
);
const totalTasks = tasks.value;
console.log(totalTasks);
const add = async (name: string) => {
  await useLazyFetch(`https://v1-orm-lib.mars.hipso.cc/tasks/CONTACTS/1`, {
    method: "POST",
    headers: authHeader,
    body: {
      project_id: "1",
      entity_id: "1",
      owner_id: "1",
      name,
      category: "new",
      status: "NEW",
      description: "hello",
      entity: "CONTACTS",
      is_active: "ACTIVE",
      due_date: "2023-04-05",
      kanban_order: [],
    },
  });
  // Push new tag
  totalTags.push(name);
};
const saveTask = () => {};
</script>
