<!--suppress ALL -->
<template>
  <button class="button btn_home">
    {{ btn_msg }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['btn_msg', 'click']
  }
</script>

<style lang="scss">
@import "../styles/main";

  .button {
    @include luxury_button;
  }

  .btn_home {
    width: 150px;
  }

</style>
