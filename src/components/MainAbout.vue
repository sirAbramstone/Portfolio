<div class="h_text1">
  <div
    v-bind:class="myclass"
    v-on:mouseover="rubber"
    v-on:mouseleave="myclass='none'"
  >Hi,
  </div>
</div>
<div class="h_text2">
  <div>I'm Dmitry,</div>
</div>
<div class="h_text3">
  <div>web developer.</div>
</div>
<div class="h_smalltxt">
  <div>Frontend web developer / React / Vue / Angular JS</div>
</div>

<div v-for="text in texts">
  <div v-bind:class="myclass" v-on:mouseover="rubber" v-on:mouseleave="myclass='none'"></div>
</div>

