<template>
  <div class="about">
    <h1>Projetos</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      project: "",
    };
    // const config = {
    //   headers: {
    //     "Content-type": "application/json",
    //     "X-Redmine-API-Key": "34c6b7186fb0e4bc78cf95d0d5d2ae009e21e32e",
    //   },
    // };
  },
  methods: {
    teste() {
      const config = {
        headers: {
          "Content-type": "application/json",
          "X-Redmine-API-Key": "34c6b7186fb0e4bc78cf95d0d5d2ae009e21e32e",
        },
      };
      return config;
    },
  },
  created() {
    axios
      .get("http://192.168.0.4/redmine/users.json", this.teste)
      .then((resp) => {
        // dados = resp.data
        // console.log(resp.data.issues[0])
        // console.log(resp.data)
        console.log(resp.data);
      });
  },
};
</script>
