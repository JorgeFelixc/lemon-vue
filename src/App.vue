<template>
<main class="row">
    <nav id="nav" class="column-left">
      <img class="logo-img" alt="Vue logo" src="./assets/logo.png">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <section class="wrapper-section">
      <router-view/>
    </section>
</main>
</template>

<style>

:root{
  --primary-color: #407edc;
}
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body{
  background-color:#1d1d1d;
}

.logo-img{
  margin: 32px auto;
  height: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}

#nav {
  background-color:#1d1d1d;
  width: 200px;
  min-height: 100vh;
}

.column-left{
  display:flex;
  flex-direction: column;
  align-items: flex-start;
}

#nav a {
  border-radius: 3px;
  width: 180px;
  font-size: 14px;
  text-decoration: none;
  padding:8px 8px;
  margin: 4px 8px;
  transition: 0.2s all;
  color:white;
  text-align: left;
}

#nav a:hover{
  background-color:rgba(0, 0, 0, 0.1);
}

#nav a.router-link-exact-active {

  background-color:  rgba(0, 0, 0, 0.5);
}

.row{
  display: flex;
  justify-content: stretch;
}

.wrapper-section{
  flex:auto;
  border-radius: 12px 0px 0px 12px;
  background-color:white;
  padding:18px;
  color:black;
}
</style>
