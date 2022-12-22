<template>
  <v-row justify="center" align="center">
    <v-col cols="20" md="15" sm="10">
      <v-card class="py-4 d-flex justify-center align-center flex-column">
        <h1>This project demonstrates the use of basic requirements
          (technologies) for front-end development using Vue.js</h1>
        <h1>Stack technology:</h1>

        <div class="tech-container">
          <TechnologyItem
            v-for="tech in technologies"
            :key="tech.id"
            :tech="tech"
          ></TechnologyItem>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import TechnologyItem from "@/components/technology-item";

export default {
  name: "AboutPage",
  components: {
    TechnologyItem,
  },
  setup() {
    const technologies = [
      {
        id: 1,
        name: 'Options API',
        description: 'This project uses this technology.',
        image: 'options.png'
      },
      {
        id: 2,
        name: 'Composition API',
        description: 'This project uses this technology.',
        image: 'composition.png'
      },
      {
        id: 3,
        name: 'Vuex',
        description: 'This project uses this technology.',
        image: 'vuex.png'
      },
      {
        id: 4,
        name: 'Nuxt.js',
        description: 'This project uses this technology.',
        image: 'nuxt.png'
      },
      {
        id: 5,
        name: 'Vue.js',
        description: 'This project uses this technology.',
        image: 'vue.png'
      },
      {
        id: 6,
        name: 'Vuetify',
        description: 'This project uses this technology.',
        image: 'vuetify.png'
      },
      {
        id: 7,
        name: 'CSS/SCSS',
        description: 'This project uses this technology.',
        image: 'scss.png'
      },
      {
        id: 8,
        name: 'HTML',
        description: 'This project uses this technology.',
        image: 'html.png'
      },
      {
        id: 9,
        name: 'Axios',
        description: 'This project uses this technology.',
        image: 'axios.png'
      },
      {
        id: 10,
        name: 'Other',
        description: 'Technologies that are not on the list, you can see for yourself.',
        image: 'other.png'
      },
    ];

    return {
      technologies,
    };
  }
}
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
  margin-bottom: 10px;

  &:first-child {
    margin-bottom: 15px;
  }
}

.tech-container {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
  display: grid;
  gap: 20px 40px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  grid-auto-flow: dense;
}
</style>
