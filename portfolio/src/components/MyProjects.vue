<template>
  <div class="card-container">
    <q-card
      dark
      bordered
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
  setup() {},
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
.my-card {
  width: 100%;
  max-width: 250px;
  margin-right: 2em;
  margin-left: 2em;
}
.card-container {
  flex-direction: row;
  display: flex;
  justify-content: center;
  padding: 2em;
}
</style>
