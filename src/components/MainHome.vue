<template>
  <div class="wrap_home">
    <div class="home_content">
      <div class="h_text1"><span>Hi,</span></div>
      <div class="h_text2"><span>I'm Dmitry,</span></div>
      <div class="h_text3"><span>web developer.</span></div>
      <div class="h_smalltxt"><span>Frontend web developer / React / Vue / Angular JS</span></div>
      <button>contact me</button>
    </div>
  </div>
</template>

<style lang="scss">
  .wrap_home {
    background-color: #252627;
    width: 100%;
    display: flex;

      .home_content {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;

          & span {
            font-size: 54px;
          }
          .h_smalltxt span{
            font-size: 14px;
          }
          & button {
            background-color: #252627;
          }
      }
  }
</style>
