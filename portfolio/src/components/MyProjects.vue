<template>
  <p class="text-h4 text-center" style="padding-top: 2em">
    Here's an example of some projects
  </p>
  <div class="card-container row wrap">
    <q-card
      dark
      class="bg-grey-9 my-card"
      v-for="(item, index) in items"
      :key="index"
    >
      <q-card-section>
        <div class="text-h6">{{ items[index].name }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section> {{ items[index].description }} </q-card-section>
    </q-card>
  </div>
</template>

<script>
import datos from "@/assets/Projects.json";

export default {
  name: "MyProjects",
  setup() {
    let hover = false;

    return {
      hover,
    };
  },
  computed: {
    items() {
      return datos.map((item) => {
        return item;
      });
    },
  },
};
</script>

<style>
.title {
  width: 100%;
  justify-content: center;
  padding: 2em;
}
.my-card {
  width: 100%;
  max-width: 250px;
  margin-right: 2em;
  margin-left: 2em;
  margin-bottom: 2em;
}
.card-container {
  justify-content: center;
  padding: 6em;
}
</style>
