<template>
  <footer class="credits">
    {{ version }} Created with Nuxt : <a class="orange" href="https://nuxtjs.org" target="_blank">nuxtjs.org</a>
  </footer>
</template>

<script>
import config from '../package.json'

export default {
  data () {
    return {
      version: config.version
    }
  }
}
</script>