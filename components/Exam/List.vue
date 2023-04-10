<template>
  <!-- <table class="min-w-full divide-y divide-gray-700">
    <thead>
      <tr>
        <th
          v-for="(field, index) in fields"
          :key="index"
          scope="col"
          class="py-3 5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-0 group"
        >
          {{ field }}
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-800">
      <tr
        v-for="(row, index) in project"
        :key="`item-${index}`"
        class="cursor-pointer hover:bg-gray-200"
      >
        <td
          v-for="(field, index) in fields"
          :key="`row-${index}`"
          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
        >
          {{ row[field] }}
        </td>
        <div class="flex">
          <TrashIcon class="w-7 m-3" @click="emitData(row, index, 'delete')" />
          <PencilSquareIcon
            class="w-7 m-3"
            @click="emitData(row, index, 'edit')"
          />
        </div>
      </tr>
    </tbody>
  </table> -->
  <!-- <div> -->
  <!-- <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="item in fields"
        :key="item.name"
        class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
      >
        <div class="flex justify-end">
          <TrashIcon class="w-5 m-3" @click="emitData(row, index, 'delete')" />
          <PencilSquareIcon
            class="w-5 m-3"
            @click="emitData(row, index, 'edit')"
          />
        </div>
        <dt class="truncate text-sm font-medium text-gray-500">
          {{ item.name }}
        </dt>
        <dd class="truncate text-sm font-medium text-gray-500">
          {{ item.phonenumber }}
        </dd>
        <dd class="truncate text-sm font-medium text-gray-500">
          {{ item.country }}
        </dd>
      </div>
    </dl>
  </div> -->

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="(contact, index) in contactList"
      :key="index"
      class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">
              {{ contact.name }}
            </h3>
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">
            {{ contact.phonenumber }}
          </p>
          <p class="mt-1 truncate text-sm text-gray-500">
            {{ contact.country }}
          </p>
        </div>
      </div>
    </li>
  </ul>

  <TransitionRoot as="template" :show="edit">
    <Dialog as="div" class="relative z-10" @close="edit = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                >
                  <div
                    class="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6"
                  >
                    <div class="px-4 sm:px-6">
                      <div>
                        <DialogTitle
                          class="text-base font-semibold leading-6 text-gray-900"
                          >Edit-Contact</DialogTitle
                        >
                        <div>
                          <ExamEdit
                            :project="editProject"
                            @edit="
                              (edit = false),
                                emit('emitData', {
                                  project: $event,
                                  value: 'edit',
                                })
                            "
                            @cancel="edit = false"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup lang="ts">
import {
  TransitionChild,
  DialogPanel,
  TransitionRoot,
  Dialog,
} from "@headlessui/vue";
import { TrashIcon, PencilSquareIcon } from "@heroicons/vue/24/outline";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/20/solid";

// const people = [
//   {
//     name: "geetha",
//     phonenumber: "8886420708",
//     country: "india",
//   },
//   // More people...
// ];

// const fields = ref([
//   { name: "name", phonenumber: "phonenumber", country: "country" },
//   { name: "name", phonenumber: "phonenumber", country: "country" },
//   { name: "name", phonenumber: "phonenumber", country: "country" },
//   { name: "name", phonenumber: "phonenumber", country: "country" },
// ]);
const emit = defineEmits(["emitData", "deleteDetails"]);
const props = defineProps({
  contactList: { type: Array, default: () => [] },
});
console.log("propssss", props.contactList);

const editProject = ref({});
const edit = ref(false);

const deleteDetails = (data: any) => {
  emit("deleteDetails", data);
  open.value = false;
};
</script>
