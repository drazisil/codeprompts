<template>
  <section class="container green">
    <img src="~assets/img/coding.jpg" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      CodePrompts
    </h1>
    <h2 class="subtitle">
      Like Writing Prompts, but for Code
    </h2>
    <h3>
      <nuxt-link class="app app-title cyan" :to="{ name: 'id', params: { id: promptIndex }}">
        {{ users[promptIndex].name }}
      </nuxt-link>
    </h3>
    <button class="button" v-on:click="randomIndex">Get Another</button>
    <p>There are a total of {{ users.length }} prompts.</p>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data () {
    return {
      promptIndex: 0
    }
  },
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  methods: {
    randomIndex () {
      this.promptIndex = Math.floor(Math.random() * Math.floor(this.users.length))
    }
  },
  head () {
    return {
      title: 'CodePrompts'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
