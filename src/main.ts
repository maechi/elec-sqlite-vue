/**
* @author Sambit Sahoo <soulsam480@hotmail.com>
* @version 0.1.0
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { sequelize } from "./getdb"


import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

// todo sqlite db
console.log("connect do database...")
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(error => {
        console.log('Unable to connect to the database:', error);
        console.error('Unable to connect to the database:', error);
    })
    .finally(() => {
        console.log("starting the app")
        app.use(router).mount('#app')
    })



