<template>
  <div id="app">
    <blockquote v-on:click="displayQuote()">
      <p>{{currentQuote.content}}</p>
      <footer>
        — <cite>{{currentQuote.author}}</cite>
      </footer>
    </blockquote>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        currentQuote: {},
        quotes: [
          {
            content: "Overcoming fear and conceiving this 'art of more' should be a fundamental practice in what it is that you do and make.",
            author: "Chase Jarvis"
          },
          {
            content: "As everything in this world is but a sham, Death is the only sincerity",
            author: "Yamamoto Tsunetomo"
          },
          {
            content: "The world needs actual excitement and emotion more than it needs cool people.",
            author: "Amanda Palmer"
          }
        ]
      }
    },
    created: function() {
      this.displayQuote();
    },
    methods: {
      displayQuote: function(){
        var randomInt = Math.floor(Math.random() * (this.quotes.length - 0));
        this.currentQuote = this.quotes[randomInt];
      }
    }
  }
</script>
