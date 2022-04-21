/**
* @author Sambit Sahoo <soulsam480@hotmail.com>
* @version 0.1.0
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { sequelize } from "./getdb"


import 'bootstrap/dist/css/bootstrap.min.css';


// todo sqlite db
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        const app = createApp(App)
        app.use(router).mount('#app')
    })
    .catch(error => {
        console.log('Unable to connect to the database:', error);
        console.error('Unable to connect to the database:', error);
    })



