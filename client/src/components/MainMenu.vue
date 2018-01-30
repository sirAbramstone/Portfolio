<template>
  <div id="main-menu">
    <div class="wrap-menu">
      <div class="logo">
        <a href="https://www.google.ru/"></a>
      </div>
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
  export default {
    name: 'Menu',
    data () {
      return {
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
    }
  }
</script>

<style lang="scss">
@import "../styles/main";

  a {
    text-decoration: none;
  }

  .wrap-menu {
    width: 60px;
    background-color: $menu-bg;
    height: $height;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
