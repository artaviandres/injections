<template>
    <div class="container">
        <h1>Your personal assistant for the most <br /> important thing, Health.</h1>
        <Download />
        <img src="../assets/iphone8.png" class="iphone" />
        <img src="../assets/ipad.png" class="ipad" />
        <div class="web">
            <p>Want a web version?</p>
            <a>We got you!</a>
        </div>
    </div>
</template>

<script>
    import Download from './Download'

    export default {
        name: 'WelcomeBlock',
        components: {
            Download
        }
    }
</script>

<style scoped>
    .container {
        text-align: center;
    }

    h1 {
        font-size: 45px;
    }

    .iphone {
        position: absolute;
        left: -15vw;
        width: 1000px;
        top: 12vh;
        z-index: -100;
    }

    .ipad {
        position: absolute;
        top: 30vh;
        width: 1000px;
        left: 48vw;
        z-index: -100;
    }

    .web {
        z-index: 1000;
        margin-top: 49vh;
        line-height: 10px;
    }

    .web a {
        cursor: pointer;
    }

    .web a:hover {
        text-decoration: underline;
    }
</style>