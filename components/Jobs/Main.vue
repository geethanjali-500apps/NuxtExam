<template>
  <div class="fixed inset-0 flex items-center ml-3 justify-end">
    <button
      type="button"
      @click="openModal"
      class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      style="position: absolute; top: inherit"
    >
      Jobs Form
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
              <JobsAdd @add="add" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div>
    <JobsList :totalJobs="totalJobs" />
  </div>
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
const props = withDefaults(defineProps<JobsProps>(), {
  url: "",
  title: "",
  industries: "",
  designation: "",
  education_qualification: "",
  skills_description: "",
  external_source: "",
  experience_level: "",
  listed_date: "",
  location_id: 0,
  description: "",
  experience_in_placeof_education: "",
  expiry_date: "2023-04-06T12:23:23.339Z",
  apply_url: "",
  operation_type: "create",
  work_hours: "",
  working_days: "",
  is_work_remote_allowed: 0,
  workplace_type: "",
  employment_status: "ft",
  company_job_code: "",
  profile_id: 0,
  state: "",
  job_count: 0,
  gender: "",
  special_commitments: "",
  security_clearances: "",
  languages: "",
  start_date: "2023-04-06T12:23:23.339Z",
  job_benefits: "",
  currency_code: "",
  salary_incentives: "",
  salary_high_end: "",
  salary_low_end: "",
  salary_period: "",
  base_salary: "",
  show_poster: "yes",
  poster_info: "name",
  listing_type: "basic",
  last_scrapped_date: "2023-04-06T12:23:23.339Z",
  is_draft: 0,
  uid: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  id: 0,
  created_date: "2023-04-06T12:23:23.339Z",
});
interface JobsProps {
  url: string;
  title: string;
  industries: string;
  designation: string;
  education_qualification: string;
  skills_description: string;
  external_source: string;
  experience_level: string;
  listed_date: string;
  location_id: Number;
  description: string;
  experience_in_placeof_education: string;
  expiry_date: string;
  apply_url: string;
  operation_type: string;
  work_hours: string;
  working_days: string;
  is_work_remote_allowed: Number;
  workplace_type: string;
  employment_status: string;
  company_job_code: string;
  profile_id: Number;
  state: string;
  job_count: Number;
  gender: string;
  special_commitments: string;
  security_clearances: string;
  languages: string;
  start_date: string;
  job_benefits: string;
  currency_code: string;
  salary_incentives: string;
  salary_high_end: string;
  salary_low_end: string;
  salary_period: string;
  base_salary: string;
  show_poster: string;
  poster_info: string;
  listing_type: string;
  last_scrapped_date: string;
  is_draft: Number;
  uid: string;
  id: Number;
  created_date: string;
}
const authHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODMzNzUyNTF9.3mSh9Bu_NMcvyIeWepNIH_UPa0HX65un5wQKpVKU6Ow",
};
const { pending, data: jobs } = await useLazyFetch(
  `${props.url}/?offset=96&limit=100&sort_column=id&sort_direction=desc`,
  {
    method: "GET",
    headers: authHeader,
  }
);
const add = async (name: string) => {
  console.log(name, "KKKKKKKK");
  await useLazyFetch(`${props.url}/`, {
    method: "POST",
    headers: authHeader,
    body: {
      title,
      industries: "Automotive",
      designation: "Analyst",
      education_qualification: "BA",
      skills_description: "Aws,Jenkins,Docker",
      external_source: "LinkedIn",
      experience_level: "EXECUTIVE",
      listed_date: "2023-03-24T11:38:35",
      location_id,
      description,
      experience_in_placeof_education: "5",
      expiry_date,
      apply_url: "https://verlie.biz",
      operation_type: "renew",
      work_hours: "9",
      working_days: "Tuesday",
      is_work_remote_allowed: 1,
      workplace_type: "remote",
      employment_status,
      company_job_code: "7PKvitSvatOuIAH",
      profile_id: 0,
      state: "closed",
      job_count,
      gender: "others",
      special_commitments: "Leading a team or project",
      security_clearances:
        "Confidential: This is the lowest level of security clearance and is typically required for jobs that involve access to information that could cause damage to national security or the employer's operations if it were disclosed.Secret: This clearance is required for jobs that involve access to more sensitive information, such as classified government documents or proprietary company data.Top Secret: This is the highest level of security clearance and is required for jobs that involve access to the most sensitive information, such as intelligence reports or military plans.",
      languages: "Kannada,Marati,Punjabi,Gujarati",
      start_date: "2023-03-24T11:38:35",
      job_benefits: "Life insurance",
      currency_code: "MAD",
      salary_incentives: "Profit sharing",
      salary_high_end: "300000",
      salary_low_end: "50000",
      salary_period: "Monthly",
      base_salary: "10000",
      show_poster: "no",
      poster_info: "name",
      listing_type: "basic",
      last_scrapped_date: "2023-03-24T11:38:35",
      is_draft: 0,
      uid: "1a64d9f8-ccdf-4246-aa47-338c82794e18",
      id: 1017952,
      created_date: "2023-04-05T10:27:28",
    },
  });
  // Push new tag
  totaljobs.push(
    title,
    description,
    location_id,
    expiry_date,
    employment_status,
    job_count
  );
};
const totalJobs = jobs.value;
console.log(jobs, "jobs");
</script>
