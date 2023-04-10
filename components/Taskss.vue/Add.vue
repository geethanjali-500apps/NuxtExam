<template>
  <div>
    <!--Start of create tag-->
    <p class="sm:ml-[25px] sm:mb-[-22px]">Create task</p>
    <PlusIcon class="h-5 w-5" @click="createTask = true" />
    <!--To show the input field after clicking on plusicon-->
    <div v-if="createTask">
      <template>
        <TransitionRoot as="template" :show="createTask">
          <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
              >
                <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel
                    class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
                  >
                    <span>Create task</span>
                    <div>
                      <form class="mt-5 sm:flex sm:items-center">
                        <div class="w-full sm:max-w-xs">
                          <input
                            v-model="taskName"
                            type="text"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Task name"
                          />
                        </div>
                        <button
                          type="submit"
                          class="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
                          @click="addTask(taskName)"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PlusIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

// To open task inputfield
const createTask = ref("");
// Assign added task
const taskName = ref("");
const emit = defineEmits(["add"]);
const addTask = (taskName: any) => {
  // Emit the added task
  emit("add", taskName);
  // Empty textvalue after adding the task
  taskName = "";
};
</script>
