<template>
    <div class="main">
        <h2>Atualizar Artigo</h2>
        <h3>ID: {{id}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    }

}
</script>

<style>

</style>