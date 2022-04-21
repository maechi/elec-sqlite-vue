<template>
  <div>
    <p>Settings_Tribes</p>

    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="tribe_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="tribe_name"
                  aria-describedby="tribeNameHelp"
                  v-model="this.tribe.tribeName"
          />
        </div>
        <div class="col-auto">
          <span id="tribeNameHelp" class="form-text">Name your Tribe</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="tribe_server" class="form-label">ServerId</label>
        </div>
        <div class="col-auto">
          <select
                  class="form-select"
                  id="tribe_server"
                  aria-describedby="tribeServerHelp"
                  v-model="this.tribe.serverId"
          >
            <option v-for="server_data in this.allServerData" :key="server_data.id" :value="server_data.id">{{ server_data.serverName }}</option>
          </select>
        </div>
        <div class="col-auto">
          <span id="tribeServerHelp" class="form-text">Which Server is the tribe</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitTribe">Submit</button>
        </div>
        <div class="col-auto">
          <button v-if="this.tribe.id" type="submit" class="btn btn-primary" @click.prevent="this.deleteTribe">Delete</button>
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
      <th>Server</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="tribe_data in this.allData" :key="tribe_data.id" @click="this.chooseTribe(tribe_data)" :class="{ 'table-active': tribe_data.id == this.tribe.id }">
      <td>{{ tribe_data.id }}</td>
      <td>{{ tribe_data.tribeName }}</td>
      <td><span :title="'serverId: ' + tribe_data.serverId">{{ tribe_data.Server.serverName }}</span></td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import {NewTribe, getAllTribes, createTribe, updateTribe, destroyTribe} from "@/modelapi/tribe";
  import {getAllServers} from "@/modelapi/server";

  export default defineComponent({
    name: "Settings_Tribe",
    data() {
      return {
        tribe: new NewTribe(),
        allData: {},
        allServerData: {}
      }
    },
    methods: {
      loadServers: function () {
        console.log("Tribes.vue loadServers()")
        getAllServers()
                .then(response => {
                  console.log("loadServers response", response)
                  this.allServerData = response
                })
                .catch(error => {
                  console.log("loadServers error", error)
                })
      },
      loadTribes: function () {
        getAllTribes()
                .then(response => {
                  console.log("loadTribes response", response)
                  this.allData = response
                })
                .catch(error => {
                  console.log("loadTribes error", error)
                })
      },
      submitTribe: function () {
        console.log("submitTribe", this.tribe)
        if (this.tribe.id) {
          console.log("submitTribe update")
          updateTribe(this.tribe)
                  .then(response => {
                    console.log("updateTribe response", response)
                    this.loadTribes()
                  })
                  .catch(error => {
                    console.log("updateTribe error", error)
                  })
        } else {
          console.log("submitTribe insert")
          createTribe(this.tribe)
                  .then(response => {
                    console.log("insertTribe response", response)
                    this.loadTribes()
                  })
                  .catch(error => {
                    console.log("insertTribe error", error)
                  })
        }
      },
      deleteTribe: function () {
        console.log("deleteTribe", this.tribe)
        if(this.tribe.id) {
          destroyTribe(this.tribe)
                  .then(response => {
                    console.log("deleteTribe response", response)
                    this.loadTribes()
                  })
                  .catch(error => {
                    console.log("deleteTribe error", error)
                  })
        }
      },
      chooseTribe: function(tribeData: NewTribe) {
        this.tribe.tribeName = tribeData.tribeName
        this.tribe.serverId = tribeData.serverId
        this.tribe.id = tribeData.id
        console.log("tribe.serverId", this.tribe.serverId)
        console.log("tribe.id", this.tribe.id)
      }
    },
    mounted() {
      this.loadServers()
      this.loadTribes()
    }
  });
</script>

<style lang="scss" scoped></style>
