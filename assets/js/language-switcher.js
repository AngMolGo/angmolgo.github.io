// Función para obtener los parámetros de la URL
function getParameterByName(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Obtener el parámetro 'language' de la URL
var language = getParameterByName('language') || 'es'; // Por defecto, español

// Función para cambiar el idioma en el contenido
function cambiarIdioma(language) {
    // Mostrar u ocultar los bloques según el idioma
    if (language === 'es') {
        // Mostrar posts en inglés
        document.querySelectorAll('.lang-es').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.lang-en').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-fr').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-jp').forEach(function(el) {
            el.style.display = 'none';
        });
    } else if (language === 'en') {
        // Mostrar posts en español (idioma por defecto)
        document.querySelectorAll('.lang-es').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-en').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.lang-fr').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-jp').forEach(function(el) {
            el.style.display = 'none';
        });
    } else if (language === 'fr') {
        // Mostrar posts en español (idioma por defecto)
        document.querySelectorAll('.lang-es').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-en').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-fr').forEach(function(el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.lang-jp').forEach(function(el) {
            el.style.display = 'none';
        });
    } else if (language === 'jp') {
        // Mostrar posts en español (idioma por defecto)
        document.querySelectorAll('.lang-es').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-en').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-fr').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-jp').forEach(function(el) {
            el.style.display = 'block';
        });
    } else {
        // Mostrar posts en español (idioma por defecto)
        document.querySelectorAll('.lang-es').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-en').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-fr').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.lang-jp').forEach(function(el) {
            el.style.display = 'none';
        });
    }
}

// Cambiar el idioma en el contenido
cambiarIdioma(language);
