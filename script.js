// Función para iniciar el reconocimiento de voz
function startVoiceRecognition() {
    const recognition = new window.webkitSpeechRecognition(); // Crear objeto de reconocimiento de voz
    recognition.lang = 'es-ES'; // Establecer el idioma
    recognition.continuous = false; // Detener después de una sola frase

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript; // Obtener la transcripción
        document.getElementById('voiceInput').value = transcript; // Mostrar la transcripción en el campo de entrada
    };

    // Manejar errores
    recognition.onerror = function(event) {
        console.error('Error en el reconocimiento de voz: ', event.error);
    };

    // Iniciar el reconocimiento de voz
    recognition.start();
}

// Asociar el evento click al botón de inicio
document.getElementById('startBtn').addEventListener('click', startVoiceRecognition);
