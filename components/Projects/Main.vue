<template>
  <div class="inset-0 flex items-center justify-start mt-5 ml-[40px]">
    <button
      type="button"
      @click="isOpen = true"
      class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Projects
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
              <ProjectsAdd @add="add" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <!-- Edit -->
  <TransitionRoot appear :show="isEdit" as="template">
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
              <ProjectsEdit :project="project" @edit="editProject" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <ProjectsList :totalprojects="totalprojects" @selected="editList" />
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
const isEdit: any = ref(false);
const project: any = ref();
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
const { pending, data: Projects } = await useLazyFetch(
  `https://v2-orm-gharpe.mercury.infinity-api.net/api/projects/?offset=0&limit=100&sort_column=id&sort_direction=desc`,
  {
    method: "GET",
    headers: authHeader,
  }
);
const totalprojects: any = Projects.value;

const { data: Project } = await useLazyFetch(
  `https://v2-orm-gharpe.mercury.infinity-api.net/api/projects/1`,
  {
    method: "PUT",
    headers: authHeader,
  }
);
const editProject = (project: any) => {
  isEdit.value = true;
  console.log(project, "sdfsdf");
};

const add = async (form: any) => {
  const postData = ref({
    name: form.name,
    listing_type_name: form.listing_type_name,
    category: "Residential",
    sub_category: "Apartment",
    status: "Fully Constructed",
    details: form.details,
    specifications: "string",
    possession_date: "2023-04-08",
    age_of_the_project: "string",
    logo_url: "string",
    total_project_area: form.total_project_area,
    metric: "sq.ft",
    default_image_url: "string",
    visit_count: 0,
    rera_approved: form.rera_approved,
    approve_status: "Active",
  });
  const { data } = await useAuthLazyFetchPost(`${props.url}`, {
    body: postData.value,
  });
  totalprojects.value.unshift(data.value);
  getForms();
};
const getForms = async () => {
  const { pending, data: Projects } = await useLazyFetch(
    `${props.url}?offset=0&limit=100&sort_column=id&sort_direction=desc`,
    {
      method: "GET",
      headers: authHeader,
    }
  );
  totalprojects.value = Projects.value;
};

const editList = (projects: any) => {
  project.value = projects;
  isEdit.value = true;
};
</script>
