<script setup lang="ts">

const config = useRuntimeConfig();
// Buscando a lista de usuários através do Prisma
const { data: users } = useAsyncData(async () => await $fetch(`${config.public.API_BASE_URL}/api/user`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; x-api-version=1.0'
  }
}))
</script>

<template>
  <div style="margin: 4rem">
    <h1>Lista de Usuários</h1>
    <table class="user-table">
      <thead>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Senha</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.user-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
}

.user-table th, .user-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.user-table th {
  background-color: #f4f4f4;
}

.user-table tr:hover {
  background-color: #f1f1f1;
}
</style>
