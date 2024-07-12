<template>
  <header class="header">
    <AvisoComponent v-if="showAviso" @close="showAviso = false" />
    <div class="blur-background" v-if="showAviso" @click="closeAviso"></div>
        <nav>
        <div class="links-column">
        <router-link class="navA" to="/">Home</router-link>
        <router-link class="navA" to="/DiarioParaMiVos">Diario Para Mi Vos</router-link>  
        </div>
        </nav>
        <h2 class="titulo">Interpretacion Del Arte</h2>
  </header>
  <section class="sectionUno">
    <h3>René Magritte</h3>
    <h4>René Magritte fue un pintor belga surrealista, conocido por sus ingeniosas y provocadoras imágenes que desafían las percepciones precondicionadas de la realidad. Nació el 21 de noviembre de 1898 en Lessines, Bélgica, y falleció el 15 de agosto de 1967 en Bruselas, Bélgica. René Magritte dejó un legado duradero en el mundo del arte. Su enfoque filosófico y conceptual hacia la pintura ha influido en numerosos artistas contemporáneos. Su capacidad para jugar con la realidad y las percepciones ha hecho que sus obras sean objeto de estudio y admiración continua.</h4>
    
    <div class="container">

      <div class="div-one js-scroll slide-in-left">
        <img alt="Imagen 1" class="pipa" src="@/assets/Magrette/pipa.png" width="430.51" height="300" />
        <p>
          “Esto no es una pipa” es el título de esta icónica obra, aparentemente llana y de una simplicidad engañosa, pero que nos sumerge en una reflexión profunda e intrigante. ¿Qué es, en realidad, la “pipa”?
          René Magritte, en su sagaz percepción, afirmaba que no se trataba de una pipa porque no se le podía cargar con tabaco; así, carecía de su función inherente. Pero entonces, ¿dónde reside la verdadera esencia de la pipa? ¿Es la idea abstracta que albergamos en nuestra mente, la representación pictórica que observamos en el lienzo, o el objeto tangible en sí mismo?
          Ver mas
        </p>
      </div>


      <div class="div-two scroll-element js-scroll slide-in-right ">
        <img alt="Imagen 2" class="casa" src="@/assets/Magrette/casa.png" width="400" height="400" />
        <p>
          “Esto no es una pipa” es el título de esta icónica obra, aparentemente llana y de una simplicidad engañosa, pero que nos sumerge en una reflexión profunda e intrigante. ¿Qué es, en realidad, la “pipa”?
          René Magritte, en su sagaz percepción, afirmaba que no se trataba de una pipa porque no se le podía cargar con tabaco; así, carecía de su función inherente. Pero entonces, ¿dónde reside la verdadera esencia de la pipa? ¿Es la idea abstracta que albergamos en nuestra mente, la representación pictórica que observamos en el lienzo, o el objeto tangible en sí mismo?
          Ver mas
        </p>
      </div>

      <div class="div-three js-scroll slide-in-left">
        <img alt="Imagen 3" class="paragua" src="@/assets/Magrette/paragua.png" width="350" height="430" />
        <p>  
          “Esto no es una pipa” es el título de esta icónica obra, aparentemente llana y de una simplicidad engañosa, pero que nos sumerge en una reflexión profunda e intrigante. ¿Qué es, en realidad, la “pipa”?
          René Magritte, en su sagaz percepción, afirmaba que no se trataba de una pipa porque no se le podía cargar con tabaco; así, carecía de su función inherente. Pero entonces, ¿dónde reside la verdadera esencia de la pipa? ¿Es la idea abstracta que albergamos en nuestra mente, la representación pictórica que observamos en el lienzo, o el objeto tangible en sí mismo?
          Ver mas
        </p>
      </div>

    </div>

    <div class="footer">
      <FooterComponent/>
    </div>
  </section>

</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import FooterComponent from '../components/Footer.vue';
  import AvisoComponent from '../components/Aviso.vue';

  const showAviso = ref(true);

  const closeAviso = () => {
    showAviso.value = false;
  };

  onMounted(() => {
    console.log('Componente montado');
    
    const scrollElements = document.querySelectorAll('.js-scroll');

    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
    };

    const elementIsVisible = (element, dividend = 1) => {
      const elementTop = element.getBoundingClientRect().top;
      return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((element) => {
        if (elementIsVisible(element, 1.15)) {
          displayScrollElement(element);
        } else {
          hideScrollElement(element);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);

    // Trigger animation on load
    handleScrollAnimation();

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScrollAnimation);
    });
  });
</script>



<style scoped>
.blur-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo semi-transparente */
  backdrop-filter: blur(8px); /* Efecto de desenfoque */
  z-index: 10; /* Asegúrate de que el fondo borroso esté detrás del componente */
}

.header {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-direction: column; 
  height: 200px; 
}

.navA{
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-right: 2rem;
  transform: translate(0%, -400%); 
}

.links-column {
display: flex;
flex-direction: column;

}

.titulo{
  font-size: 40px;
  transform: translate(0%, 380%); 
}

.sectionUno {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  transform: translate(0%, 34%); 
}

.sectionUno h3{
  font-size: 16px;
  transform: translate(0%, -310%); 
}

.sectionUno h4 {
  margin: 10px 0; /* Add some spacing between elements */
  color: rgba(0, 0, 0, 0.838);
  width: 900px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Space between each div */
  padding: 2rem; /* Padding around the container */
  transform: translate(0%, 20%); 
  width: 1250px;
}

.container div {
  display: flex;
  align-items: flex-start;
  gap: 6rem; /* Space between image and text */
  margin-bottom: 10rem;
  align-items: center; /* Center vertically */
}

.div-one, .div-three {
  flex-direction: row;
  text-align: start;
}

.scroll-container {
  height: 100vh;
  min-height: 450px;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
}

.js-scroll {
  opacity: 0;
  transition: opacity 1000ms ease-in-out 150ms;
}

.js-scroll.scrolled {
  opacity: 1;
}

.slide-in-left.scrolled {
  animation: slide-in-left 1000ms ease-in-out 150ms;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-75px);
  }
  100% {
    transform: translateX(0);
  }
}



.div-two {
  flex-direction: row-reverse;
}


.container img {
  height: auto;
}

.container p {
  margin: 0;
  color: rgba(0, 0, 0, 0.838);
 
}

.footer{
    transform: translate(0%, 740%); 
    width: 1450px;
}
  


</style>


