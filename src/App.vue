<template>
  <div id="app">
    <img src="./assets/logo_beta.png" class="logo" />
    <!-- <img src="./assets/Mockup_plantitaugh.png" class="mockups"> -->
    <img src="./assets/iPhoneX.png" class="mockups iphone" />
    <img src="./assets/samsungS8.png" class="mockups samsung" />
    <div class="download">
      <img src="./assets/ios.png" class="ios" />
      <img src="./assets/android.png" class="android" />
    </div>
    <!-- <SocialNetwork /> -->
  </div>
</template>

<script>
import SocialNetwork from './components/SocialNetwork';

export default {
  name: 'app',
  components: {
    SocialNetwork
  }
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .download {
    width: 100%;
    display: inline-block;
  }

  .ios {
    width: 140px;
  }

  .android {
    width: 140px;
  }

  .logo {
    width: 100px;
  }

  .mockups {
    width: 90%;
    position: absolute;
  }

  .iphone {
    left: 0;
    z-index: 100;
    top: 20vh;
    animation: effect 2s 1s infinite linear;
  }

  .samsung {
    left: 20vw;
    top: 30vh;
    animation: effect 2s 1s infinite linear;
  }

  @keyframes effect {
    0%, 100% {
      transform:translateY(0);
    }
    40% {
      transform:translateY(-15px);
    }
  }
</style>
