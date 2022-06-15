/* eslint-disable */
<template>
  <v-container>
    <v-row class="align-center justify-center">
      <div class=".xl">{{ me.description }}</div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WhoAmI",
  data: () => ({
    me: {
      title: "Hello I'm Miguel Garcia",
      description: "I'm a full stack web developer and multiplatform developer",
    },
  }),
};
</script>
