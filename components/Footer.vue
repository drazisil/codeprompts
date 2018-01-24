<template>
  <footer class="credits">
    <span class="version">{{ version }}</span><span>Created with Nuxt : <a class="orange" href="https://nuxtjs.org" target="_blank">nuxtjs.org</a></span>
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