<template>
  <div>
    <p>About something else</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    const state = reactive({});

    return { state };
  },
});
</script>

<style lang="scss" scoped></style>
