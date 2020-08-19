<template>
  <div>
    <h1>Страница регистрации</h1>
    <ul>
      <li><router-link to="/address">Address</router-link></li>
      <li><router-link to="/basicdata">Basicdata</router-link></li>
      <li><router-link to="/passport">Passport</router-link></li>
    </ul>    
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
