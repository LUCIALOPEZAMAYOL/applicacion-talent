<template>
  <v-container class="my-5">
    <v-layout row wrap>
        <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="mentor in mentores" :key="mentor.nombre">
                <v-card class="text-center ma-3" >
                    <v-responsive class="pt-4">
                        image goes here
                    </v-responsive>
                    <v-card-text>
                        <div class=" text-subtitle-1 ">{{mentor.nombre}}</div>
                        <div class="grey--text">{{mentor.etiqueta}}</div>
                    </v-card-text>
                    <v-card-text>
                        <v-btn depressed class="grey--text" >
                            <v-icon small left> mdi-message </v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "chat",
  data: () => ({
    mentores:[
        {
            nombre:"Leandro Gomez",
            etiqueta:"Mentor",
            img:"@/assets/mentor1.png",
        },
        {
            nombre:"Victor Ruíz",
            etiqueta:"Mentor",
            img:"@/assets/mentor2.png",
        },
        {
            nombre:"Paloma Salazar",
            etiqueta:"Mentor",
            img:"@/assets/mentor4.png",
        },
        {
            nombre:"Julio García",
            etiqueta:"Mentor",
            img:"@/assets/mentor3.png",
        }
    ]
  }),
  components: {}
};
</script>
