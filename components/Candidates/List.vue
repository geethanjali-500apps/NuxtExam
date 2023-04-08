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
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr
                    v-for="(Candidate, index) in totalcandidate"
                    :key="`item-${index}`"
                  >
                    <td
                      v-for="(head, index) in heading"
                      :key="`Candidate-${index}`"
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-0"
                    >
                      <div v-if="head == 'answers'">
                        <v-html>{{ Candidate[head].custom_output }} </v-html>
                      </div>
                      <div v-else>
                        {{ Candidate[head] }}
                      </div>
                    </td>
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
const heading = ref([
  "start_time",
  "end_time",
  "assessment_id",
  "recommendations",
]);

const props = defineProps({
  totalcandidate: { type: Array, required: true },
});
</script>
