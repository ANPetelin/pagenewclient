<template>
  <div>
    <h1>Страница регистрации</h1>
    <div class="datasection">
      <h2>{{dataBasic}}</h2>
      <router-link to="/basicdata" class="button">заполнить/изменить</router-link>
      <div :class="'field'+' '+ statusBasic"></div>
    </div>
    <div class="datasection">
      <h2>{{dataAddress}}</h2>
      <router-link to="/address" class="button">заполнить/изменить</router-link>
      <div :class="'field'+' '+ statusAddress"></div>
    </div>
    <div class="datasection">
      <h2>{{dataPassport}}</h2>
      <router-link to="/passport" class="button">заполнить/изменить</router-link>
      <div :class="'field'+' '+ statusPassport"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dataBasic: "Заполните основные данные",
      dataAddress: "Заполните адрес проживания",
      dataPassport: "Заполните паспортные данные",
      filled: "filled",
      blank: "blank",
      statusBasic: "blank",
      statusAddress: "blank",
      statusPassport: "filled"
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
h2 {
  text-align: center;
  background: white;
}
.datasection {
  padding: 10px;
  height: 150px;
  background: white;
  border-radius: 10px;
  margin-bottom: 30px;
}
.button {
  margin-right: 30px;
  font-family: Montserrat;
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

.field {
  margin-left: 30px;
  width: 30px;
  height: 30px;
  background: white;
  border: 2px solid rgb(188, 156, 255);
  border-radius: 4px;
}

.blank {
  position: absolute;
}

.blank::before {
  content: "";
  position: relative;
  display: block;
  width: 22px;
  height: 2px;
  left: 4px;
  top: 15px;
  background-color: rgb(228, 60, 31);
  transform: rotate(45deg);
}

.blank::after {
  content: "";
  position: relative;
  display: block;
  width: 22px;
  height: 2px;
  left: 4px;
  top: 13px;
  background-color: rgb(228, 60, 31);
  transform: rotate(-45deg);
}

.filled {
  position: absolute;
}

.filled::before {
  content: "";
  position: relative;
  display: block;
  width: 10px;
  height: 2px;
  left: 3px;
  top: 18px;
  background-color: rgb(107, 173, 101);
  transform: rotate(45deg);
}

.filled::after {
  content: "";
  position: relative;
  display: block;
  width: 22px;
  height: 2px;
  left: 7px;
  top: 11.7px;
  background-color: rgb(107, 173, 101);
  transform: rotate(-45deg);
}
</style>
