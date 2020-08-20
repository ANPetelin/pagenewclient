<template>
  <div class="container">
    <h2>Данные документа удостоверяющего личность</h2>
    <router-link to="/" class="link">На главную</router-link>
    <p class="smallText"><sup>*</sup>Поля обязательные для заполнения</p>
    <div class="button" @click="saveAndReturn">Сохранить данные</div>
    <hr />
    <p>Укажите тип документа<sup>*</sup></p>
    <div class="classicField">
      <select v-model="typeDocument" :class="{invalid: (!$v.typeDocument.required && $v.typeDocument.$dirty)}">
        <option>Паспорт</option>
        <option>Свидетельство о рождении</option>
        <option>Вод. удостоверение</option>
      </select>
      <br />
    </div>
    <small v-if="(!$v.typeDocument.required && $v.typeDocument.$dirty)">Выберите тип документа</small>
    <small v-else></small>
    <p>Серия</p>
    <input type="classicField" class="classicField" v-model="series" />
    <br />
    <small></small>
    <p>Номер</p>
    <input
      type="number"
      class="classicField"
      :class="{invalid: (!$v.numberDocument.numeri)}"
      v-model.trim="numberDocument" />
    <br />
    <small
      v-if="$v.numberDocument.$dirty && !$v.numberDocument.numeric"
    >Ведите корректный номер документа</small>
    <small v-else></small>
    <p>Кем выдан</p>
    <input type="classicField" class="classicField" v-model="issuedBy" />
    <br />
    <small></small>
    <p>Дата выдачи<sup>*</sup></p>
    <input
      type="date"
      class="classicField data"
      :class="{invalid: (!$v.dateOfIssue.required && $v.dateOfIssue.$dirty)}"
      v-model="dateOfIssue" />
    <br />
    <small v-if="$v.dateOfIssue.$dirty && !$v.dateOfIssue.required ">Укажите дату выдачи документа</small>
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
  name: "Basicdata",
  data: () => ({
    typeDocument: null,
    series: null,
    numberDocument: null,    
    issuedBy: null,    
    dateOfIssue: null
  }),
  validations: {
    typeDocument: {
      required,
    },
    dateOfIssue: {
      required,
    },
    numberDocument: {
      numeric,
    }
  },
  methods: {
    saveAndReturn() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      let passportClient = {
        typeDocument: this.typeDocument,
        series: this.series,
        numberDocument: this.numberDocument,    
        issuedBy: this.issuedBy,    
        dateOfIssue: this.dateOfIssue
      };
      this.$emit('changeDataOfNewClient', passportClient, 'passport');
      this.$router.push("/");
    }
  },
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
select {
  background: white;
  width: 380px;
  border: 0px;
  font-size: 18px;
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
  margin-top: 370px;
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
