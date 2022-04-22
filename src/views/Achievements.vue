<template>
  <div>
    <p>Achievements</p>
  </div>
  <br/>


  <table class="table">
    <thead>
    <tr>
      <th>Achievement</th>
      <th v-for="character_data in this.allCharacters" :key="character_data.id">{{ character_data.characterName}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="achievement_data in this.allAchievements" :key="achievement_data.id">
      <td>{{ achievement_data.achievementName }}</td>
      <td v-for="character_data in this.allCharacters" :key="character_data.id">
        CAC <br/>
        <CharacterAchievementCell :character="character_data" :achievement="achievement_data" />
      </td>
    </tr>

    </tbody>
  </table>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import {getAllCharacters} from "@/modelapi/character";
import {getAllAchievementsWithOptions} from "@/modelapi/achievements";

import CharacterAchievementCell from './partials/CharacterAchievementCell.vue';

export default defineComponent({
  name: "Achievements",
  components: {
    CharacterAchievementCell
  },
  data() {
    return{
      allCharacters: {},
      allAchievements: {},
    }
  },
  methods: {
    loadCharacters: function () {
      getAllCharacters()
              .then(response => {
                console.log("loadCharacters response", response)
                this.allCharacters = response
              })
              .catch(error => {
                console.log("loadCharacters error", error)
              })
    },
    loadAchievements: function () {
      getAllAchievementsWithOptions()
              .then(response => {
                console.log("loadAchievements response", response)
                this.allAchievements = response
              })
              .catch(error => {
                console.log("updateCharacter error", error)
              })
    }
  },
  mounted() {
    this.loadAchievements();
    this.loadCharacters();
  },
});
</script>

<style lang="scss" scoped></style>
