import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import auth from './auth'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

// Check the user's auth status when the app starts
auth.checkAuth()

export let router = new VueRouter()

// Set up routing and match routes to components
router.map({
    '/home': {
        component: Home
    },
    'secretquote': {
        component: SecretQuote
    },
    '/login': {
        component: Login
    },
    'signup': {
        component: Signup
    }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
    '*': '/home'
})

// Start the app on div #app
router.start(App, '#app')