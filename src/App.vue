<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newClient: {basic: {name: null, surname: null, patronymic: null, birthdate: null, 
                  numberPhone: null, gender: null, clientGroups: [], attendingDoctor: null, sms: null}, 
      addres:{}, passport:{}}
    };
  },
};
</script>

<style>
* {
  background: rgb(218, 216, 216);
}
#app {
  width: 1160px;
  margin: 0 auto;
}
</style>
