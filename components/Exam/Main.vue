<template>
  <div class="flex ml-3">
    <div class="ml-10 flex justify-end">
      <button
        type="button"
        class="rounded-full bg-indigo-600 p-4 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="openModal"
      >
        Add Contacts
      </button>
    </div>
  </div>

  <div
    class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:bg-gray-700 mt-2"
  >
    <ExamList
      v-if="contacts && contacts.length"
      :contact="contacts"
      @emitData="emitData"
    />
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
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
              </DialogTitle>

              <div>
                <ExamAdd @add="add" @cancel="isOpen = false"></ExamAdd>
              </div>
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

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const contacts: any = ref([]);

onMounted(() => {
  if (localStorage.getItem("contactDetails"))
    contacts.value = JSON.parse(localStorage.getItem("contactDetails"));
});

const add = async (contact: any) => {
  contacts.value.push(contact);
  localStorage.setItem("contactDetails", JSON.stringify(contacts.value));

  isOpen.value = false;
};
// Edit contact
const edit = async (emp: any) => {
  contacts.value[emp.index] = emp.emp;
  localStorage.setItem("contactDetails", JSON.stringify(contacts.value));
};
// Delete contact
const deletecontact = async (emp: any) => {
  contacts.value.splice(emp.index, 1);
  localStorage.setItem("contactDetails", JSON.stringify(contacts.value));
};

// Edit and Delete events
const emitData = (emp: Object) => {
  emp.value == "edit" ? edit(emp) : deletecontact(emp);
};

const searchQuery = ref();

const getSearchName = () => {
  if (searchQuery.value) {
    contacts.value = contacts.value.filter((item: any) => {
      return item.name.toLowerCase().includes(searchQuery.value.toLowerCase());
    });
  } else {
    // If search query is empty, show all contacts
    contacts.value = JSON.parse(localStorage.getItem("contactDetails"));
  }
};
</script>
