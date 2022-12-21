<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="py-4 d-flex justify-center align-center flex-column">
        <h1>Error</h1>
        <v-icon class="error-icon">mdi-alert-circle-outline</v-icon>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "error",
}
</script>

<style scoped lang="scss">
h1, .error-icon {
  color: red!important;
}

.error-icon {
  font-size: 50px!important;
}
</style>
