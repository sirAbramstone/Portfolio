<template>
  <form id="formId" class="form fadeIn" method="post" action="https://formspree.io/golovsha@gmail.com">
    <div class="in_wrap">
      <input type="text" id="in_1" class="in animated fadeInDown" placeholder="Name" name="name">
      <!--<label for="in_1" class="lab_in1"></label>-->
      <input type="text" id="in_2" class="in animated fadeInDown" placeholder="Email" name="email">
      <!--<label for="in_3" class="lab_in2"></label>-->
    </div>
    <input type="text" id="in_3" class="in animated fadeInDown" placeholder="Subject" name="subject">
    <!--<label for="in_3" class="lab_in3"></label>-->
    <textarea name="textarea" id="txtarea" cols="30" rows="10" title="your question"></textarea>
    <Button btn_msg="send message" type="submit"></Button>
  </form>
</template>

<script>
  import Button from './Button';

  export default {
    name: 'Form',
    components: {
      'Button': Button
    }
  }
</script>

<style lang="scss">
  @import "../styles/main";

  #formId {
    display: flex;
    position: relative;
    max-width: 800px;
    height: $height;
    align-items: flex-end;

    #txtarea, .in {
      width: 100%;
      border: 0;
      box-sizing: border-box;
      background: #37393b;
      margin-bottom: 10px;
      font-size: 16px;
      color: #8d8d8d;
    }
    .in {
      height: 50px;
      padding: 0 20px;
    }
    .in:focus, #txtarea:focus {
      outline: 0;
    }
    .in_wrap {
      display: flex;
      max-width: 100%;
      min-width: 600px;
    }
    .in:first-child {
      margin-right: 10px;
    }
    #txtarea {
      margin-bottom: 25px;
    }
  }

  /*focus elements animation*/
  .lab_in1, .lab_in2, .lab_in3 {
    height: 5px;
    width: 100%;
    background: $acid;
  }
</style>
