<template>
  <q-layout view="hhh lpR fff" id="container">
    <q-header class="transparent text-black" id="header" height-hint="98">
      <q-tabs align="center" class="myMenu fixed-top">
        <q-route-tab to="/" @click="moveTo(1)" label="Home" />
        <q-route-tab to="/myProjects" label="My Projects" @click="moveTo(2)" />
        <q-route-tab to="/aboutMe" label="About Me" @click="moveTo(3)" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <full-page
        ref="fullpage"
        :options="options"
        :skip-init="true"
        id="fullpage"
      >
        <div class="section"><HomeView /></div>
        <div class="section"><ProjectsView /></div>
        <div class="section"><AboutView /></div>
      </full-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView";
import AboutView from "@/views/AboutView.vue";

export default {
  components: {
    HomeView,
    ProjectsView,
    AboutView,
  },

  data: () => ({
    options: {
      anchors: ["/", "myProjects", "aboutMe"],
      menu: ".myMenu",
      sectionsColor: ["#26C6DA", "#66BB6A", "#FF7043"],
      scrollingSpeed: 800,
      loopTop: true,
      loopBottom: true,
      navigation: true,
      verticalCentered: false,
    },
  }),
  methods: {
    moveTo(n) {
      this.$refs.fullpage.api.moveTo(n);
    },
    componentsReady() {
      this.$refs.fullpage.init();
    },
  },
  mounted() {
    this.componentsReady();
  },
};
</script>

<style></style>
