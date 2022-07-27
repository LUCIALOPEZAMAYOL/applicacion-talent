<template>
    <v-main>
        <v-row>
            <v-btn class="btn-volver ma-12" outlined dark>VOLVER</v-btn>
        </v-row>
        <v-container class="my-5">
            <v-row>
                <div><h1 class="h1">Transformación Digital</h1></div>
            </v-row>
            <v-layout row wrap>
                <v-row>
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="mentor in mentores" :key="mentor.nombre">
                        <v-card class="text-center ma-3" color="#21456E">
                            <v-responsive class="pt-4">
                               <v-avatar>
                                    <img :src="require('@/assets' + mentor.img)" alt="avatar">
                               </v-avatar> 
                            </v-responsive>
                            <v-card-text>
                                <div class=" text-subtitle-1 ">{{mentor.nombre}}</div>
                                <div class="grey--text">{{mentor.etiqueta}}</div>
                            </v-card-text>
                            <v-card-text>
                                <v-btn depressed color="#CE0F65" dark :to="rutaChat" link>
                                    <v-icon small left> mdi-message </v-icon>
                                    <span>Message</span>
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    </v-main>
</template>

<script>
export default {
  name: "Mentors",
  data: () => ({
    mentores:[
        {
            nombre:"Leandro Gomez",
            etiqueta:"Mentor",
            img:"/mentor1.jpg",
        },
        {
            nombre:"Victor Ruíz",
            etiqueta:"Mentor",
            img:"/mentor2.jpg",
        },
        {
            nombre:"Paloma Salazar",
            etiqueta:"Mentor",
            img:"/mentor4.jpg",
        },
        {
            nombre:"Julio García",
            etiqueta:"Mentor",
            img:"/mentor3.jpg",
        }
    ],
    rutaChat: "Chat",
  }),
  
  components: {}
};
</script>

<style>
div{
    color:#fff;
}

.v-card::before{
    opacity: 0.9;
}
.btn-volver{
    margin-left: 100px;
}
</style>