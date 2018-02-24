<template>
  <div class="container_neon_logo">
    <router-link v-bind:to="'/'">
      <div id="neon_logo">D</div>
    </router-link>
  </div>
</template>

<script>

  export default {
    name: 'neon-logo'
  }

</script>

<style lang="scss">

  @import "../styles/main.scss";

  .container_neon_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    #neon_logo {
      color: $neon-logo;
      display: inline-block;
      font-size: 50px;
      font-family: 'Raleway', serif;
      font-weight: normal;
      text-shadow: 0 0 30px #f0e291, 0 0 10px white;
      transition: opacity 0.5s;
      animation: neon 12s infinite linear;
    }
  }

  @keyframes neon {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    28% {
      opacity: 0.5;
    }
    29% {
      opacity: 0.5
    }
    42% {
      opacity: 1;
    }
    44% {
      opacity: 1;
    }
    49% {
      opacity: 0.5;
    }
    54% {
      opacity: 0.5;
    }
    55% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    88% {
      opacity: 0;
    }
    91% {
      opacity: 1
    }
    93% {
      opacity: 1
    }
    95% {
      opacity: 0
    }
    96% {
      opacity: 0
    }
    97% {
      opacity: 1
    }
    100% {
      opacity: 0;
    }
  }
</style>
