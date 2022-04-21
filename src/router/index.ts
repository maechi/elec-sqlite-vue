import "bootstrap/dist/css/bootstrap.min.css"
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import "bootstrap/dist/js/bootstrap.js"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import(/* webpackChunkName: "achievements" */ '../views/Achievements.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },

  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChungName: "settings" */ '../views/Settings.vue'),
    children: [
      {
        path: '/settings/general',
        name: 'Settings_General',
        component: () => import(/* webpackChungName: "settings_general" */ '../views/settings/General.vue')
      },
      {
        path: '/settings/servers',
        name: 'Settings_Servers',
        component: () => import(/* webpackChungName: "settings_servers" */ '../views/settings/Server.vue')
      },
      {
        path: '/settings/tribes',
        name: 'Settings_Tribes',
        component: () => import(/* webpackChungName: "settings_tribes" */ '../views/settings/Tribes.vue')
      },
      {
        path: '/settings/achievements',
        name: 'Settings_Achievements',
        component: () => import(/* webpackChungName: "settings_achievements" */ '../views/settings/Achievements.vue')
      },
      {
        path: '/settings/achievopt',
        name: 'Settings_AchievementOptions',
        component: () => import(/* webpackChungName: "settings_achievementoptions" */ '../views/settings/AchievementOptions.vue')
      },
      {
        path: '/settings/achievcat',
        name: 'Settings_AchievementCategories',
        component: () => import(/* webpackChungName: "settings_achievementcategories" */ '../views/settings/AchievementCategories.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
