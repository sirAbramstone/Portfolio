<template>
  <div id="main-menu">
    <div class="wrap-menu">
      <div class="logo">
        <a href="https://www.google.ru/"></a>
      </div>
      <nav class="navigation">
        <li v-for="(item, index) of items">
          <a v-bind:href="item">
            <span v-bind:class="[lnr, icon, lnrVar[index]]"></span>
          </a>
        </li>
      </nav>
      <nav class="social">
      <li v-for="(icon, index) of icons">
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
    data () {
      return {
        items: [
          'www.google.com',
          'yandex.ru',
          'mail.ru',
          'facebook.com',
          'yahoo.com'
        ],
        lnr: 'lnr',
        icon: 'icon',
        lnrVar: [
          'lnr-home',
          'lnr-layers',
          'lnr-code',
          'lnr-user',
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
  a {
    text-decoration: none;
  }

  .wrap-menu {
    width: 60px;
    background-color: #2D3B40;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & li {
      margin-bottom: 15px;
        span {
          opacity: .6;
        }
    }
  }

  .logo {
    width: 100%;
    height: 80px;
    background-color: black;
  }

  .icon {
    color: #86B0BF;
    font-weight: 100;
    font-size: 30px;
  }

  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 10px;

    & li {
      font-size: 1.25em;
      opacity: .6;
      margin-top: 5px;

      & a {
      color: #86B0BF;
      }
    } 
  }

</style>
