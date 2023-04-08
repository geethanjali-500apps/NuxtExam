<template>
  <div>
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">
            Candidate Responses
          </h2>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="score"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Score</label
              >
              <div class="mt-2">
                <div
                  class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                >
                  <input
                    v-model="form.score"
                    type="text"
                    name="score"
                    id="score"
                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Enter Score"
                  />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="answers"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Answers</label
              >
              <div class="mt-2">
                <textarea
                  id="answers"
                  name="answers"
                  rows="3"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          class="text-sm font-semibold leading-6 text-gray-900"
          @click="emit('cancel', form)"
        >
          Cancel
        </button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="emit('add', form)"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(["add", "cancel"]);
const form = ref({
  start_time: "2023-04-06T12:44:14",
  end_time: "2023-04-06T12:44:14",
  score: "",
  candidate_id: "93c9391071bd4474b1b0a8f0ecbdaac8",
  assessment_id: "1",
  answers: {
    code: '#include<stdio.h>\n#include<string.h>\n\nint main()\n{\n    char str1[20] = "Hello", str2[20] = " World";\n    printf("%s\\n", strcpy(str2, strcat(str1, str2)));\n    return 0;\n}',
    input_data: "Hello World",
    custom_output: "Hello World\n",
  },
  attempt_count: 1,
  candidate_device: {
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
  },
  recommendations: "dgsgs",
  uid: "564710f6-bf6e-4642-83dc-bb1545f9c039",
  id: 202103,
});
</script>
