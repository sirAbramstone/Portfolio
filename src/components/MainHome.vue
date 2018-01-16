<template>
  <nav>
  <li v-for="icon in icons"><a v-bind:href="{{ icon.href }}"><span></span></a></li>
  </nav>
</template>
<script>
  const icons = [
    {href: 'google.com'},
    {href: 'yandex.ru'},
    {href: 'mail.ru'}
  ]
</script>
