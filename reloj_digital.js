// Obtener la fecha y hora actual

// Mostrar la hora en formato de 12 o 24 horas


// Actualizar la hora cada segundo utilizando setInterval

//NOTA: Podes usar la función setInterval para actualizar la hora cada segundo y mostrarla en formato de 12 o 24 horas


// script.js

// Obtener la referencia a los elementos de la hora y la fecha
const horaActual = document.getElementById('hora-actual');
const fechaActual = document.getElementById('fecha-actual');
const formato24hBtn = document.getElementById('formato-24h');
const formato12hBtn = document.getElementById('formato-12h');
let formato24h = true; // Variable para controlar el formato de la hora

// Función para actualizar la hora y la fecha
function actualizarHoraYFecha() {
    const ahora = new Date();

    // Obtener las partes de la fecha
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    // Actualizar la fecha
    fechaActual.textContent = `${diaSemana} ${dia} de ${mes}, ${año}`;

    // Obtener las partes de la hora
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    let periodo = '';

    // Convertir a formato 12 horas si es necesario
    if (!formato24h) {
        periodo = horas >= 12 ? 'PM' : 'AM';
        horas = horas % 12 || 12; // Convertir 0 a 12
    }

    // Actualizar la hora
    horaActual.textContent = `${horas.toString().padStart(2, '0')}:${minutos}:${segundos} ${periodo}`;
}

// Event listeners para los botones de formato
formato24hBtn.addEventListener('click', () => {
    formato24h = true;
    actualizarHoraYFecha();
});

formato12hBtn.addEventListener('click', () => {
    formato24h = false;
    actualizarHoraYFecha();
});

// Actualizar la hora cada segundo utilizando setInterval
setInterval(actualizarHoraYFecha, 1000);

// Inicializar la hora y la fecha al cargar la página
actualizarHoraYFecha();
