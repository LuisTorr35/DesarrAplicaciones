document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos
    const content = document.getElementById("content");
    const btnInicio = document.getElementById("btn-inicio");
    const btnInfo = document.getElementById("btn-info");
    const btnContacto = document.getElementById("btn-contacto");
    
    // Función para cargar contenido dinámico
    function loadContent(title, text) {
        content.innerHTML = `
        <h2>${title}</h2>
        <p>${text}</p>
        `;
    }
    
    // Eventos de clic para cada botón de navegación
    btnInicio.addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("Inicio", "Bienvenido a la página principal.");
    });
    
    btnInfo.addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("Información", "Esta es la sección de información.");
    });
    
    btnContacto.addEventListener("click", function(event) {
        event.preventDefault();
        loadContent("Contacto", "Aquí puedes encontrar la información de contacto.");
    });
});    
