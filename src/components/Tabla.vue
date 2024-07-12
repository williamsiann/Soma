<template>
    <div class="tabla">
      <div class="fila" v-for="item in items" :key="item.id">
        <h1 class="titulo">{{ item.title }}</h1>
        <h3 class="fecha">{{ item.date }}</h3>
        <div class="linea"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TableComponent',
    data() {
      return {
        items: [
          { id: 1, title: 'The Art of Connection', date: 'Jun 8, 2023' },
          { id: 2, title: 'The Art of Connection', date: 'Jun 8, 2023' },
          { id: 3, title: 'The Art of Connection', date: 'Jun 8, 2023' },
          { id: 4, title: 'The Art of Connection', date: 'Jun 8, 2023' },
          { id: 5, title: 'The Art of Connection', date: 'Jun 8, 2023' },
        ]
      }
    }
  }
  </script>
  
  <style>
  .tabla {
    width: 100%;
    margin-left: -5rem;
  }
  
  .fila {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .titulo {
    margin: 0;
    font-size: 50px;
  }
  
  .fecha {
    margin: 0;
    font-size: 14px;
    color: black;
    transform: translate( 1200%, 60%); 
  }
  
  .linea {
    width: 120%;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: -1px; /* Ajusta según sea necesario */
    left: 0;
  }
  </style>
  