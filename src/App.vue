<template>
  <div id="app">
    <header class="header">
      <div class="left">
        <h1 class="title">coolors</h1>
      </div>
      <div class="right">
        <ul>
          <li>
            <a class="active" href="#">Generate</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
          <li>
            <span class="divider" />
          </li>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a class="block" style="line-height: normal;" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </header>
    <div class="content">
      <dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from './components/dashboard/Dashboard.vue';

export default {
  name: 'App',
  components: {
    "dashboard": Dashboard,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}

:root {
  --header-height: 56px;
  --link-primary: #000;
  --link-secondary: #64636981;
  --contrast: #06f;
  --contrast-25: rgba(0, 102, 255, 0.541);
}

div, header, a {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: var(--link-secondary);
}

a:hover {
  color: var(--contrast-25);
}

a.active {
  color: var(--contrast);

}

a.block {
  padding: 8px 8px !important;
  border-radius: 8px;
  background-color: var(--contrast);
  color: #fff;
  font-weight: bold;
}

h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}

.title {
  color: var(--contrast);
  font-weight: bold;
}

.divider {
  margin: 0 7px;
  width: 1px;
  height: 50%;
  display: block;
  position: relative;
  background-color: var(--link-secondary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: var(--header-height);
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}

.header .left, .header .right {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.header .right ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
}

.header .right ul li {
  display: inline;
  text-decoration: none;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.header .right ul li a {
  display: block;
  line-height: var(--header-height);
  padding: 0px 16px;
}

.header .right ul li a.active {
  border-bottom: 2px solid var(--contrast);
}

.content {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: var(--header-height);
  overflow-y: auto;
}
</style>
