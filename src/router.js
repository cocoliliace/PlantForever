import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router =  new Router({
  mode: "history",
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
      component: () => import("./views/About.vue"),
      meta: {
        title: "About – PlantForever"
      }
    },
    {
      path: "/get-a-tree",
      name: "GetATree",
      component: () => import("./views/GetATree.vue"),
      meta: {
        title: "Get A Tree – PlantForever"
      }
    },
    {
      path: "/store",
      name: "Store",
      component: () => import("./views/Store.vue"),
      meta: {
        title: "Store – PlantForever"
      }
    },
    {
      path: "/store/white-logo-crewneck-t-shirt",
      name: "Shirt",
      component: () => import("./views/merch/Shirt.vue"),
      meta: {
        title: "White Logo Crewneck T-Shirt – PlantForever"
      }
    },
    {
      path: "/volunteer",
      name: "Volunteer",
      component: () => import("./views/Volunteer.vue"),
      meta: {
        title: "Volunteer Registration – PlantForever"
      }
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: () => import("./views/Contact.vue"),
      meta: {
        title: "Contact Us – PlantForever"
      }
    },
    {
      path: "/donate",
      name: "Donate",
      component: () => import("./views/Donate.vue"),
      meta: {
        title: "Donate – PlantForever"
      }
    },
    {
      path: "*",
      name: "Error",
      component: () => import("./views/Error.vue"),
      meta: {
        title: "Page Not Found"
      }
    }
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