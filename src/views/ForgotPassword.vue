<template>
  <div class="home-layout">
    <Header />
    <div class="content">
      <div class="container">
        <div class="row d-flex flex-wrap">
          <div
            class="column xs-12 d-flex align-items-center justify-content-center"
          >
            <div class="md-4 mb-40">
              <h1 class="text-center">Set New Password</h1>
              <Form @submit="submit">
                <div class="form-group mt-20">
                  <label class="text-muted" for="inputPassword1"
                    >New Password</label
                  ><Field
                    :rules="isValid"
                    type="password"
                    required
                    class="form-control"
                    id="inputPassword1"
                    v-model="password"
                    name="password"
                    placeholder="Enter New Password"
                    ref="password"
                  />
                </div>

                <div class="form-group mt-20">
                  <label class="text-muted" for="inputPassword2"
                    >Confirm Password</label
                  ><Field
                    :rules="isValid"
                    type="password"
                    class="form-control"
                    id="inputPassword2"
                    required
                    name="confirm"
                    v-model="confirm"
                    placeholder="Enter New Password Again"
                    data-vv-as="password"
                  />
                </div>
                <div
                  v-if="!done"
                  class="mt-20"
                  style="color:red; font-size: 0.75rem"
                >
                  <ErrorMessage name="confirm" />
                </div>
                <div v-if="done" class="mt-20">
                  <p style="color:green; font-size: 0.75rem">
                    Your password changed successfully! You can log in to Gasome
                    App with your new password now.
                  </p>
                </div>
                <div v-if="error" class="mt-20">
                  <p style="color:red; font-size: 0.75rem">
                    It seems there is a problem here, please check your password
                    and try again.
                  </p>
                </div>
                <button
                  :disabled="!isValid"
                  class="btn btn-primary w-100 mt-40"
                >
                  {{ this.loading ? "Loading..." : "Change Password" }}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import { Field, Form, ErrorMessage } from "vee-validate";

@Options({
  components: {
    Header,
    Footer,
    Field,
    Form,
    ErrorMessage,
  },
  data: () => ({
    password: "",
    confirm: "",
    loading: false,
    done: false,
    error: false,
  }),
  beforeMount() {
    if (this.token !== this.$route.query.token) {
      this.token = this.$route.query.token;
    }
  },
  methods: {
    isValid() {
      if (this.password && this.password.trim()) {
        if (this.password === this.confirm) {
          return true;
        }
      }

      return "*Please check your password and be sure both of them same";
    },
    async submit() {
      this.loading = true;
      this.error = false;
      this.done = false;

      try {
        const url = "https://api.gasome.com/v1_1/resetPassword";
        const val = await axios.post(
          url,
          { password: this.password },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        if (val.data && val.status === 200) {
          this.loading = false;
          this.done = true;
          this.password = "";
          this.confirm = "";
        }
      } catch (error) {
        this.loading = false;
        this.error = true;
        console.warn(error.message);
      }
    },
  },
})
export default class ForgotPassword extends Vue {}
</script>
<style lang="scss">
@import "@/scss/main.scss";
</style>
