<template>
  <div id="preloader">
    <div class="loader">
      <span>{</span><span>}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Preloader'
  }
</script>

<style lang="scss">
  @import '../styles/main.scss';

  #preloader {
    position: absolute;
    left: 45%;
    top: 35%;
  }

  .loader {
    color: $icon;
    justify-self: center;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: $loader-size;
    align-self: center;
    opacity: 0.8;

    span {
      display: inline-block;
      animation: pulse 0.4s alternate infinite ease-in-out;

      &:nth-child(odd) {
        animation-delay: 0.4s;
      }
    }
  }

  @keyframes pulse {
    to {
      transform: scale(0.8);
      opacity: 0.5;
    }
  }
</style>
