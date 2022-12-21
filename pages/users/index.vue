<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 d-flex justify-center align-center flex-column">
        <div v-for="(user, index) of users" :key="user.id" class="user-item" @click.prevent="openDetails(user.id)">
          <span>{{index + 1}}. {{ user.name }}</span>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async fetch({store}) {
    if (!store.getters['users/users'].length) {
      await store.dispatch('users/fetch');
    }
  },
  name: "UsersListPage",
  middleware: [
    'auth-check',
  ],
  computed: {
    users() {
      return this.$store.getters['users/users'];
    },
  },
  methods: {
    openDetails(user) {
      this.$router.push(`/users/${user}`);
    },
  },
}
</script>

<style scoped lang="scss">
.user-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background-color: gray;
    border-radius: 10px;
  }
}
</style>
