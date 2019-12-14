<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <td>#</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>Idade</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="funcionario in funcionarios" v-bind:key="funcionario.id">
            <td>{{ funcionario.id }}</td>
            <td>{{ funcionario.name }}</td>
            <td>{{ funcionario.lastname }}</td>
            <td>{{ funcionario.idade }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  //tudo que ficar dentro do data é exportado para nosso componente
  data() {
    return {
      titulo: "Funcionários",
      funcionarios: [
        { id: 0, name: "Carlos", lastname: "Vinicius", idade: "22" },
        { id: 1, name: "Felipe", lastname: "Vinicius", idade: "25" },
        { id: 2, name: "Alan", lastname: "Vinicius", idade: "30" },
        { id: 3, name: "João", lastname: "Vinicius", idade: "11" },
        { id: 4, name: "Daniel", lastname: "Vinicius", idade: "59" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
