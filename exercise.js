// Obtener referencias a los elementos del DOM
const botonRutinaChico = document.getElementById('Man');
const videoRonniePress = document.getElementById('ronniepress');


var allmanvideosContainer = document.getElementById('allmanvideos');

// Obtener todos los elementos de video dentro del contenedor
var videos = allmanvideosContainer.getElementsByTagName('video');

// Recorrer todos los videos usando un bucle for
for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    // Agregar lógica o manipulación específica para cada video aquí
    console.log(video.id); // Ejemplo: Imprimir el id de cada video en la consola
}

allmanvideosContainer.style.display('none');

// Ocultar el video de Ronnie al cargar la página
videoRonniePress.style.display = 'none';

// Agregar un controlador de eventos al botón de chico
botonRutinaChico.addEventListener('click', function() {
    videoRonniePress.style.display = 'block';
});

// Agregar un controlador de eventos al botón de chica
