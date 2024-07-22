<template>
    <header class="header">
      <nav>
        <div class="links-column">
          <router-link class="navA" to="/">Home</router-link>
          <router-link class="navA" to="/InterpretacionDelArte">Interpretacion Del Arte</router-link>  
          </div>
          </nav>
          <h2 class="titulo">Diario Para Mi Vos</h2>
    </header>
    <div class="containerLibro" >
      <div class="libro"/>git 
    </div>
</template>

<style scoped>
.header {
  display: flex; /* Usa flexbox para centrar */
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  flex-direction: column; /* Asegura que los elementos se apilen verticalmente */
  height: 200px; /* Ajusta la altura según sea necesario */
}

.navA{
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-right: 2rem;
    transform: translate(0%, -460%); 
  }
  
.links-column {
    display: flex;
    flex-direction: column;
    
  }

.titulo{
      font-size: 40px;
      transform: translate(-3%, 300%); 
}

.containerLibro{
      margin-bottom: 40rem;
}

.libro{
      background-color: #D9D9D9;
      width: 1145px;
      height: 775px;
      transform: translate(0%, 70%); 
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);  
}

</style>