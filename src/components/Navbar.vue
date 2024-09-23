<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
nav {
  background-color: #7b573e;
  padding: 10px;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  font-weight: bold;
}
</style>

