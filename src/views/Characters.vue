<template>
  <div>
    <p>Characters</p>
    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="character_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="character_name"
                  aria-describedby="characterNameHelp"
                  v-model="this.character.characterName"
          />
        </div>
        <div class="col-auto">
          <span id="characterNameHelp" class="form-text">Name your character</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="character_level" class="form-label">Level</label>
        </div>
        <div class="col-auto">
          <input
                  type="number"
                  class="form-control"
                  id="character_level"
                  min="1"
                  aria-describedby="characterLevelHelp"
                  v-model="this.character.level"
          />
        </div>
        <div class="col-auto">
          <span id="characterLevelHelp" class="form-text">Level</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitCharacter">Submit</button>
        </div>
        <div class="col-auto">
          <button v-if="this.character.id" type="submit" class="btn btn-primary" id="delete_record" @click.prevent="this.deleteCharacter">Delete </button>
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
      <th>Level</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="character_data in this.allData" :key="character_data.id" @click="this.chooseCharacter(character_data)">
      <td>{{ character_data.id }}</td>
      <td>{{ character_data.characterName }}</td>
      <td>{{ character_data.level }}</td>
    </tr>
    </tbody>
  </table>

</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import {createCharacter, destroyCharacter, getAllCharacters, NewCharacter, updateCharacter} from "@/modelapi/character";

export default defineComponent({
  name: "Character",
  data() {
    return{
      character: new NewCharacter(),
      allData: {},
    }
  },
  methods: {
    loadCharacters: function () {
      getAllCharacters()
              .then(response => {
                console.log("loadCharacters response", response)
                this.allData = response
              })
              .catch(error => {
                console.log("loadCharacters error", error)
              })
    },
    submitCharacter: function () {
      console.log("submitCharacter", this.character)
      if (this.character.id) {
        console.log("submitCharacter update", this.character)
        updateCharacter(this.character)
                .then(response => {
                  console.log("updateCharacter response", response)
                  this.loadCharacters()
                })
                .catch(error => {
                  console.log("updateCharacter error", error)
                })
      } else {
        console.log("insert")
        createCharacter(this.character)
                .then(response => {
                  console.log("insertCharacter response", response)
                  this.loadCharacters()
                })
                .catch(error => {
                  console.log("insertCharacter error", error)
                })
      }
    },
    deleteCharacter: function () {
      console.log("deleteCharacter", this.character)

      if (this.character.id) {
        destroyCharacter(this.character)
                .then(response => {
                  console.log("deleteCharacter response", response)
                  this.loadCharacters()
                })
                .catch(error => {
                  console.log("deleteCharacter error", error)
                })
      }
    },
    chooseCharacter: function(characterData: NewCharacter) {
      this.character.characterName = characterData.characterName;
      this.character.level = characterData.level;
      this.character.id = characterData.id;
      console.log("character.id", this.character.id)
    }
  },
  mounted() {
    this.loadCharacters()
  },
});
</script>

<style lang="scss" scoped></style>
