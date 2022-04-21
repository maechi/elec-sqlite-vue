<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Achievements' }">Achievements</router-link> |
    <router-link :to="{ name: 'Characters' }">Characters</router-link> |
    <router-link :to="{ name: 'Settings' }">Settings</router-link>

    <div id="nav_settings" v-if="route.name && route.name.startsWith('Settings')">
      <router-link :to="{ name: 'Settings_General' }">General</router-link> |
      <router-link :to="{ name: 'Settings_Servers' }">Servers</router-link> |
      <router-link :to="{ name: 'Settings_Tribes' }">Tribes</router-link> |
      <router-link :to="{ name: 'Settings_Achievements' }">Achievements</router-link> |
      <router-link :to="{ name: 'Settings_AchievementOptions' }">Achievement Options</router-link> |
      <router-link :to="{ name: 'Settings_AchievementCategories' }">Achievement Categories</router-link>
    </div>

  </div>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, computed, watch } from 'vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'App.vue',
    setup() {
      const route = useRoute();

      console.log('current route name on component setup init:', route.name);

      // You could use computed property which re-evaluates on route name updates
      // const routeName = computed(() => route.name);

      // You can watch the property for triggering some other action on change

      watch(() => route.name, () => {
        console.log('MyCoolComponent - watch route.name changed to', route.name);
        },
        { immediate: true });

      return { route };
    },
  });
</script>
<style lang="scss">
:root {
  background-color: white;
  color: black;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
