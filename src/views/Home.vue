<template>
    <header>
      <nav>
        <div class="links-column">
          <router-link class="navA" to="/DiarioParaMiVos">Diario Para Mi Vos</router-link>
          <router-link class="navA" to="/InterpretacionDelArte">Interpretacion Del Arte</router-link>  
        </div>
      </nav>
  
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="299" height="130" />
  
      <img alt="Vue logo" class="grecia" src="@/assets/greciaFondo.png" width="1143" height="600" />
  
    </header>
  
    <main>
      <router-view />
    </main>
  
    <section>
      <div class="sectionUno">
  
        <h3 style="margin-right: 437px;">CREATIVE CONCEPT</h3>
        <h3 style="margin-right: 438px;">2024</h3>
        <h3>IAN MILTON WILLIAMS</h3>
      
      </div>
  
      <div>
  
        <h1 class="primerTitulo" style="text-align: center;">Un Mundo<br>Posibilidades</h1>
        
        <h2 class="primerTexto"  style="text-align: center;"> Cuanto más cerca de 'finalizar la página estoy', es como que menos filosofía hay en mi cerebro, como que me estoy filtrando, se me está yendo la filosofía, no encuentro material, ¿pero necesito material? ¿Se te puede ir el pensamiento filosófico, se te pueden ir las preguntas? ¿Qué pasa si dejas de cuestionarte todo y solo sigues el rebaño? ¿Qué horrible no? Un mundo en el que no te puedas cuestionar las cosas, donde tengas que aceptar todas las normas, leyes y juicios. Un mundo lineal, porque eso hace la pregunta, enruta, difurca, abre. ¿Si abre? ¿Eso quiere decir que estaba cerrado? O sea que la pregunta abre y la respuesta cierra. ¿O no? Tal vez esa es la satisfacción mayor del humano, la que lo hace solo buscar respuestas y no preguntas, el hecho de que la respuesta cierra y al humano le gusta cerrar cosas y no abrir y seguir cuestionando, la pregunta lleva a más posibilidades de cierre o sea más trabajo, el humano no quiere eso, buscamos lo fácil, pero ¿qué es lo fácil?</h2>
        
        <div class="contentContainer">
  
          <img alt="Vue logo" class="marnol" src="@/assets/marmol.png" width="450" height="450" />
  
          <div class="textContainer">
            <h2>Al elegir SOMA como el nombre de mi página, me sumerjo en un mundo de significados que trascienden lo meramente literal. Al igual que en la novela distópica "Un mundo feliz" de Aldous Huxley, donde SOMA es una sustancia que anestesia emociones y promueve la conformidad, esta palabra me lleva a reflexionar sobre temas fundamentales de la existencia humana. Ver Más</h2>
          </div>
        </div>
  
      </div>
  
    </section>
  
    <section class="sectionDos">
      <div class="containerSectionDos">
        <h3 class="primerSub">Los Dos Proyectos</h3>
        <div class="subSectionUno">
          <h1 class="segundoTitulo">Diario Para Mi Voz</h1>
          <h2 class="segundoTexto">Este es mi libro abierto al mundo, un monólogo introspectivo donde comparto mis pensamientos y reflexiones. Aquí, no solo exploramos las profundidades de la filosofía, sino que también trazamos el camino que me llevó a cada interrogante. Acompáñame en este viaje solitario a través del laberinto del pensamiento. 
          <a class="" href="#">Ir A Ver</a></h2>
        </div>
  
        <div class="subSectionDos">
          <h1 class="tercerTitulo">Interpretando El Art</h1>
          <h2 class="tercerTexto">En este apartado voy a publicar un análisis, ya sea mi propia interpretación o si la hay, del propio artista. Lo voy a hacer para fomentar la creatividad, tanto la mia como espero la de ustedes. Antes de leer cada texto los invito a buscar en ustedes que es lo que quiso decir. 
          <a class="" href="#">Ir A Ver</a></h2>
  
        </div>
        
      </div>
    </section>
        
    <section class="sectionTres">
      <h1 class="tituloSectionTres">Proyectos</h1>
      <div class="tabla">
        <TableComponent/>
      </div>
      <div class="footer">
        <FooterComponent/>
      </div>
    </section>
  
  
  </template>
  

<script setup>
  import TableComponent from '../components/Tabla.vue';
  import FooterComponent from '../components/Footer.vue';
</script>

<style scoped>
  
  header {
    transform: translate(0%, 0%); /* Centrar horizontalmente y verticalmente */
  }
  
  .navA{
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
  
  .links-column {
    display: flex;
    flex-direction: column;
    transform: translate(0%, -100%); 
  }
  
  .logo {
    transform: translate(0%, 110%); 
  }
  
  .grecia{
    transform: translate(0%, 15%); 
  }
  
  .sectionUno {
    display: flex; /* Asegura que los elementos estén en fila */
    flex-direction: row; /* Opcionalmente, aunque row es el valor por defecto para flex-direction */
    transform: translate(0%, 490%); 
  }
  
  .primerTitulo{
    transform: translate(0%, 100%); 
  }
  
  .primerTexto{
    transform: translate(0%, 80%); 
    width: 1100px;
  }
  
  .contentContainer {
    display: flex;
    flex-direction: row; /* Asegura que los elementos estén en fila */
    align-items: center; /* Centra verticalmente los elementos */
    margin-bottom: 50px; /* Espacio entre el contenido y la siguiente sección */
    width: 1050px;
  }
  
  .marnol {
    transform: translate(0%, 110%); 
  }
  
  .textContainer {
    transform: translate(25%, 255%); 
  }
  
  .sectionDos {
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center;     /* Centra verticalmente */
    transform: translate(0%, 150%); 
  }
  
  .containerSectionDos {
    align-items: center;
    text-align: center;
  }
  
  .primerSub{
    font-size: 24px;
  }
  
  .subSectionUno{
    width: 900px;
    text-align: center;
  }
  
  /* .segundoTexto{
    
  } */
  
  .subSectionDos{
    margin-top: 5rem ;
    width: 900px;
    text-align: center;
  }
  
  /* .tercerTitulo{
  
  } */
  
  /* .tercerTexto{
  
  } */
  
  .sectionTres{
    text-align: center;
  transform: translate(0%, 220%); 
  }
  
  .tituloSectionTres{
    transform: translate(0%, -110%); 
  }
    
  .tabla{
    transform: translate(2%, -3%); 
  }
  
  .footer{
    transform: translate(0%, 380%); 
  }
  
  @media (min-width: 1024px) {
  
    header {
      display: flex;
      place-items: center;
      flex-direction: column; /* Asegurarse de que los elementos estén en columna */
      margin: 0;
    }
  
    .logo {
      justify-content: center;
      align-self: center; /* Centrar el logo en el eje flex vertical */
    }
  
  }
</style>
  