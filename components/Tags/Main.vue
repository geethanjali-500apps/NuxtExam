<template>
  <div>
    <TagsAdd @add="add" />
  </div>
  <div v-if="totalTags">
    <!--List Start of tags-->
    <TagsList
      :totalTags="totalTags"
      :alphabets="alphabets"
      @edit="edit"
      @delete="deleteItem"
    />
    <!--List End of tags-->
  </div>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<TagProps>(), {
  url: "",
  entity: "",
  entityId: "",
  projectId: "",
});
interface TagProps {
  url: string;
  entity: string;
  entityId: string;
  projectId: string;
}
const editSelectedTag = ref([]);
const authHeader = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiOTNjOTM5MTA3MWJkNDQ3NGIxYjBhOGYwZWNiZGFhYzgiLCJkIjoiMTY4MDAzNCIsInIiOiJzYSIsInAiOiJmcmVlIiwiYSI6ImZpbmRlci5pbyIsImwiOiJ1czEiLCJleHAiOjE2ODI2MDQxMzd9.fN5GXumFy2qfwx3QUyjbUaVCKmRPwmlYiog3WPw40OQ",
};
console.log("props", props.url);
const { pending, data: tags } = await useLazyFetch(
  `https://v7-stark-db-orm.mercury.infinity-api.net/api/jobs/?offset=0&limit=100&sort_column=id&sort_direction=desc`,
  {
    method: "GET",
    headers: authHeader,
  }
);
const totalTags = tags.value;
console.log("totalTags", totalTags);
const alphabets = ref(
  [...Array(26)].map((_, i) => String.fromCharCode(65 + i))
);
console.log(alphabets, "<<<<<<<<<<");

const add = async (name: string) => {
  console.log(name, "KKKKKKKK");
  await useLazyFetch(`${props.url}/`, {
    method: "POST",
    headers: authHeader,
    body: {
      project_id: props.projectId,
      name,
      entity: props.entity,
      is_active: "1",
    },
  });
  // Push new tag
  totalTags.push(name);
};
const editTag = (tag: any) => {
  editSelectedTag.value.push(tag.name);
};
const edit = async (tag: any) => {
  await useLazyFetch(`${props.url}/${tag.uid}?name=${tag.name}`, {
    method: "PUT",
    headers: authHeader,
  });
  totalTags.forEach((data: any) => {
    if (tag.uid === data.uid) {
      data.name = tag.name;
    }
  });
};
const delete = async (tag: any, index: number) => {
  await useLazyFetch(`${props.url}/${tag.uid}`, {
    method: "DELETE",
    headers: authHeader,
  });
  // If  tag  delete it
  if (index !== -1) {
    // To remove deleted tag
    totalTags.splice(index, 1);
  }
};
</script>
