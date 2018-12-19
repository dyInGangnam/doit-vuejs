<template>
  <div class="hello">
    <h1>{{ msg }} {{ name }}</h1>
    <router-link to="/hello2">/hello2</router-link>
    <router-link to="/hello3">/hello3</router-link>
    <router-link to="/hello4">/hello4</router-link>
    <router-link to="/hello5">/hello5</router-link>
    <router-link to="/home">/home</router-link>
    <ul>
      <li><router-link to="/hello/you">/hello/you</router-link></li>
      <li><router-link to="/static">/static</router-link></li>
      <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
      <li><router-link to="/attrs">/attrs</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello2.vue'
    }
  },
  props: {
    name: {
      type: String,
      default: 'Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
