<template>
  <div class="wrap_contact">
    <main-menu></main-menu>
    <div class="wrap_form">
      <form action="../../../server/app.js" class="form">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Subject">
        <textarea name="message" id="" cols="30" rows="10" placeholder="message"></textarea>
      </form>
    </div>
    <div class="wrap_google"></div>
  </div>
</template>

<script>
  import MainMenu from './MainMenu';

  export default {
    name: 'Contact',
    components: {
      'main-menu': MainMenu
    }
  }
</script>

<style lang="scss">
  @import "../styles/main";

  .wrap_contact {
    display: flex;
    width: 100%;
    height: 100%;
    background: $gradient;

    .wrap_form {
      display: inherit;
      padding-left: $pad-l;
    }

    .form {
      @include flex-box
    }
  }
</style>
