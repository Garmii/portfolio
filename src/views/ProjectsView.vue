<template>
  <MyProjects />
</template>

<script>
// @ is an alias to /src
import MyProjects from "@/components/MyProjects.vue";

export default {
  name: "ProjectsView",
  components: {
    MyProjects,
  },
  data: () => ({}),
};
</script>
