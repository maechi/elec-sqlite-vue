<template>
  <div>
    <p>Settings_AchievementOptions</p>

    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achopt_category" class="form-label">Category</label>
        </div>
        <div class="col-auto">
          <select
                  class="form-select"
                  id="achopt_category"
                  aria-describedby="achoptCategoryHelp"
                  v-model="this.achopt.categoryId"
          >
            <option v-for="achcat_data in this.allAchCatData" :key="achcat_data.id" :value="achcat_data.id">{{ achcat_data.achcatName }}</option>
          </select>
        </div>
        <div class="col-auto">
          <span id="achoptCategoryHelp" class="form-text">Category of the Option</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achopt_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="achopt_name"
                  aria-describedby="achoptNameHelp"
                  v-model="this.achopt.achoptName"
          />
        </div>
        <div class="col-auto">
          <span id="achoptNameHelp" class="form-text">Name your Option</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitAchopt">Submit</button>
        </div>
        <div class="col-auto">
          <button v-if="this.achopt.id" type="submit" class="btn btn-primary" @click.prevent="this.deleteAchopt">Delete</button>
        </div>
      </div>
    </form>
  </div>

  <br/>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>Id</th>
      <th>Category</th>
      <th>Name</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="achopt_data in this.allData" :key="achopt_data.id" @click="this.chooseAchopt(achopt_data)" :class="{ 'table-active': achopt_data.id == this.achopt.id }">
      <td>{{ achopt_data.id }}</td>
      <td><span :title="'categoryId: ' + achopt_data.categoryId">{{ achopt_data.Achcat.achcatName }}</span></td>
      <td>{{ achopt_data.achoptName}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent, onMounted, reactive} from "vue";
  import {NewAchopt, getAllAchopt, createAchopt, updateAchopt, destroyAchopt} from "@/modelapi/achievement_option";
  import {getAllAchcat} from "@/modelapi/achievement_category";

  export default defineComponent({
    name: "Settings_AchievementCategory",
    data() {
      return {
        achopt: new NewAchopt(),
        allData: {},
        allAchCatData: {}
      }
    },
    methods: {
      loadAchcats: function () {
        console.log("AchievementOptions.vue loadAchcats()")
        getAllAchcat()
                .then(response => {
                  console.log("loadAchcats response", response)
                  this.allAchCatData = response
                })
                .catch(error => {
                  console.log("loadAchcats error", error)
                })
      },
      loadAchopt: function () {
        console.log("loadAchcat")
        getAllAchopt()
                .then(response => {
                  console.log("getAllAchopt response", response)
                  this.allData = response
                })
                .catch(error => {
                  console.log("getAllAchopt Error", error)
                })
      },
      submitAchopt: function () {
        console.log("submitAchopt", this.achopt)
        if (this.achopt.id) {
          console.log("updateAchcat")
          updateAchopt(this.achopt)
                  .then(response => {
                    console.log("updateAchopt response", response)
                    this.loadAchopt()
                  })
                  .catch(error => {
                    console.log("updateAchopt error", error)
                  })
        } else {
          console.log("insert")
          createAchopt(this.achopt)
                  .then(response => {
                    console.log("insertAchopt response", response)
                    this.loadAchopt()
                  })
                  .catch(error => {
                    console.log("insertAchopt error", error)
                  })
        }
      },
      deleteAchopt: function () {
        console.log("deleteAchop", this.achopt)
        if (this.achopt.id) {
          destroyAchopt(this.achopt)
                  .then(response => {
                    console.log("deleteAchopt response", response)
                    this.loadAchopt()
                  })
                  .catch(error => {
                    console.log("deleteAchopt error", error)
                  })
        }
      },
      chooseAchopt: function(achoptData: NewAchopt) {
        this.achopt.achoptName = achoptData.achoptName
        this.achopt.categoryId = achoptData.categoryId
        this.achopt.id = achoptData.id
        console.log("achopt.id", this.achopt.id)
      }
    },
    mounted() {
      this.loadAchcats();
      this.loadAchopt();
    },

  });
</script>

<style lang="scss" scoped></style>
