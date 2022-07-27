<template>
  <v-app id="inspire">
    <Header></Header>
    <v-main >
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer color="#002855">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./header/Header";
import Footer from "./footer/Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
  .v-main{
    background-color: #002855;
  }
</style>
