<template>
    <v-main>
        <v-row dense>
            <h1>Cursos</h1>
        </v-row>
        <v-row dense>
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card id="card" class="pa-2">
                    <v-chip class="ma-2" color="#FFCB2D">
                        {{card.estado}}
                    </v-chip>
                    <v-row>
                        <v-col cols="8">
                            <v-card-title v-text="card.title" ></v-card-title>
                            <v-card-subtitle v-text="card.etiqueta"> </v-card-subtitle>
                        </v-col>
                        <v-col cols="4">
                            <img src="@/assets/foco.png" alt="logo" width="70px" />
                        </v-col>
                    </v-row>
                    <v-card-text>
                        <p v-text="card.description" ></p>
                    </v-card-text>
                    <v-card-text>
                        <v-btn text x-small dark>
                            <v-icon>mdi-arrow-right-drop-circle-outline</v-icon>
                            8 lecciones
                        </v-btn>
                        <v-btn text x-small dark>
                            <v-icon>mdi-clock-outline</v-icon>
                            1 hora
                        </v-btn>
                        <v-btn text x-small dark>
                            <v-icon color="#FBC02D">mdi-alpha-b-circle-outline</v-icon>
                            220 kcoins
                        </v-btn>
                    </v-card-text>
                    <v-card-text>
                        <v-timeline align-top dense color="primary">
                            <v-timeline-item
                                v-for="(tema, index) in card.temas"
                                :key=index
                                small
                            >
                                <div>
                                    <strong>{{tema}}</strong>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>

                    <v-card-text>
                        <v-row class="btn"
                        justify="center"
                        >
                            <v-btn depressed color="#CE0F65" dark large>
                                VER CURSO COMPLETO
                            </v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row id="btn"
        justify="center"
        >
            <v-col >
                <v-card class="card" max-width="450" color=#21456E>
                    <v-row>
                       <v-col class="col" >
                            <v-row class="btn" justify="center">
                                <v-card-title> <p>Mis notas</p> </v-card-title>
                            </v-row> 
                            <v-row class="btn" justify="center">                          
                                <v-btn depressed color="#CE0F65" dark>
                                    IR
                                </v-btn>
                            </v-row>
                        </v-col> 
                        <v-col class="colIcon">
                            <v-btn icon >
                                <v-icon size="80" color="#3C6A9E">mdi-text-box-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col >
                <v-card class="card" max-width="450" color=#21456E>
                    <v-row>
                        <v-col class="col" >
                            <v-row class="btn" justify="center">
                                <v-card-title> <p>Noticias</p> </v-card-title>
                            </v-row> 
                            <v-row class="btn" justify="center">                          
                                <v-btn depressed color="#CE0F65" dark>
                                    IR
                                </v-btn>
                            </v-row>
                        </v-col> 
                        <v-col class="colIcon">
                            <v-btn icon >
                                <v-icon size="80" color="#3C6A9E">mdi-newspaper-variant-multiple-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col >
                <v-card class="card" max-width="450" color=#21456E>
                    <v-row>
                        <v-col class="col" >
                            <v-row class="btn" justify="center">
                                <v-card-title> <p>Contactar con un mentor</p> </v-card-title>
                            </v-row> 
                            <v-row class="btn" justify="center">                          
                                <v-btn depressed color="#CE0F65" dark :to="rutaMentors" link>
                                    Enviar mensaje
                                </v-btn>
                            </v-row>
                        </v-col> 
                        <v-col class="colIcon">
                            <v-btn icon >
                                <v-icon size="80" color="#3C6A9E">mdi-account-box-multiple-outline</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
export default {
  data: () => ({
     cards: [
      {
        estado:"NUEVO",
        title: "Transformación Digital",
        etiqueta: "Curso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nulla enim duis sit viverra tincidunt tempus. Suscipit cursus sit loobortis magma vivamus.",
        temas: ["Tema1", "Tema2", "Tema3", "Tema4"],
      },
      {
        estado:"NUEVO",
        title: "Marketing Digital",
        etiqueta: "Curso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nulla enim duis sit viverra tincidunt tempus. Suscipit cursus sit loobortis magma vivamus.",
        temas: ["Tema1", "Tema2", "Tema3", "Tema4"],
      },
      {
        estado:"NUEVO",
        title: "Big Data",
        etiqueta: "Curso",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nulla enim duis sit viverra tincidunt tempus. Suscipit cursus sit loobortis magma vivamus.",
        temas: ["Tema1", "Tema2", "Tema3", "Tema4"],
      }
    ],
    rutaMentors: "mentors"
  })
};
</script>

<style>
    #btn{
        align-items: "center";
        
    }
    #card{
        padding: 15px;
        background-color: #21456E;
        color:#fff;
        max-width: 450px;
        min-height: 500px;
        border-radius: 10px;
    }
    p, strong{
        color:#fff;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .v-icon{
        padding: 5px;
    }

    .card{
        padding: 20px;
        min-height: 190px;
        max-width: 450px;
    }
    
    .colIcon{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .theme--light.v-timeline:before {
        background: rgb(250, 248, 248);
    }

    .v-application .primary {
        background-color: #e2e5e9!important;
        border-color: #e2e5e9 !important;
    }
    h1{
        padding: 10px;
        color: #fff;
    }
    .col{
        padding: 5px;
    }
</style>
