<template>
  <v-app>
    <template>
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  name: "Footer"
};
</script>
