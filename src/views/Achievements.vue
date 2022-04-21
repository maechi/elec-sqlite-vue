<template>
  <div>
    <p>Achievements</p>
  </div>
  <br/>


  <table class="table">
    <thead>
    <tr>
      <th>Character</th>
      <th v-for="achievement_data in this.allAchievements" :key="achievement_data.id">{{ achievement_data.achievementName}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="character_data in this.allCharacters" :key="character_data.id">
      <td>{{ character_data.characterName }}</td>
      <td v-for="achievement_data in this.allAchievements" :key="achievement_data.id"> xxx </td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import {createCharacter, destroyCharacter, getAllCharacters, NewCharacter, updateCharacter} from "@/modelapi/character";
import {getAllAchievements} from "@/modelapi/achievements";

export default defineComponent({
  name: "Achievements",
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
      getAllAchievements()
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
