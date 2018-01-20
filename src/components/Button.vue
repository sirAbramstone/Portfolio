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
    border-color: $acid;
    text-transform: uppercase;
    color: $white;
  }

  .btn_home {
    width: 150px;
  }

</style>
