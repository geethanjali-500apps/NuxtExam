<template>
  <div>
    <label
      for="name"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >name:</label
    >
    <div class="mt-2.5">
      <input
        name="name"
        v-model="project.name"
        id="project"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label
      for="listing_type_name"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >email:</label
    >
    <div class="mt-2.5">
      <input
        name="listing_type_name"
        v-model="project.email"
        id="project"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div>
    <label
      for="details"
      class="block text-sm font-semibold leading-6 text-gray-900"
      >phone Number:</label
    >
    <div class="mt-2.5">
      <input
        name="details"
        v-model="project.phone_number"
        id="project"
        rows="4"
        class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>

  <div class="mt-10 flex">
    <button
      type="submit"
      @click="emit('cancel')"
      class="block mr-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      cancel
    </button>

    <button
      type="submit"
      @click="emit('edit', project)"
      class="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      update
    </button>
  </div>
</template>
<script setup lang="ts">
interface project {
  project: {
    name: "";
    email: "";
    phone_number: "";
    established_year: "string";
    logo: "string";
    tag_line: "string";
    reg_details: "string";
    reg_rera_url: "string";
    is_active: true;
  };
}
const props = defineProps<project>();
const project = ref(props.project);

// Close input after editing
const emit = defineEmits(["edit", "cancel"]);
</script>
