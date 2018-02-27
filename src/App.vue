<template>
  <div id="app">
    <container>
      <grid>
        <grid-item size="12/12">
          <HeaderComponent />
          <WelcomeBlock />
        </grid-item>
      </grid>
    </container>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent'
  import WelcomeBlock from './components/WelcomeBlock'

  export default {
    name: 'app',
    components: {
      HeaderComponent,
      WelcomeBlock
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
    height: 92vh;
    margin-top: 4vh;
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 

  }
</style>
