import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  //  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./views/user/Login.vue")
    },
    {
      path: "/home",
      name: "home",
      meta: { requireAuth: true },
      component: () => import("./views/Home.vue")
    },
    {
      path: "/forgetPassword",
      name: "forgetPassword",
      meta: { requireAuth: true },
      component: () => import("./views/user/ForgetPassword.vue")
    },
    {
      path: "/about",
      name: "about",
      meta: { requireAuth: true },
      component: () => import("./views/about/About.vue")
    },
    {
      path: "/project",
      name: "project",
      meta: { requireAuth: true },
      component: () => import("./views/project/Project.vue")
    },
    {
      path: "/help",
      name: "help",
      meta: { requireAuth: true },
      component: () => import("./views/about/Help.vue")
    },
    {
      path: "/build/model",
      name: "buildModel",
      meta: { requireAuth: true },
      component: () => import("./views/build/Model.vue")
    },
    {
      path: "/build/picture",
      name: "buildPicture",
      meta: { requireAuth: true },
      component: () => import("./views/build/Picture.vue")
    },
    {
      path: "/build/material",
      name: "buildMaterial",
      meta: { requireAuth: true },
      component: () => import("./views/build/Material.vue")
    },
    {
      path: "/line/model",
      name: "lineModel",
      meta: { requireAuth: true },
      component: () => import("./views/line/Model.vue")
    },
    {
      path: "/line/picture",
      name: "linePicture",
      meta: { requireAuth: true },
      component: () => import("./views/line/Picture.vue")
    },
    {
      path: "/line/material",
      name: "lineMaterial",
      meta: { requireAuth: true },
      component: () => import("./views/line/Material.vue")
    },
    {
      path: "/line/knock",
      name: "lineKnock",
      meta: { requireAuth: true },
      component: () => import("./views/line/Knock.vue")
    },
    {
      path: "/community",
      name: "community",
      meta: { requireAuth: true },
      component: () => import("./views/Community.vue")
    },
    {
      path: "/monitor",
      name: "monitor",
      meta: { requireAuth: true },
      component: () => import("./views/monitor/Monitor.vue")
    },
    {
      path: "/line/knockCheck",
      name: "lineKnockCheck",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/KnockCheck.vue")
    },
    {
      path: "/pz1",
      name: "pz1",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/pz1.vue")
    },
    {
      path: "/pz2",
      name: "pz2",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/pz2.vue")
    },
    {
      path: "/pz3",
      name: "pz3",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/pz3.vue")
    },
    {
      path: "/checkOff",
      name: "checkOff",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/knockCheckOff.vue")
    },
    {
      path: "/knockHome",
      name: "knockHome",
      meta: { requireAuth: true },
      component: () => import("./views/line/knock/knockHome.vue")
    }
  ]
});
