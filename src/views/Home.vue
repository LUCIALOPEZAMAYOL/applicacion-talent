<template>
    <v-container class="container" fluid>
        <CardCurso class="cardCurso"></CardCurso>
    </v-container>
</template>

<script>
import CardCurso from "../components/CardCurso.vue";
export default {
  name: "Home",
  components: {
    CardCurso
}
};
</script>

