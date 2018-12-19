<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/hello2">/hello2</router-link>
    <router-link to="/hello3">/hello3</router-link>
    <router-link to="/hello4">/hello4</router-link>
    <router-link to="/hello5">/hello5</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello3.vue'
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
