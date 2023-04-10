<template>
  <div>
    <div>
      <div
        v-for="(task, index) in totalTasks"
        :key="index"
        class="border rounded-lg p-3 mb-3 flex justify-between"
      >
        <div>
          <span
            class="inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium text-gray-540"
          >
            {{ task.name }}
            <PencilIcon class="h-4 w-4 ml-[45px]" @click="editTask(task)" />
            <ExamEdit
              v-if="editSelectedTask.includes(task.uid)"
              :uid="task.uid"
              :tag="task.name"
              class="sm:mt-[15px]"
              @edit="edit"
            />
            <!--Delete button-->
            <button
              type="button"
              class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
              @click="deleteItem(task, index)"
            >
              <XMarkIcon class="h-5 w-5" />
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PencilIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const editSelectedTask = ref([]);
interface TasksProps {
  totalTasks: Array<{}>;
}
// Tags props
const props = withDefaults(defineProps<TasksProps>(), {
  totalTasks: () => [{}],
});

const editTask = (task: any) => {
  console.log(task, "task");
  // Push the tag's UID into the editSelectedTag array
  editSelectedTask.value.push(task.uid);
};
const edit = (data: any) => {
  // Emit the added tag
  emit("edit", data);
};
const emit = defineEmits(["edit", "delete"]);
</script>
