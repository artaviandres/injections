<template>
    <div class="container">
        <grid>
            <grid-item size="4/12">
                <img src="../assets/logo_beta.png" style="pointer-events: none" />
                <h3>Helpjection</h3>
            </grid-item>
            <grid-item size="2/12" />
            <grid-item size="6/12">
                <div class="menu_options">
                    <a>perks</a>
                    <a class="margin">contact</a>
                </div>
            </grid-item>
        </grid>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style scoped>
    .container {
        width: 70%;
        height: 85px;
        line-height: 85px;
        margin: 0 auto;
    }

    .margin {
        margin-left: 20%;
    }

    a {
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        width: 80px;
        float: left;
    }

    h3 {
        float: left;
        margin-top: 0;
        margin-left: 5px;
        font-size: 34px;
    }

    .menu_options {
        /* padding-right: 25px; */
        margin-left: 50%;
    }
</style>