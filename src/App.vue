<template>
  <div id="app">
    <div class="mockups_container">
      <img src="./assets/iPhoneX.png" class="mockups iphone" />
      <img src="./assets/samsungS8.png" class="mockups samsung" />
    </div>
    <div class="info_container">
      <div class="logo_container">
        <img src="./assets/logo_beta.png" class="logo" />
        <h1>Helpjection</h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec dignissim est. Maecenas eleifend diam leo, vel vehicula nisl ullamcorper vel. Donec id massa et odio laoreet venenatis. Donec interdum sed nibh eget lobortis. Quisque commodo commodo egestas. Integer efficitur felis turpis, non efficitur quam suscipit vel. Ut a nunc finibus, tempor dolor sed, efficitur quam.</p>
      <div class="download">
        <img src="./assets/ios.png" class="ios" />
        <img src="./assets/android.png" class="android" />
    </div>
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
    color: #2c3e50;
    display: inline-block;
    width: 100%;
  }

  p {
    margin-top: 100px;
    padding: 0 50px;
  }

  .mockups_container {
    width: 50%;
    float: left;
  }

  .info_container {
    width: 50%;
    float: left;
    text-align: center;
    padding-top: 150px;
  }

  .download {
    width: 100%;
    display: inline-block;
    position: absolute;
    bottom: 60px;
    left: 350px;
  }

  .ios {
    width: 140px;
  }

  .android {
    width: 140px;
    margin-left: 3%;
  }

  .logo_container {
    margin: 0 auto;
    width: 300px;
    height: 100px;
  }

  .logo {
    width: 100px;
    float: left;
  }

  h1 {
    margin-top: 26px;
    float: left;
  }

  .mockups {
    width: 1000px;
  }

  .iphone {
    margin-left: -250px;
    z-index: 100;
    animation: effect 2s 1s infinite linear;
  }

  .samsung {
    position: absolute;
    top: 10vh;
    z-index: -100;
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
