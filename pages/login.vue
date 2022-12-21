<template>
  <v-row justify="center" align="center">
    <v-col cols="16" sm="10" md="8">
      <v-card class="py-4 d-flex justify-center align-center flex-column wrapper">
        <v-alert
          type="error"
          v-if="$route.query.message"
        >
          You need login first!
        </v-alert>

        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:10"
            >
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Name"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="phoneNumber"
              :rules="{
          required: true,
          regex: '[8|7|+7]\\d{10}$'
        }"
            >
              <v-text-field
                v-model="phoneNumber"
                :counter="11"
                :error-messages="errors"
                label="Phone Number"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="email"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="checkbox"
            >
              <v-checkbox
                v-model="checkbox"
                :error-messages="errors"
                value="1"
                label="Processing of personal data"
                type="checkbox"
                required
              ></v-checkbox>
            </validation-provider>

            <v-btn class="mr-4" @click="goToHome">
              Home
            </v-btn>

            <v-btn class="mr-4" @click="clear">
              clear
            </v-btn>

            <v-btn
              type="submit"
              :disabled="invalid"
            >
              submit
            </v-btn>
          </form>
        </validation-observer>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { required, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager');

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

export default {
  name: "LoginPage",
  layout: 'empty',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: '',
    phoneNumber: '',
    email: '',
    checkbox: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate();
      this.$store.dispatch('auth/login');
      this.$router.push('/');
    },
    clear () {
      this.name = '';
      this.phoneNumber = '';
      this.email = '';
      this.checkbox = null;
      this.$refs.observer.reset();
    },
    goToHome() {
      this.$router.push('/');
    },
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  &>* {
    width: 100%;
    padding: 20px;
  }
}
</style>
