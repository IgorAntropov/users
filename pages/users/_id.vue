<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 d-flex justify-center align-center flex-column">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">
              {{ user.name }}
            </div>
            <v-list-item-title class="text-h5 mb-1">
              {{ user.username }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <a
                :href="`mailto:${user.email}`"
              >
                {{ user.email }}
              </a>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <a
                :href="`tel:${user.phone}`"
              >
                {{ user.phone }}
              </a>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="100"
            color="transparent"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${$route.params.id * 5 + 10}`"
              :lazy-src="`https://picsum.photos/500/300?image=${$route.params.id * 5 + 10}`"
              aspect-ratio="1.7"
              class="grey lighten-2 avatar"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="blue lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions
          class="actions"
        >
          <v-btn
            outlined
            rounded
            text
            @click.prevent="goBack"
          >
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({$axios, params}) {
    const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`);

    return {user};
  },
  data: () => ({
    user: [],
  }),
  middleware: [
    'auth-check',
  ],
  name: "UserDetails",
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  methods: {
    goBack() {
      this.$router.push('/users');
    },
  },
}
</script>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px!important;
}
</style>
