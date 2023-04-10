<template>
  <form>
    <div class="w-full sm:max-w-xs">
      <label>Title</label>
      <input
        v-model="title"
        type="text"
<<<<<<< Updated upstream
        class="block w-full rounded-md border-0 ml-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
=======
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
>>>>>>> Stashed changes
        placeholder="  Enter title"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label>Location Id</label>
      <input
        v-model="locationId"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter location id"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label> Expiry Date</label>
      <input
        v-model="expiryDate"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter expiry date"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label>Employment Status</label>
      <input
        v-model="employmentStatus"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter employment status"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label> Job Count</label>
      <input
        v-model="jobCount"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter job count"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label>External Source</label>
      <input
        v-model="externalSource"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter external source"
      />
    </div>
    <div class="w-full sm:max-w-xs">
      <label> Description</label>
      <input
        v-model="description"
        type="text"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="  Enter description"
      />
    </div>
    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button
        type="button"
        class="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        @click="
          add(
            title,
            locationId,
            expiryDate,
            employmentStatus,
            jobCount,
            externalSource,
            description
          )
        "
      >
        Save
      </button>
    </div>
  </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";
const title = ref("");
const locationId = ref("");
const expiryDate = ref("");
const employmentStatus = ref("");
const jobCount = ref("");
const externalSource = ref("");
const description = ref("");
const emit = defineEmits(["add"]);
const add = () => {
<<<<<<< Updated upstream
=======
  console.log(add, "MMMMMMMMMMMMMMMMM");
>>>>>>> Stashed changes
  emit(
    "add",
    title.value,
    locationId.value,
    expiryDate.value,
    employmentStatus.value,
    jobCount.value,
    externalSource.value,
    description.value
  );
  title.value = "";
  locationId.value = "";
  expiryDate.value = "";
  employmentStatus.value = "";
  jobCount.value = "";
  externalSource.value = "";
  description.value;
};
<<<<<<< Updated upstream
=======
console.log(add, "add");
// const add = (
//   title: any,
//   locationId: any,
//   expiryDate: any,
//   employmentStatus: any,
//   jobCount: any,
//   externalSource: any,
//   description: any
// ) => {
//   // Emit the added tag
//   emit(
//     "add",
//     title,
//     locationId,
//     expiryDate,
//     employmentStatus,
//     jobCount,
//     externalSource,
//     description
//   );
//   // Empty textvalue after adding the tag
//   title = "";
//   locationId = ";";
//   expiryDate = "";
//   employmentStatus = "";
//   jobCount = "";
//   externalSource = "";
//   description = "";
// };
>>>>>>> Stashed changes
</script>
