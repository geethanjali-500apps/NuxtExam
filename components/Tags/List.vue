<template>
  <div>
    <!--Start of tags-->
    <div v-for="alphabet in alphabets" :key="alphabet.index" class="ml-[100px]">
      <!--alphabets to show the tags in a order-->
      <span>{{ alphabet }}</span>
      <div v-for="(tag, index) in totalTags" :key="index">
        <div v-if="alphabet == tag.name.substring(0, 1).toUpperCase()">
          <span
            class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-540"
          >
            {{ tag.name }}
            <!--Delete button-->
            <button
              type="button"
              class="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:bg-gray-500 focus:text-white focus:outline-none"
              @click="deleteItem(tag, index)"
            >
              <XMarkIcon class="h-5 w-5" />
            </button>
          </span>
          <!--Start of edit tag-->
          <PencilIcon class="h-4 w-4 ml-[45px]" @click="editTag(tag)" />
          <TagsEdit
            v-if="editSelectedTag.includes(tag.uid)"
            :uid="tag.uid"
            :tag="tag.name"
            class="sm:mt-[15px]"
            @edit="edit"
          />
          <!-- edit tag end-->
        </div>
      </div>
    </div>
    <!--End of tags-->
  </div>
</template>
<script setup lang="ts">
import { PencilIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const emit = defineEmits(["delete", "edit"]);
// To edit selected tag by sending the uid
const editSelectedTag = ref([]);
// Tags props default data
interface TagProps {
  totalTags: Array<{}>; // All tags
  alphabets: Array<{}>; // Alphabets
}
// Tags props default data
const props = withDefaults(defineProps<TagProps>(), {
  totalTags: () => [{}],
  alphabets: () => [{}],
});

// Edit tag
// const edit = (tag: any) => {
//   // Push the tag's UID into the editSelectedTag array
//   editSelectedTag.value.push(tag.uid);
// };
// Edit tag
const edit = (data: any) => {
  // Emit the added tag
  emit("edit", data);
};

// Delete tag
const deleteItem = (data: any, index: any) => {
  // Emit the added tag
  emit("delete", data, index);
};
</script>
