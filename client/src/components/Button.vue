<!--suppress ALL -->
<template>
  <button v-on:click="() => { click() }">
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
