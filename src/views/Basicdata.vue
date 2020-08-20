<template>
  <div class="container">
    <h2>Общие данные</h2>
    <div class="button" @click="saveAndReturn">Сохранить данные</div>
    <hr />
    <p>Фамилия</p>
    <input
      type="classicField"
      class="classicField"
      :class="{invalid: (!$v.surname.required && $v.surname.$dirty)}"
      v-model="surname"
    />
    <br />
    <small v-if="$v.surname.$dirty && !$v.surname.required ">Укажите свою фамилию</small>
    <br />
    <p>Имя</p>
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
    <p>Дата рождения</p>
    <input
      type="date"
      class="classicField data"
      :class="{invalid: (!$v.birthdate.required && $v.birthdate.$dirty)}"
      v-model="birthdate"
    />
    <br />
    <small v-if="$v.birthdate.$dirty && !$v.birthdate.required ">Укажите дату своего рождения</small>
    <br />
    <p>Номер телефона</p>
    <input
      type="classicField"
      class="classicField"
      :class="{invalid: (!$v.numberPhone.required && 
                             !$v.numberPhone.maxLength && 
                             !$v.numberPhone.minLength && 
                             !$v.numberPhone.numeric && 
                             numberPhoneStartWithSeven(numberPhone))}"
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
    <p></p>
    <p>Укажите ваш пол</p>
    <div class="radiobutton">
      <input type="radio" id="one" value="мужской" v-model="gender" />
      <label for="one">Мужской</label>
      <input type="radio" id="two" value="женский" v-model="gender" />
      <label for="two">Женский</label>
    </div>
    <p>Выберите свои группы</p>
    <small v-if="$v.clientGroups.$dirty && !$v.clientGroups.required ">Выберите свои группы</small>
    <div class="radiobutton">
      <input type="checkbox" id="VIP" value="VIP" v-model="clientGroups" />
      <label for="VIP">VIP</label>
      <input type="checkbox" id="Проблемные" value="Проблемные" v-model="clientGroups" />
      <label for="Проблемные">Проблемные</label>
      <input type="checkbox" id="ОМС" value="ОМС" v-model="clientGroups" />
      <label for="ОМС">ОМС</label>
    </div>
    <div class="c-filter">
      <button class="c-filter__toggle">Проблемные, ОМС</button>
      <ul class="c-filter__ul">
        <li class="c-filter__item">
          <input type="checkbox" id="1" class="multi"/>
          <label tabindex="-1" for="1" class="multi">VIP</label>
        </li>
        <li class="c-filter__item">
          <input type="checkbox" id="2" class="multi"/>
          <label tabindex="-1" for="2" class="multi">Проблемные</label>
        </li>
        <li class="c-filter__item">
          <input type="checkbox" id="3" checked class="multi"/>
          <label tabindex="-1" for="3" class="multi">ОМС</label>
        </li>
      </ul>
    </div>
    <input
      class="none"
      :class="{invalid: (!$v.clientGroups.required && $v.clientGroups.$dirty)}"
      v-model="clientGroups"
    />
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

<router-link to="/" class="button">Сохранить данные</router-link>

<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";

export default {
  name: "Basicdata",
  data: () => ({
    name: null,
    surname: null,
    patronymic: null,
    birthdate: null,
    numberPhone: null,
    gender: null,
    clientGroups: [],
    attendingDoctor: null,
    sms: null,
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
    numberPhoneStartWithSeven(num) {
      return +String(num).split("")[0] !== 7;
    },
    saveAndReturn() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
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
  margin-right: 30px;
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

.c-filter {
  position:relative;
}
.c-filter__toggle {
    width: 300px;
    box-shadow:0 1px 2px 0 rgba(0,0,0,.05);
    border:0;
    padding:.5rem 1rem;
    border-radius:4px;
}
    
.c-filter__toggle:after {
      content:'';
      width:10px;
      height:10px;
      display:inline-block;
      margin-left:10px;
      position:relative;
      background-image: red;
      background-repeat:no-repeat;
      background-position:center;
      float: right;
      padding-top: 4px;
}
    
.c-filter__toggle:active:after {
  transform:rotate(180deg);
}
.c-filter__ul {
    padding:0;
    border-radius:4px;
    box-shadow:0 0 0 1px rgba(0,0,0,.05);
    position:absolute;
    display:none;
    margin:0;
}
    
.c-filter__ul:active {
      display:block;
    }
.c-filter__item {
    list-style:none;
    display:block;
}
   
input .multi {
      display:none;
}

input .multi:checked ~ label:before {
        background-color:green;
        border-color:lighten(green,10%);
        background-image: red;
        background-size:65%;
        background-position:center center;
        background-repeat:no-repeat;
      }

label .multi{
      display:block;
      padding:5px;
      cursor:pointer;
      padding:8px 8px 8px 35px;
      position:relative;
      width: 260px;
}
      
label .multi:before {
      content:'';
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      left:10px;
      width:15px;
      height:15px;
        border-radius:4px;
      border:1px solid rgb(230,230,230);
    }
      
label .multi:hover {
        background-color:#f4f5f7;
}
        
label .multi:hover:before {
          border:1px solid rgb(200,200,200);
        }
</style>
