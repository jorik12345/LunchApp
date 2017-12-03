<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="items">
      <ul>
        <li v-for="item in lunch">
          {{item.name}} - {{item.title}} op {{item.type}}
        </li>
      </ul>
    </div>

    <div class="add-item">
      <form v-on:submit="addItem">
        <select name="name" v-model="lunch.name">
          <option v-for="name in employees">
            {{name}}
          </option>
        </select>
        <input type="text" name="Gerecht" placeholder="Gerecht" v-model="lunch.title">
        <select v-model="lunch.type">
          <option>Wit stokbrood</option>
          <option>Bruin stokbrood</option>
        </select>
        <input type="submit" value="Toevoegen">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'RB-Media Lunch App',
      lunch: [],
      employees: []
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
    }
  },

  created: function() {
    this.$http.get('/src/assets/employees.json')
    .then(function(response) {
      this.employees = response.data
    }) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
