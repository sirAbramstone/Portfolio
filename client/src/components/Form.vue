<template>
  <form id="formId" class="form fadeIn" method="post" action="https://formspree.io/golovsha@gmail.com">
    <!--//todo add styles-->
    <div class="in_wrap">
      <input type="text" class="in animated fadeInDown" placeholder="Name" name="name">
      <input type="text" class="in animated fadeInDown" placeholder="Email" name="email">
    </div>
    <input type="text" class="in animated fadeInDown" placeholder="Subject" name="subject">
    <textarea name="textarea" id="txtarea" cols="30" rows="10"></textarea>
    <Button btn_msg="send" type="submit"></Button>
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
  #formId {
    display: flex;

    #txtarea, .in {
      width: 100%;
      border: 0;
      box-sizing: border-box;
      background: #37393b;
      margin-bottom: 10px;
    }
    .in {
      height: 50px;
      padding: 0 20px;
    }
    .in_wrap {
      display: flex;
    }
    .in:first-child {
      margin-right: 10px;
    }
  }
</style>
