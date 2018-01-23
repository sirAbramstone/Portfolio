<!--suppress ALL -->
<template>
  <button>
    {{ btn_msg }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['btn_msg']
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
