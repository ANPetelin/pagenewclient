<template>
  <div class="container">
    <h2>Адрес проживания</h2>
    <router-link to="/" class="link">На главную</router-link>
    <p class="smallText"><sup>*</sup>Поля обязательные для заполнения</p>
    <div class="button" @click="saveAndReturn">Сохранить данные</div>
    <hr />
    <p>Индекс</p>
    <input
      type="number"
      class="classicField"
      :class="{invalid: !$v.index.numeri}"
      v-model.trim="index" />
    <br />
    <small
      v-if="!$v.index.numeric"
    >Ведите корректный индекс</small>
    <small v-else></small>
    <p>Страна</p>
    <input type="classicField" class="classicField" v-model="country" />
    <br />
    <small></small>
    <p>Область</p>
    <input type="classicField" class="classicField" v-model="region" />
    <br />
    <small></small>
    <p>Город<sup>*</sup></p>
    <input
      type="classicField" class="classicField"
      :class="{invalid: (!$v.city.required && $v.city.$dirty)}"
      v-model="city"
    />
    <br />
    <small v-if="$v.city.$dirty && !$v.city.required ">Укажите город своего проживания</small>
    <br />
    <p>Улица</p>
    <input type="classicField" class="classicField" v-model="street" />
    <br />
    <small></small>
    <p>Номер дома</p>
    <input type="classicField" class="classicField" v-model="house" />
    <br />
  </div>
</template>

<script>
import {
  required,
  numeric,
} from "vuelidate/lib/validators";

export default {
  props: ['newClient'],
  name: "Address",
  data: () => ({
    index: null,
    country: null,
    region: null,
    city: null,
    street: null,
    house: null
  }),
  validations: {
    city: {
      required,
    },
    index: {
      numeric,
    }
  },
  methods: {
    saveAndReturn() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      let addressClient = {
        index: this.index,
        country: this.country,
        region: this.region,
        city: this.city,
        street: this.street,
        house: this.house
      };
      this.$emit('changeDataOfNewClient', addressClient, 'address');
      this.$router.push("/");
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if(this.newClient.address) {
        this.index = this.newClient.address.index;
        this.country = this.newClient.address.country;
        this.region = this.newClient.address.region;
        this.city = this.newClient.address.city;
        this.street = this.newClient.address.street;
        this.house = this.newClient.address.house;
      }
    })
  }
};
</script>

<style scoped>
.smallText {
  font-size: 12px;
}
sup {
  background: white;
}
* {
  font-family: Arial, Helvetica, sans-serif;
}
p {
  margin: 0;
  padding: 0;
  margin-left: 15px;
  margin-top: 5px;
  font-size: 16px;
  background: white;
  font-weight: bold;
}
input {
  margin: 0;
  padding: 0;
  margin-right: 10px;
}
.container {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 50px;
  background: white;
  border-radius: 10px;
}
h2 {
  background: white;
  text-align: center;
  padding-top: 5px;
}

.classicField {
  width: 400px;
  height: 40px;
  background: #ffffff;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  color: rgba(31, 32, 65, 0.75);
  outline: none;
  padding: 5px 10px;
  margin: 0;
  margin-left: 10px;
  font-size: 20px;
}

small {
  margin-left: 10px;
  background: white;
  color: red;
}

.classicField:focus,
.classicField:hover {
  border: 1px solid rgba(31, 32, 65, 0.5);
  color: black;
}
.button {
  margin-top: 420px;
  margin-right: -50px;
  font-style: normal;
  font-weight: bold;
  padding: 10px 20px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 17px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1px;
  text-rendering: optimizeLegibility;
  float: right;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  color: white;
}
.button:active {
  padding: 8px 18px;
  color: #bc9cff;
  border: solid 2px transparent;
  box-shadow: 2px 1000px 1px #fff inset;
  background-origin: border-box;
}

.link {
    padding: 0;
    margin: 0 15px;
    display: block;
    height: 18px;
    float: right;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;  
    letter-spacing: 1px;
    color: rgba(31, 32, 65, 0.5);
    background: white;
}

.link:hover { 
    font-weight: bold;
    letter-spacing: 0.4px;
    color: rgba(31, 32, 65, 0.75);
}
</style>
