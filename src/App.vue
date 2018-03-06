<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - PWA Challenge </router-link>
        </li>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
      </ul>
    </header>
    <main>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #ffffff;
  color: #000000;
  margin-top: -17px;
}

ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
  display: block;
  padding: 20px;
  font-size: 14px;
}
a:hover {
  color: #999999;
}
.brand {
  color: #000000;
}
</style>
