<template>
  <div>
    <div v-if="loading">
      Cargando ubicación y hora...
    </div>
    <div v-else>
      <div class="info-container">
        <p>{{ formattedDateTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref, onMounted } from 'vue';
// import { format } from 'date-fns';

// const dateTime = ref(new Date());
// const loading = ref(true);

// const updateDateTime = () => {
//   dateTime.value = new Date();
//   formattedDateTime.value = format(dateTime.value, 'PPpp');
// };

// const formattedDateTime = ref(format(dateTime.value, 'PPpp'));

// onMounted(() => {
//   setInterval(updateDateTime, 1000); // Actualiza la hora cada segundo
//   loading.value = false; // Simular carga completada para este ejemplo
// });
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap');

p {
  font-family: 'Source Serif Pro', serif;
  color: #141414;
  font-size: 12px;
}

.info-container {
  display: flex;
  flex-direction: row; /* Asegura que los elementos estén en fila */
}

.info-container p {
  margin-right: 10px; /* Espacio entre los elementos de texto */
}
</style>
