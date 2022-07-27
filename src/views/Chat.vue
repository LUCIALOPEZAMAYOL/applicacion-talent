<template>
  <v-container fluid>
    <v-layout row wrap>
        <v-row class="d-flex justify-space-between" >
            <v-col cols="12" sm="9" md="9" lg="9" fluid>
                <v-card>
                    <v-card-text>
                        <div>

                        </div>

                        <v-form @submit="sendMessage">
                          <input v-model="message" type="text" placeholder="Enviar mensaje">
                          <input type="submit" value="Enviar">
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="3" md="3" lg="3">
                <v-card>
                    <v-card-text>
                        HOLA
                    </v-card-text>
                </v-card>
            </v-col>
    </v-row>
    </v-layout>
  </v-container>
</template>

<script>
//import addChat from '@/firebase/db.js'
export default {
  name: "Chat",
  data() {
    return {
      message:"",
      messages:[],
    };
  },
  methods:{
    sendMessage(e){
      e.preventDefauld()
      const messageInfo = {
        text: this.message 
      }
      addChat(messageInfo)
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>console.log(error.message))
    }
  }
};
</script>
