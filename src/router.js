import Vue from "vue";
import Meta from "vue-meta";
import Router from "vue-router";

Vue.use(Router);
Vue.use(Meta);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/about-us",
      name: "About",
      component: () => import("./views/About.vue")
    },
    {
      path: "/in-the-news",
      name: "InTheNews",
      component: () => import("./views/InTheNews.vue")
    },
    {
      path: "/meet-our-team",
      name: "Team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "/covid-policies",
      name: "Covid",
      component: () => import("./views/Covid.vue"),
      props: true
    },
    {
      path: "/accept-a-tree",
      name: "GetTree",
      component: () => import("./views/GetTree.vue")
    },
    {
      path: "/tree-information",
      name: "Trees",
      component: () => import("./views/Trees.vue")
    },
    {
      path: "/accept-a-tree/in-backyard",
      name: "TreePlanted",
      component: () => import("./views/TreePlanted.vue")
    },
    {
      path: "/accept-a-tree/in-pots",
      name: "TreeInPots",
      component: () => import("./views/TreeInPots.vue")
    },
    // {
    //   path: "/store",
    //   name: "Store",
    //   component: () => import("./views/Store.vue")
    // },
    // {
    //   path: "/store/white-logo-crewneck-t-shirt",
    //   name: "Shirt",
    //   component: () => import("./views/merch/Shirt.vue")
    // },
    {
      path: "/volunteer-registration",
      name: "Volunteer",
      component: () => import("./views/Volunteer.vue")
    },
    {
      path: "/contact-us",
      name: "Contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/donate",
      name: "Donate",
      component: () => import("./views/Donate.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () => import("./views/Error.vue")
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

export default router;
