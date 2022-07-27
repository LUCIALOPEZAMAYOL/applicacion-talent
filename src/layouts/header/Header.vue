<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <img src="@/assets/logo.png" alt="logo" width="70px" />

      <v-spacer></v-spacer>

      <v-btn dark color="#CE0F65">
        Carina Pollachi
        <v-icon dark>mdi-account-circle</v-icon>
      </v-btn>

      <v-btn icon dark>
        <v-icon >mdi-bell-ring-outline</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default{
  name:"Header",
}
</script>

<style>
.v-toolbar__content {
  background-color: #002855;
  box-shadow: rgb(44, 44, 44);
}
</style>
