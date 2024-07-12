<template >
  <div class="card"  @click.self="$emit('close')" >
    <h1  class="aviso-title"  @click.self="$emit('close')">AVISO</h1>
    <h3 class="aviso-text"  @click.self="$emit('close')">
      Aca en mi pagina encontrarás párrafos breves y ligeros, ideales para aquellos que disfrutan de la lectura sin compromisos profundos. Este espacio está diseñado para todos los que desean explorar, cuestionarse y encontrar inspiración en pequeñas dosis, no es una lectura pesada. Como dijo Albert Einstein, "La mente que se abre a una nueva idea jamás volverá a su tamaño original".
    </h3>
  </div>
</template>

<script setup>
// En <script setup> no necesitas importar Vue ni exportar componentes
</script>
  

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  
  background-color: #f2f3ee;
  border-radius: 12px;
  text-align: center;
  width: 686px;
  height: 386px;
  margin: auto; /* Centrar horizontalmente */
  margin-top: 90px; /* Ajustar la distancia desde arriba */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
  cursor: pointer;
}

.aviso-title {
  font-size: 24px;
  color: #000000; /* Cambia el color del título según tu preferencia */
  margin-top: 20px; /* Separación desde arriba del título */
}

.aviso-text {
  font-size: 16px;
  color: #666; /* Cambia el color del texto según tu preferencia */
  line-height: 1.5;
  margin-bottom: 40px; /* Separación desde abajo del texto */
  margin-top: 40px; /* Separación desde abajo del texto */
  margin: 20px;
}
</style>
