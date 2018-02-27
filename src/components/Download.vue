<template>
    <div class="container">
        <div class="ios">
            <img src="../assets/ios.png" width="150px" style="pointer-events: none" />
        </div>
        <div class="android">
            <img src="../assets/android.png" width="150px" style="pointer-events: none" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Download'
    }
</script>

<style scoped>
    .ios {
        display: inline-block;
    }

    .android {
        display: inline-block;
        margin-left: 1%;
    }
</style>