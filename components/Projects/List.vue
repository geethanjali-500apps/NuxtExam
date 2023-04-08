<template>
  <div>
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div
              class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      v-for="(head, index) in heading"
                      :key="index"
                      scope="col"
                      class="py-3 5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0 group"
                    >
                      {{ head }}
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr
                    v-for="(project, index) in totalprojects"
                    :key="`item-${index}`"
                  >
                    <td
                      v-for="(head, index) in heading"
                      :key="`emplyoment-${index}`"
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
                    >
                      <div>
                        {{ project[head] }}
                      </div>
                    </td>
                    <PencilIcon
                      class="h-4 w-4"
                      @click="emit('selected', project)"
                    />
                    <!-- <ProjectsEdit /> -->
                    <XMarkIcon class="h-5 w-5 ml-[35px]" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PencilIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { CheckIcon } from "@heroicons/vue/24/outline";
const heading = ref([
  "name",
  "total_project_area",
  "rera_approved",
  "details",
  "listing_type_name",
]);

const props = defineProps({
  totalprojects: { type: Array, required: true },
});

const emit = defineEmits(["selected"]);

const editTag = (project: any) => {
  // Push the tag's UID into the editSelectedTag array
};
</script>
