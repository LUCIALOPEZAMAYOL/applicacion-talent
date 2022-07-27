<template>
  <v-app id="inspire">
    <Header></Header>
    <v-content >
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
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
  .v-content{
    background-color: #002855;
  }
  .v-footer{
    box-shadow: 0px 5px 8px rgb(44, 44, 44);
  }
</style>
