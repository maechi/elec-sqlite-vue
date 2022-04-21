<template>
  <div>
    <p>General</p>
    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="base_level" class="form-label">Base Level</label>
        </div>
        <div class="col-auto">
          <input type="number" class="form-control" id="base_level" aria-describedby="baseLevelHelp" min="0">
        </div>
        <div class="col-auto">
          <span id="baseLevelHelp" class="form-text">max. Level without Ascends</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Settings_General",
  setup() {
    const state = reactive({});

    return { state };
  },
});
</script>

<style lang="scss" scoped></style>
