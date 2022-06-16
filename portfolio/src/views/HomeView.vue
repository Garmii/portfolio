<template>
  <div>
    <full-page
      ref="fullpage"
      :options="options"
      :skip-init="true"
      id="fullpage"
    >
      <div class="section">First section ...</div>
      <div class="section">Second section ...</div>
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    //HelloWorld,
  },
  data: () => ({
    options: {
      sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
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
