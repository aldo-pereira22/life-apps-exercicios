<template>
  <div class="login">
    <form class="card">
      <div class="card-header">
        <h2>Login</h2>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">E-mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Digite seu E-mail"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Senha</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="senha"
        />
      </div>
      <div class="card-footer">
        <button type="submit" class="btn btn-primary mt-2">Acessar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  width: 600px;
  height: 800px;
  margin: auto;
}
.card-header {
  background-color: blue;
  text-align: center;
  opacity: 0.5;
  color: white;
}
</style>