<template>
  <div>
    <h1>Страница регистрации</h1>
    <div :class="'datasection ' + classBasic">
      <h2 v-if="!this.basic">Заполните основные данные</h2>
      <h2 v-if="!this.basic"> ... </h2>
      <h2 v-if="this.basic">Общие данные успешно заполнены</h2>
      <h2 v-if="this.basic">{{this.newClient.basic.surname}} {{this.newClient.basic.name}} {{this.newClient.basic.patronymic}}</h2>
      <router-link to="/basicdata" class="button">заполнить/изменить</router-link>
    </div>
    <div :class="'datasection ' + classAddress">
      <h2 v-if="!this.address">Заполните адрес проживания</h2>
      <h2 v-if="!this.address"> ... </h2>
      <h2 v-if="this.address">Адрес проживания успешно заполнен</h2>
      <h2 v-if="this.address">{{this.newClient.address.city}} {{this.newClient.address.street}} {{this.newClient.address.house}}</h2>
      <router-link to="/address" class="button">заполнить/изменить</router-link>
    </div>
    <div :class="'datasection ' + classPassport">
      <h2 v-if="!this.passport">Заполните паспортные данные</h2>
      <h2 v-if="!this.passport"> ... </h2>
      <h2 v-if="this.passport">Данные документа удостоверяющего личность успешно заполнены</h2>
      <h2 v-if="this.passport">{{this.newClient.passport.typeDocument}} <i><small>дата выдачи</small></i> {{this.newClient.passport.dateOfIssue}}</h2>
      <router-link to="/passport" class="button">заполнить/изменить</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ['newClient', 'basic', 'address', 'passport'],
  data() {
    return {
      filled: "filled",
      blank: "blank",
      statusBasic: "blank",
      statusAddress: "blank",
      statusPassport: "blank",
      classBasic: '',
      classAddress: '',
      classPassport: ''
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      if(this.basic) {
        this.classBasic = 'classFilled';
        this.statusBasic = this.filled;
      }
      if(this.address) {
        this.classAddress = 'classFilled';
        this.statusAddress = this.filled;
      }
      if(this.passport) {
        this.classPassport = 'classFilled';
        this.statusPassport = this.filled;
      }
    })
  }
};
</script>

<style scoped>
i {
  background-color: transparent;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
  background-color: transparent;
}
small {
  text-align: center;
  background-color: transparent;
}
.datasection {
  padding: 10px;
  height: 150px;
  background: rgb(243, 227, 227);
  border-radius: 10px;
  margin-bottom: 30px;
}
.classFilled {
  background: rgb(210, 247, 213);
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
