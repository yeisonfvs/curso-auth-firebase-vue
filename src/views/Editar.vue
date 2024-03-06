<template>
  <div>
    <h1>Editar</h1>
    <form @submit.prevent="handleSutmit">
      <input type="text" placeholder="Ingrese URL" v-model="url" />
      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useDatabaseStore } from '../stores/database';
const databaseStore = useDatabaseStore();
const route = useRoute();
console.log(route.params);

const handleSutmit = () => {
  // console.log('editar');
  databaseStore.updateUrl(route.params.id, url.value);
};

const url = ref('');

onMounted(async () => {
  url.value = await databaseStore.leerUrl(route.params.id);
});
</script>
