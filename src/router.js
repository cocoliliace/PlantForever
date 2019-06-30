import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/Home.vue";
import TreeRegistration from "./views/TreeRegistration.vue";
import Volunteer from "./views/Volunteer.vue";
import Contact from "./views/Contact.vue";
import Donate from "./views/Donate.vue";
import Error from "./views/Error.vue";

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "/tree-registration",
      name: "TreeRegistration",
      component: TreeRegistration,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "/Volunteer",
      name: "Volunteer",
      component: Volunteer,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "/donate",
      name: "Donate",
      component: Donate,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
    {
      path: "*",
      name: "Error",
      component: Error,
      meta: {
        title: "PlantForever | Edmonton Nonprofit"
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "PlantForever";
  next();
});

export default router;