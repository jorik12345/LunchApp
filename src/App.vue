<template>
  <div id="app">
    <img src="assets/logo.png">
    <h1>{{ msg }}</h1>

    <div class="items">
      <ul>
        <li v-for="item in lunch">
          {{item.name}} - {{item.title}} op {{item.type}} <button v-on:click="removeItem(item)">x</button>
        </li>
      </ul>
    </div>

    <div class="add-item">
      <b-form v-on:submit="addItem">

        <b-form-group id=""
                    label="Naam:">
          <b-form-select name="name" v-model="lunch.name">
            <option v-for="name in employees">
              {{name}}
            </option>
          </b-form-select>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                    label="Gerecht:">
          <b-form-input id="exampleInput1"
                        type="text"
                        v-model="lunch.title"
                        required
                        placeholder="Voeg een gerecht toe">
          </b-form-input>
        </b-form-group>

        <b-form-group id=""
                    label="Broodsoort:">
          <b-form-select v-model="lunch.type">
            <option v-for="type in breadtype">
              {{type}}
            </option>
          </b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Toevoegen</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Lunch App',
      lunch: [],
      employees: [],
      breadtype: []
    }
  },

  methods: {
    addItem: function(e) {

      e.preventDefault();
      this.lunch.push({
        name: this.lunch.name,
        title: this.lunch.title,
        type: this.lunch.type
      })
      this.lunch.title = ''

      this.saveLunchItems()
    },

    removeItem: function(item){
      this.lunch.splice(this.lunch.indexOf(item),1);
      this.saveLunchItems()
    },

    saveLunchItems: function(){
      this.$http.post('handler.php', this.lunch).then(response => {
      }, response => {
      });
    },

    getWeekNumber: function(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        return weekNo;
    }
  },

  created: function() {
    this.$http.get('assets/employees.json')
    .then(function(response) {
      this.employees = response.data
    }) 

    this.$http.get('assets/breadtypes.json')
    .then(function(response) {
      this.breadtype = response.data
    }) 

    this.$http.get('weeks/'+this.getWeekNumber(new Date())+'.json')
    .then(function(response) {
      this.lunch = response.data
    }) 
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
  padding: 24px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  color: red;
  background: none;
  border:none;
}
</style>
