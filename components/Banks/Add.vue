<template>
  <!-- start addform sidebar -->
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        class="text-base font-semibold leading-6 text-gray-900"
                        >Add Bank</DialogTitle
                      >
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="open = false"
                        >
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Start Bank Form -->
                  <form>
                    <div
                      class="relative mt-6 flex-1 px-4 sm:px-6 border ml-2 mr-2"
                    >
                      <div class="mt-2">
                        <label
                          for="name"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Category name</label
                        >
                        <div class="mt-2">
                          <input
                            type="category"
                            id="category"
                            v-model="formData.category"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Category Name"
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="skill"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Skill</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            id="skill"
                            v-model="formData.skill"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Skill"
                          />
                        </div>
                      </div>

                      <div class="mt-2">
                        <label
                          for="details"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Question Type</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            id="question"
                            v-model="formData.question_type"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Question Type"
                          />
                        </div>
                      </div>

                      <div class="mt-2">
                        <label
                          for="sub_skill"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Sub Skill
                        </label>
                        <div class="mt-2">
                          <input
                            type="text"
                            id="sub_skill"
                            v-model="formData.sub_skill"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Sub Skill "
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="question"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Question</label
                        >
                        <div class="mt-2">
                          <input
                            id="question"
                            v-model="formData.question"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Question"
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="answer"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Answer</label
                        >
                        <div class="mt-2">
                          <input
                            id="answer"
                            v-model="formData.answer"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Answer"
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <label
                          for="question_url"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Question URL</label
                        >
                        <div class="mt-2">
                          <input
                            id="question_url"
                            v-model="formData.question_url"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Question URL"
                          />
                        </div>
                      </div>

                      <div class="mt-2">
                        <label
                          for="answer_hint"
                          class="block text-sm font-medium leading-6 text-gray-900"
                          >Answer Hint</label
                        >
                        <div class="mt-2">
                          <input
                            id="answer_hint"
                            type="string"
                            v-model="formData.answer_hint"
                            class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter Answer Hint"
                          />
                        </div>
                      </div>
                      <div class="mt-2">
                        <div class="mt-2 mb-2 ml-[15.25rem] flex">
                          <div>
                            <button
                              @click="open = false"
                              class="mr-1 rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              Cancel
                            </button>
                          </div>
                          <div>
                            <button
                              class="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              @click="submitBankForm(), (open = false)"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <!-- End Bank Form -->
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <!-- end addform sidebar -->
</template>
<script setup lang="ts">
// import Statements
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ref, defineProps, defineEmits } from "vue";
// Define Props
const props = defineProps({
  open: Boolean,
});
// Define Emits
const emits = defineEmits(["submit-bank-data"]);
const formData = ref({
  category: "",
  skill: "",
  question_type: "text",
  question: "",
  answer_type: "short",
  answer: "",
  answer_rules: {},
  sub_skill: "",
  question_url: "",
  answer_hint: "",
  explanation: "",
  difficulty_level: "easy",
  marks: 0,
  question_rules: {},
  mark_rules: {},
});

// To submit form when user will click on submit button
const submitBankForm = () => {
  emits("submit-bank-data", formData.value);
};
</script>
