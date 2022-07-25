<template>
  <v-container>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card>
          <v-row >
            <v-col cols="8">
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.etiqueta"> </v-card-subtitle>
            </v-col>
            <v-col cols="4" aling-content="center">
              <v-btn icon aling-content="center">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              Today
            </div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple lighten-1"
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green"
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1"
      }
    ],
    cards: [
      {
        title: "Transformación Digital",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4
      },
      {
        title: "Marketing Digital",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4
      },
      {
        title: "Big Data",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4
      },
      {
        title: "Transformación Digital",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4
      },
      {
        title: "Marketing Digital",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4
      },
      {
        title: "Big Data",
        etiqueta: "Curso",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4
      }
    ]
  })
};
</script>
