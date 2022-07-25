<template>
  <v-container fluid class="down-top-padding">
    <Login></Login>
  </v-container>
</template>

<script>
import Footer from "@/layouts/footer/Footer";
import Login from "../components/Login.vue";
export default {
  name: "Home",
  components: {
    Footer,
    Login
}
};
</script>
