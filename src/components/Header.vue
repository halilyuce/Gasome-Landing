<template>
  <header class="mt-20">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="header-logo">
          <Logo />
        </div>
        <div class="header-right">
          <button class="button-ghost">Help</button>
          <button>Contact Us</button>
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
  }
})
export default class Header extends Vue {}
</script>
