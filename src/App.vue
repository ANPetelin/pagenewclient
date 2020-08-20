<template>
  <div id="app">
    <router-view
    :newClient="newClient"
    :basic="basic"
    :address="address"
    :passport="passport"
    @changeDataOfNewClient="changeDataOfNewClient"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newClient: {basic: null, address: null, passport: null},
      basic: false,
      address: false,
      passport: false
    };
  },
  methods: {
    changeDataOfNewClient(data, key) {
      switch (key) {
        case 'basic':
          this.newClient.basic = data;
          this.basic = true;
          break;
        case 'address':
          this.newClient.address = data;
          this.address = true;
          break;
        case 'passport':
          this.newClient.passport = data;
          this.passport = true;
          break;
        default:
          break;
      }
    }
  }
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
