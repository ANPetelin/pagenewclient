<template>
  <div class="container">
    <h2>Общие данные</h2>
    <router-link to="/" class="link">На главную</router-link>
    <p class="smallText"><sup>*</sup>Поля обязательные для заполнения</p>
    <div class="button" @click="saveAndReturn">Сохранить данные</div>
    <hr />
    <p>Фамилия<sup>*</sup></p>
    <input
      type="classicField"
      class="classicField"
      :class="{invalid: (!$v.surname.required && $v.surname.$dirty)}"
      v-model="surname"
    />
    <br />
    <small v-if="$v.surname.$dirty && !$v.surname.required ">Укажите свою фамилию</small>
    <br />
    <p>Имя<sup>*</sup></p>
    <input
      type="classicField"
      class="classicField"
      :class="{invalid: (!$v.name.required && $v.name.$dirty)}"
      v-model="name"
    />
    <br />
    <small v-if="$v.name.$dirty && !$v.name.required ">Укажите свое имя</small>
    <br />
    <p>Отчество</p>
    <input type="classicField" class="classicField" v-model="patronymic" />
    <br />
    <small></small>
    <p>Дата рождения<sup>*</sup></p>
    <input
      type="date"
      class="classicField data"
      :class="{invalid: (!$v.birthdate.required && $v.birthdate.$dirty)}"
      v-model="birthdate"
    />
    <br />
    <small v-if="$v.birthdate.$dirty && !$v.birthdate.required ">Укажите дату своего рождения</small>
    <br />
    <p>Номер телефона<sup>*</sup></p>
    <input
      type="number"
      class="classicField"
      :class="{invalid: (!$v.numberPhone.required && 
                             !$v.numberPhone.maxLength && 
                             !$v.numberPhone.minLength && 
                             !$v.numberPhone.numeri)}"
      v-model.trim="numberPhone"
    />
    <br />
    <small
      v-if="$v.numberPhone.$dirty && 
                      (!$v.numberPhone.required || 
                      !$v.numberPhone.maxLength || 
                      !$v.numberPhone.minLength || 
                      !$v.numberPhone.numeric || 
                      numberPhoneStartWithSeven(numberPhone))"
    >Ведите корректный номер телефона</small>
    <small v-else></small>
    <p>Укажите ваш пол</p>
    <div class="radiobutton">
      <input type="radio" id="one" value="мужской" v-model="gender" />
      <label for="one">Мужской</label>
      <input type="radio" id="two" value="женский" v-model="gender" />
      <label for="two">Женский</label>
    </div>
    <p>Выберите свои группы<sup>*</sup></p>
    <div class="c-filter">
      <button class="c-filter toggle" @click="clickCheckBox">{{clientGroups[0]}} {{clientGroups[1]}} {{clientGroups[2]}}</button>
      <ul class="c-filter ul" :class="active">
        <li class="c-filter item">
          <input type="checkbox" id="1" class="multi"  value="VIP" :class="{invalid: (!$v.clientGroups.required && $v.clientGroups.$dirty)}" v-model="clientGroups"/>
          <label tabindex="-1" for="1" class="multi" >VIP</label>
        </li>
        <li class="c-filter item">
          <input type="checkbox" id="2" class="multi" value="Проблемные" v-model="clientGroups"/>
          <label tabindex="-1" for="2" class="multi">Проблемные</label>
        </li>
        <li class="c-filter item">
          <input type="checkbox" id="3" checked class="multi" value="ОМС" v-model="clientGroups"/>
          <label tabindex="-1" for="3" class="multi">ОМС</label>
        </li>
      </ul>
    </div>  
    <p>Выберите лечащего врача</p>
    <div class="classicField">
      <select v-model="attendingDoctor">
        <option>Иванов</option>
        <option>Захаров</option>
        <option>Чернышева</option>
      </select>
      <br />
    </div>
    <small></small>
    <div class="radiobutton">
      <input type="checkbox" v-model="sms" true-value="да" false-value="нет" id="sms" />
      <label for="ОМС">Уведомление по СМС</label>
      <br />
    </div>    
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  props: ['newClient'],
  name: "Basicdata",
  data: () => ({
    name: null,
    surname: null,
    patronymic: null,
    birthdate: null,
    numberPhone: 7,
    gender: null,
    clientGroups: [],
    attendingDoctor: null,
    sms: null,
    onClick: false,
    active: ''
  }),
  validations: {
    name: {
      required,
    },
    surname: {
      required,
    },
    birthdate: {
      required,
    },
    numberPhone: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
      numeric,
    },
    clientGroups: {
      required,
    },
  },
  methods: {
    clickCheckBox() {
      console.log(this.onClick)
      if(this.onClick) {
        this.active = '';
        this.onClick = !this.onClick;
      }
      else {
        this.active = 'active'
        this.onClick = !this.onClick;
      }
    },
    numberPhoneStartWithSeven(num) {
      return +String(num).split("")[0] !== 7;
    },
    saveAndReturn() {
      if (this.$v.$invalid || this.numberPhoneStartWithSeven(this.numberPhone)) {
        this.$v.$touch();
        return;
      }
      let dataClient = {
        name: this.name,
        surname: this.surname,
        patronymic: this.patronymic,
        birthdate: this.birthdate,
        numberPhone: this.numberPhone,
        gender: this.gender,
        clientGroups: this.clientGroups,
        attendingDoctor: this.attendingDoctor,
        sms: this.sms
      };
      this.$emit('changeDataOfNewClient', dataClient, 'basic');
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
.none {
  display: none;
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
label {
  margin-right: 30px;
  background: white;
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
  margin-top: 700px;
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

.radiobutton {
  width: 400px;
  height: 40px;
  background: #ffffff;
  box-sizing: border-box;
  color: rgba(31, 32, 65, 0.75);
  font-size: 20px;
  padding: 5px 10px;
  margin-left: 10px;
  height: 60px;
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

.c-filter {
  position:relative;
  background-color: transparent;
}
.toggle {
    position: relative;
    width: 400px;
    height: 40px;
    border:0;
    border-radius:4px;    
    border: 1px solid rgba(31, 32, 65, 0.25);    
    color: rgba(31, 32, 65, 0.75);
    font-size: 20px;
}
.toggle::before {
    position: absolute;
    left: 380px;
    top: 18px;
    width: 7px;
    height: 1.5px;
    background-color: rgba(31, 32, 65);
    content: '';
    display: block;
    transform: rotate(-45deg);
}

.toggle::after {
    position: absolute;
    left: 376px;
    top: 18px;
    width: 7px;
    height: 1.5px;
    background-color: rgba(31, 32, 65);
    content: '';
    display: block;
    transform: rotate(45deg);
}
.ul {
    padding:0;
    border-radius:4px;
    border: 1px solid rgba(31, 32, 65, 0.25);
    position:absolute;
    display:none;
    margin:0;
    background-color: white;
}    
.active {
      display:block;
    }
.item {
    list-style:none;
    display:block;
    color: rgba(31, 32, 65, 0.75);
    font-size: 20px;
    padding: 5px 10px;
    margin-left: 10px;
}   
</style>
