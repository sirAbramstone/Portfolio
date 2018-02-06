<template>
  <div id="main-menu">
    <div class="wrap_menu">
      <div class="logo">
        <neon-logo></neon-logo>
      </div>

      <button class="navbar_hamburger"
              type="button"
              v-on:click="seen = !seen"
              data-toggle="collapse"
              data-target="toggle_navigation"
              aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <nav class="toggle_navigation" v-if="seen">
        <li v-for="(item, index) of items" :key="index">
          <router-link v-bind:to="item">
            <span v-bind:class="[lnr, icon, lnrVar[index]]"></span>
          </router-link>
        </li>
      </nav>

      <nav class="navigation">
        <li v-for="(item, index) of items" :key="index">
          <router-link v-bind:to="item">
            <span v-bind:class="[lnr, icon, lnrVar[index]]"></span>
          </router-link>
        </li>
      </nav>
      <nav class="social">
        <li v-for="(icon, index) of icons" :key="index">
          <a v-bind:href="icon">
            <i v-bind:class="[fab,
          fabVar[index]]"></i>
          </a>
        </li>
      </nav>
    </div>
  </div>

</template>

<script>

  import NeonLogo from './NeonLogo.vue';

  export default {
    name: 'Menu',
    data() {
      return {
        seen: false,

        items: [
          '/',
          '/skills',
          '/about',
          '/work',
          '/contact'
        ],
        lnr: 'lnr',
        icon: 'icon',
        lnrVar: [
          'lnr-home',
          'lnr-code',
          'lnr-user',
          'lnr-layers',
          'lnr-envelope'
        ],
        icons: [
          'www.google.com',
          'www.yandex.ru',
          'www.mail.ru',
          'www.facebook.com'
        ],
        fab: 'fab',
        fabVar: [
          'fa-git',
          'fa-skype',
          'fa-vk',
          'fa-telegram-plane'
        ]
      }
    },
    components: {
      NeonLogo,
      'neon-logo': NeonLogo
    },
  }
</script>

<style lang="scss">
  @import "../styles/main";

  a {
    text-decoration: none;
  }

  .wrap_menu {
    width: 60px;
    background-color: $menu-bg;
    height: $height;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .navbar_hamburger {
    display: none;
    margin-right: 2%;
    margin-left: auto;
    font-size: 2rem;
    color: $acid;
    background-color: transparent;
    border: none;
    :hover {
      color: $neon-logo;
    }
  }

  .toggle_navigation {
    display: none;
    justify-content: space-around;
    align-items: center;
    top: 60px;
    height: 60px;
    width: 100%;
    order: 999;
    background-color: $menu-bg;
  }

  .logo {
    width: 100%;
    height: 80px;
    background-color: black;
  }

  .icon {
    color: $icon;
    font-weight: 100;
    font-size: 30px;
  }

  .navigation {
    @include flex-box;

    & li {
      margin-bottom: 15px;
      span {
        opacity: $opacity;
      }
    }
  }

  .social {
    @include flex-box;
    padding-bottom: 10px;

    & li {
      font-size: 1.25em;
      opacity: $opacity;
      margin-top: 5px;

      & a {
        color: $icon;
      }
    }
  }

</style>
