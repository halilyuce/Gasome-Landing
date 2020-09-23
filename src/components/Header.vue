<template>
  <header class="mt-20">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="header-logo">
          <Logo />
        </div>
        <div class="header-right">
          <div class="social-links">
            <a href="https://twitter.com/gasomecom" target="blank">
              <fa icon="twitter" type="fab" class="icon"></fa>
            </a>
            <a href="https://instagram.com/gasomeapp" target="blank">
              <fa icon="instagram" type="fab" class="icon"></fa>
            </a>
          </div>
          <button v-on:click="sendMail">Contact Us</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Logo from "@/components/Logo.vue";

@Options({
  components: {
    Logo
  },
  methods: {
    sendMail: function() {
      window.open("mailto:support@gasome.com");
    }
  }
})
export default class Header extends Vue {}
</script>
