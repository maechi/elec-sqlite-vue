<template>
  <div>
    <p>Settings_Achievements</p>

    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achievement_category" class="form-label">Category</label>
        </div>
        <div class="col-auto">
          <select
                  class="form-select"
                  id="achievement_category"
                  aria-describedby="achievementCategoryHelp"
                  v-model="this.achievement.categoryId"
          >
            <option v-for="achcat_data in this.allAchCatData" :key="achcat_data.id" :value="achcat_data.id">{{ achcat_data.achcatName }}</option>
          </select>
        </div>
        <div class="col-auto">
          <span id="achievementCategoryHelp" class="form-text">Category of the Achievement</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achievement_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="achievement_name"
                  aria-describedby="achievementNameHelp"
                  v-model="this.achievement.achievementName"
          />
        </div>
        <div class="col-auto">
          <span id="achievementNameHelp" class="form-text">Name your Achievement</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achievement_bonuslevel" class="form-label">Bonus Level</label>
        </div>
        <div class="col-auto">
          <div class="form-check">
            <input
                    type="checkbox"
                    class="form-check-input"
                    id="achievement_bonuslevel"
                    aria-describedby="achievementBonusLevelHelp"
                    v-model="this.achievement.bonusLevel"
            />
          </div>
        </div>
        <div class="col-auto">
          <span id="achievementBonusLevelHelp" class="form-text">Does this Achievement provide Bonus Levels?</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achievement_singleMode" class="form-label">SingleMode</label>
        </div>
        <div class="col-auto">
          <div class="form-check">
            <input
                    type="checkbox"
                    class="form-check-input"
                    id="achievement_singleMode"
                    aria-describedby="achievementSingleModeHelp"
                    v-model="this.achievement.singleMode"
            />
          </div>
        </div>
        <div class="col-auto">
          <span id="achievementSingleModeHelp" class="form-text">Single- oder MultiMode?</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="achievement_showSum" class="form-label">showSum</label>
        </div>
        <div class="col-auto">
          <div class="form-check">
            <input
                    type="checkbox"
                    class="form-check-input"
                    id="achievement_showSum"
                    aria-describedby="achievementShowSumHelp"
                    v-model="this.achievement.showSum"
            />
          </div>
        </div>
        <div class="col-auto">
          <span id="achievementShowSumHelp" class="form-text">showSummary?</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitAchievement">Submit</button>
        </div>
        <div class="col-auto">
          <button v-if="this.achievement.id" type="submit" class="btn btn-primary" @click.prevent="this.deleteAchievement">Delete</button>
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
      <th>BonusLevel</th>
      <th>singleMode</th>
      <th>showSum</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="achievement_data in this.allData" :key="achievement_data.id" @click="this.chooseAchievement(achievement_data)">
      <td>{{ achievement_data.id }}</td>
      <td><pre>{{ achievement_data }}</pre></td>
      <td>{{ achievement_data.achievementName}}</td>
      <td>{{ achievement_data.bonusLevel}}</td>
      <td>{{ achievement_data.singleMode}}</td>
      <td>{{ achievement_data.showSum}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent, onMounted, reactive} from "vue";
  import {NewAchievement, getAllAchievements, createAchievement, updateAchievement, destroyAchievement} from "@/modelapi/achievements";
  import {getAllAchcat} from "@/modelapi/achievement_category";

  export default defineComponent({
    name: "Settings_Achievement",
    data() {
      return {
        achievement: new NewAchievement(),
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
      loadAchievements: function () {
        console.log("loadAchievements")
        getAllAchievements()
                .then(response => {
                  console.log("getAllAchievements response", response)
                  this.allData = response
                })
                .catch(error => {
                  console.log("getAllAchievements Error", error)
                })
      },
      submitAchievement: function () {
        console.log("submitAchievement", this.achievement)
        if (this.achievement.id) {
          console.log("updateAchievement")
          updateAchievement(this.achievement)
                  .then(response => {
                    console.log("updateAchievement response", response)
                    this.loadAchievements()
                  })
                  .catch(error => {
                    console.log("updateAchievement error", error)
                  })
        } else {
          console.log("insert")
          createAchievement(this.achievement)
                  .then(response => {
                    console.log("insertAchievement response", response)
                    this.loadAchievements()
                  })
                  .catch(error => {
                    console.log("insertAchievement error", error)
                  })
        }
      },
      deleteAchievement: function () {
        console.log("deleteAchievement", this.achievement)
        if (this.achievement.id) {
          destroyAchievement(this.achievement)
                  .then(response => {
                    console.log("deleteAchievement response", response)
                    this.loadAchievements()
                  })
                  .catch(error => {
                    console.log("deleteAchievement error", error)
                  })
        }
      },
      chooseAchievement: function(achievementData: NewAchievement) {
        this.achievement.achievementName = achievementData.achievementName
        this.achievement.categoryId = achievementData.categoryId
        this.achievement.bonusLevel = achievementData.bonusLevel
        this.achievement.singleMode = achievementData.singleMode
        this.achievement.showSum = achievementData.showSum
        this.achievement.id = achievementData.id
        console.log("achievement.id", this.achievement.id)
      }
    },
    mounted() {
      this.loadAchcats();
      this.loadAchievements();
    },

  });
</script>

<style lang="scss" scoped></style>
