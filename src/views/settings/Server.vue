<template>
  <div>
    <p>Settings_Servers</p>

    <form>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="server_name" class="form-label">Name</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="server_name"
                  aria-describedby="serverNameHelp"
                  v-model="this.server.serverName"
          />
        </div>
        <div class="col-auto">
          <span id="serverNameHelp" class="form-text">Name your server</span>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="col-2">
          <label for="server_map" class="form-label">Map</label>
        </div>
        <div class="col-auto">
          <input
                  type="text"
                  class="form-control"
                  id="server_map"
                  aria-describedby="serverMapHelp"
                  v-model="this.server.mapName"
          />
        </div>
        <div class="col-auto">
          <span id="serverMapHelp" class="form-text">Which Map is the server running</span>
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <button type="submit" class="btn btn-primary" @click.prevent="this.submitServer">Submit</button>
        </div>
        <div class="col-auto">
          <button v-if="this.server.id" type="submit" class="btn btn-primary" id="delete_record" @click.prevent="this.deleteServer">Delete </button>
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
      <th>Map</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="server_data in this.allData" :key="server_data.id" @click="this.chooseServer(server_data)">
      <td>{{ server_data.id }}</td>
      <td>{{ server_data.serverName }}</td>
      <td>{{ server_data.mapName }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
  import {defineComponent, onMounted, reactive} from "vue";
  import {NewServer, getAllServers, createServer, updateServer, destroyServer} from "@/modelapi/server";

export default defineComponent({
  name: "Settings_Servers",
  data() {
    return{
      server: new NewServer(),
      allData: {},
    }
  },
  methods: {
    loadServers: function () {
      getAllServers()
              .then(response => {
                console.log("loadServers response", response)
                this.allData = response
              })
              .catch(error => {
                console.log("loadServers error", error)
              })
    },
    submitServer: function () {
      console.log("submitServer", this.server)
      if (this.server.id) {
        console.log("submitServer update", this.server)
        updateServer(this.server)
                .then(response => {
                  console.log("updateServer response", response)
                  this.loadServers()
                })
                .catch(error => {
                  console.log("updateServer error", error)
                })
      } else {
        console.log("insert")
        createServer(this.server)
                .then(response => {
                  console.log("insertServer response", response)
                  this.loadServers()
                })
                .catch(error => {
                  console.log("insertServer error", error)
                })
      }
    },
    deleteServer: function () {
      console.log("deleteServer", this.server)

      if (this.server.id) {
        destroyServer(this.server)
                .then(response => {
                  console.log("deleteServer response", response)
                  this.loadServers()
                })
                .catch(error => {
                  console.log("deleteServer error", error)
                })
      }
    },
    chooseServer: function(serverData: NewServer) {
      this.server.serverName = serverData.serverName
      this.server.mapName = serverData.mapName
      this.server.id = serverData.id
      console.log("server.id", this.server.id)
    }
  },
  mounted() {
    this.loadServers()
  },
  computed: {
    isDeletable: function () {
      if(this.server.id == undefined) return false
      if(this.server.id > 0) return true
      return false
    }
  }
});
</script>

<style lang="scss" scoped></style>
