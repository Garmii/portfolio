<template>
  <div>
    <full-page
      ref="fullpage"
      :options="options"
      :skip-init="true"
      id="fullpage"
    >
      <div class="section"><AboutMe /></div>
      <div class="section"><MyProjects /></div>
      <div class="section"><!--Redes sociales --></div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import MyProjects from "@/components/MyProjects.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    MyProjects,
  },
  data: () => ({
    options: {
      sectionsColor: ["#59C173", "#a17fe0", "#F27121", "#FFFF00"],
      scrollingSpeed: 800,
      loopTop: true,
      loopBottom: true,
      navigation: true,
      verticalCentered: false,
    },
  }),
  methods: {
    componentsReady() {
      this.$refs.fullpage.init();
    },
  },
  mounted() {
    this.componentsReady();
  },
};
</script>
