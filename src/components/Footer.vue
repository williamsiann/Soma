<template>
    <footer>
      <div class="footer-content">
        <div class="footer-left">
          <h3>SOMA</h3>
        </div>
        <div class="footer-center">
          <h3>Proudly powered by IAN MILTON WILLIAMS</h3>
        </div>
        <div class="footer-right">
          <img class="icon" src="@/assets/iconos/figma.png" />
          <img class="icon" src="@/assets/iconos/linkedin.png"  />
          <img class="icon" src="@/assets/iconos/github.png" />
          <img class="icon" src="@/assets/iconos/spotify.png" />
        </div>
      </div>
    </footer>
  </template>
  
  <script>
    export default {
        name: 'FooterComponent'
    }
  </script>
  
<style>
  footer {
    background-color: #e0e0e0; /* Color de fondo */
    padding: 10px 0; /* Espaciado dentro del footer */
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto; /* Centrar el contenido */
  }

  .footer-left,
  .footer-center,
  .footer-right {
    flex: 1;
    text-align: center; /* Centrar el texto */
  }

  .footer-left {
    text-align: left;
  }

  .footer-right {
    text-align: right;
  }

  .footer-center {
    color: #333; /* Color del texto */
  }

  .footer-left,
  .footer-right {
    color: #666; /* Color del texto */
  }

  .footer-right .icon {
    width: 15px; /* Ancho de las imágenes */
    height: 15px; /* Alto de las imágenes */
    margin-left: 20px; /* Espacio entre las imágenes */
    opacity: 0.8; /* Ajusta el valor según la transparencia deseada */
  }

</style>
  