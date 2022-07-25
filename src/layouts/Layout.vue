<template>
  <v-app id="inspire">
    <Header></Header>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
    <Footer></Footer>
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
