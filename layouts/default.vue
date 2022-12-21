<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <nuxt-link
        exact
        active-class="active"
        class="link-item"
        to="/"
        title="Home"
      >
        <v-icon>mdi-home</v-icon>
      </nuxt-link>

      <nuxt-link
        active-class="active"
        class="link-item"
        to="/about"
        title="About"
      >
        <v-icon>mdi-information-outline</v-icon>
      </nuxt-link>

      <nuxt-link
        active-class="active"
        class="link-item"
        to="/users"
        title="Users"
      >
        <v-icon>mdi-account-group</v-icon>
      </nuxt-link>

      <v-spacer></v-spacer>

      <nuxt-link
        active-class="active"
        class="link-item"
        to="/login"
        title="Login"
        v-if="!hasToken"
      >
        <v-icon>mdi-login</v-icon>
      </nuxt-link>

      <v-btn
        icon
        title="Logout"
        class="link-item"
        @click.prevent="logout"
        v-else
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      title: 'Users',
    }
  },
  computed: {
    hasToken() {
      return this.$store.getters['auth/hasToken'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  }
}
</script>

<style scoped lang="scss">
.link-item {
  text-decoration: none;
  margin-left: 15px;
  padding: 10px;

  &:hover, &.active {
    background-color: gray;
    border-radius: 10px;
  }
}
</style>
