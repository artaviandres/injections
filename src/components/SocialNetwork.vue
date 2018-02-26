<template>
    <div class="footer">
        <a href="https://facebook.com/iAndrezx" target="_blank">
            <Icon>
                <icon name="facebook-square" scale="1.8" />
            </Icon>
        </a>
        <a href="https://instagram.com/artaviandres" target="_blank" class="margin">
            <Icon>
                <icon name="instagram" scale="1.8" />
            </Icon>
        </a>
        <a href="https://twitter.com/Artvavia" target="_blank" class="margin">
            <Icon>
                <icon name="twitter-square" scale="1.8" />
            </Icon>
        </a>
        <a href="https://www.linkedin.com/in/artaviandres/" target="_blank" class="margin">
            <Icon>
                <icon name="linkedin" scale="1.8" />
            </Icon>
        </a>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import 'vue-awesome/icons/facebook-square'
    import 'vue-awesome/icons/instagram'
    import 'vue-awesome/icons/twitter-square'
    import 'vue-awesome/icons/linkedin'

    export default {
        name: "SocialNetwork",
        components: {
            Icon
        }
    }
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 15%;
    }
    a {
        cursor: pointer;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
    }
    .margin {
        margin-left: 5%;
    }
</style>