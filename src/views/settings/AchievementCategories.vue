<template>
  <div>
    <p>Settings_AchievementCategories</p>

    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achcat_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="achcat_name"
                  aria-describedby="achcatNameHelp"
                  v-model="this.achcat.achcatName"
          />
        </div>
        <div class="col-auto">
          <span id="achcatNameHelp" class="form-text">Name your Achiev-Cat</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitAchcat">Submit</button>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" :disabled="this.achcat.id <= 0" @click.prevent="this.deleteAchcat">Delete</button>
        </div>
      </div>
    </form>
  </div>

  <br/>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="achcat_data in this.allData" :key="achcat_data.id" @click="this.chooseAchcat(achcat_data)">
      <td>{{ achcat_data.id }}</td>
      <td>{{ achcat_data.achcatName }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {NewAchcat, getAllAchcat, createAchcat, updateAchcat, destroyAchcat} from "@/modelapi/achievement_category";

  export default defineComponent({
    name: "Settings_AchievementCategory",
    data() {
      return {
        achcat: new NewAchcat(),
        allData: {}
      }
    },
    methods: {
      loadAchcat: function () {
        console.log("AchievementCategories.vue loadAchcat()")
        getAllAchcat()
                .then(response => {
                  console.log("loadAchcat response", response)
                  this.allData = response
                })
                .catch(error => {
                  console.log("loadAchcat error", error)
                })
      },
      submitAchcat: function () {
        console.log("submitAchcat", this.achcat)
        if (this.achcat.id) {
          console.log("updateAchcat")
          updateAchcat(this.achcat)
                  .then(response => {
                    console.log("updateAchcat response", response)
                    this.loadAchcat()
                  })
                  .catch(error => {
                    console.log("updateAchcat error", error)
                  })
        } else {
          console.log("insertAchcat")
          createAchcat(this.achcat)
                  .then(response => {
                    console.log("insertAchcat response", response)
                    this.loadAchcat()
                  })
                  .catch(error => {
                    console.log("insertAchcat error", error)
                  })
        }
      },
      deleteAchcat: function () {
        console.log("deleteAchcaat", this.achcat)

        if(this.achcat.id) {
          destroyAchcat(this.achcat)
                  .then(response => {
                    console.log("deleteAchcat response", response)
                    this.loadAchcat()
                  })
                  .catch(error => {
                    console.log("deleteAchcat error", error)
                  })
        }
      },
      chooseAchcat: function(achcatData: NewAchcat) {
        this.achcat.achcatName = achcatData.achcatName
        this.achcat.id = achcatData.id
        console.log("achcat.id", this.achcat.id)
      }
    },
    mounted() {
      this.loadAchcat()
    }
  });
</script>

<style lang="scss" scoped></style>
