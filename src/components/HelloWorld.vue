<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div
        class="alert alert-warning"
        role="alert"
        v-show="funcionarios.length === 0"
      >Não há funcionários :(</div>

      <div class="form-group">
        <p>
          <input
            type="text"
            placeholder="Digite o id do funcionário"
            name="id"
            class="form-control"
            v-model="id"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Digite o nome do funcionário"
            name="nome"
            class="form-control"
            v-model="name"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Digite o Sobrenome do funcionário"
            name="sobrenome"
            class="form-control"
            v-model="lastname"
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Digite a idade do funcionário"
            name="idade"
            class="form-control"
            v-model="age"
          />
        </p>
        <button class="btn btn-success" v-on:click="add()">Inserir</button>
      </div>

      <table class="table table-striped" v-show="funcionarios.length > 0">
        <thead>
          <tr>
            <td>#</td>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>Idade</td>
            <td></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(funcionario, index) in funcionarios" v-bind:key="funcionario.id">
            <td>{{ funcionario.id }}</td>
            <td>{{ funcionario.name }}</td>
            <td>{{ funcionario.lastname }}</td>
            <td>{{ funcionario.age }}</td>
            <td>
              <button class="btn btn-danger" v-on:click="remove(index)">Remover</button>
            </td>
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
        { id: 0, name: "Carlos", lastname: "Vinicius", age: "22" },
        { id: 1, name: "Felipe", lastname: "Vinicius", age: "25" },
        { id: 2, name: "Alan", lastname: "Vinicius", age: "30" },
        { id: 3, name: "João", lastname: "Vinicius", age: "11" },
        { id: 4, name: "Daniel", lastname: "Vinicius", age: "59" }
      ],
      id: "",
      name: "",
      lastname: "",
      age: ""
    };
  },
  //aqui ficam todas as funções que seram definidas na página do vuejs
  methods: {
    remove(id) {
      //deletando posição quando encontra o valor
      this.funcionarios.splice(id, 1);
    },

    add() {
      //adicionando novo elemento para o array
      this.funcionarios.push({
        id: this.id,
        name: this.name,
        lastname: this.lastname,
        age: this.age
      });

      this.id = "";
      this.name = "";
      this.lastname = "";
      this.age = "";
    }
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
