<template>
  <AboutMe />
  <SocialMedia />
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/AboutMe.vue";
import SocialMedia from "@/components/SocialMedia.vue";

export default {
  name: "AboutView",
  components: {
    AboutMe,
    SocialMedia,
  },
  data: () => ({}),
};
</script>
