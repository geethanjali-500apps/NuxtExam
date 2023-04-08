<template>
  <div class="inset-0 flex items-center justify-start mt-5 ml-[40px]">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Open dialog
    </button>
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
              <CandidatesAdd @add="add" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <CandidatesList :totalcandidate="totalcandidate" />
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

interface candtProps {
  url: string;
}
const props = withDefaults(defineProps<candtProps>(), {
  url: "",
});
const isOpen = ref(false);

const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};
const authHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMzNzUyNTF9.3mSh9Bu_NMcvyIeWepNIH_UPa0HX65un5wQKpVKU6Ow",
};
const { pending, data: Candidate } = await useLazyFetch(
  `${props.url}/?offset=0&limit=100&sort_column=id&sort_direction=desc`,
  {
    method: "GET",
    headers: authHeader,
  }
);
const totalcandidate = Candidate.value;
const add = async (form: any) => {
  const { data } = await useAuthLazyFetchPost(
    `https://v7-stark-db-orm.mercury.infinity-api.net/api/responses/`,
    {
      body: {
        start_time: "2023-04-08T09:27:41.680Z",
        end_time: "2023-04-08T09:27:41.680Z",
        score: 0,
        candidate_id: "string",
        assessment_id: form.assessment_id,
        answers: {},
        attempt_count: 0,
        candidate_device: {},
        recommendations: form.recommendations,
      },
    }
  );
  totalcandidate.value.unshift(data.value);
};
</script>
