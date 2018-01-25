<template>
  <div class="wrap_home">
    <main-menu></main-menu>

    <div class="home_content">
      <div class="wrap_home_content_text">

        <div class="blast-root" v-html="fullText">
          
        </div>

        <div class="home_content_text_small str">React / Vue / And many other stuff</div>
      </div>

      <Button v-bind:class="btnCls" btn_msg="contact me"></Button>
    </div>
    <neon></neon>
  </div>
</template>

<script>

  import MainMenu from './MainMenu';
  import NeonBg from './NeonBg';
  import Button from './Button';
  
  export default {
    name: 'Home',

    data () {
      return {
        myclass: 'none',
        btnCls: {
          button: true,
          btn_home: true
        },
        fullText: "Hi, <br>I'm Danil, <br>web developer",
        texts: [
          'Hi,',
          'I`m Danil,',
          'web developer.'
        ]
      }
    },

    components: {
      'main-menu': MainMenu,
      'neon': NeonBg,
      'Button': Button
    },

    mounted () {
    
      $(".blast-root").blast({
        delimiter: "character",
        tag: "span"
      })

      let a = 0

      $(".blast-root .blast").each(function () {
        if (a==300) a = 400
        if (a==1100) a = 1200
        if (a==400) {
          setTimeout(function () {
            $(".blast-root h1 img").addClass('animation-logo')
          }, 800);
        }

        let el = $(this)

        setTimeout(function () {
          el.addClass('animated bounceIn')
        }, a)

        if (a < 1200) {
          a = a + 100
        } else {
          a = a + 80
        }
      });

      setTimeout(() => {
        $(".blast-root .blast").removeClass('animated bounceIn')
        $(".blast-root .blast").css('opacity', 1)
        $(".blast-root .blast").mouseenter(function () {
          var el = $(this)
          $(this).addClass('animated rubberBand')
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            el.removeClass('animated rubberBand')
          })
        })
      }, 3000)
    }
  }
</script>

<style lang="scss">
  @import "../styles/main.scss";

  .wrap_home {
    background: $gradient;
    width: 100%;
    display: flex;

      .home_content {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;
        .blast-root {
          word-spacing: 10px;
        }
        .blast {
          display: inline-block;
          font-size: $font-size-large;
          line-height: 1em;
          font-family:'Raleway';
          transition: all .3s ease-out;
          opacity: 0;

          &:nth-child(2) .char:nth-child(4), &:nth-child(3) .char:nth-child(4) {
            padding-left: 15px;
          }
        }
        .home_content_text_small {
          font-size: $font-size-small;
          font-family: 'Open Sans', sans-serif;
          color: $icon;
          margin-top: 10px;
          margin-bottom: 30px;
          letter-spacing: 0.1em;
        }
      }
    .char {
      display: inline-block;
      transition: transform 1s ease-in-out;
      font-family:'Raleway';

      &:hover {
        animation-name: rubberBand;
        animation-duration: 1.6s;
        animation-fill-mode: both;
        color: $acid;
      }
    }
  }

  .item-enter-active, .item-leave-active {
    transition: opacity .03s;
  }

  .item-enter, .item-leave-to {
    opacity: 0;
  }

</style>
