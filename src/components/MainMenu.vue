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

  .icon {
    color: #86B0BF;
    font-weight: 100;
    font-size: 30px;
  }

</style>
