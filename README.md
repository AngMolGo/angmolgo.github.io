# Academic Pages

![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)

Academic Pages is a Github Pages template for academic websites.

# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running Locally

When you are initially working your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

# Maintenance

Bug reports and feature requests to the template should be [submitted via GitHub](https://github.com/academicpages/academicpages.github.io/issues/new/choose). For questions concerning how to style the template, please feel free to start a [new discussion on GitHub](https://github.com/academicpages/academicpages.github.io/discussions).

This repository was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE.md). It is currently being maintained by [Robert Zupko](https://github.com/rjzupkoii) and additional maintainers would be welcomed.

## Bugfixes and enhancements

If you have bugfixes and enhancements that you would like to submit as a pull request, you will need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository as opposed to using it as a template. This will also allow you to [synchronize your copy](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) of template to your fork as well.

Unfortunately, one logistical issue with a template theme like Academic Pages that makes it a little tricky to get bug fixes and updates to the core theme. If you use this template and customize it, you will probably get merge conflicts if you attempt to synchronize. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch.












¡Exactamente! Usar archivos YAML (como los que Jekyll admite en la carpeta _data) es una forma mucho más organizada y flexible para manejar las traducciones en lugar de tener un diccionario dentro del JavaScript. De esta forma, puedes mantener las traducciones separadas del código y simplemente actualizar los archivos YAML cuando lo necesites.

¿Cómo hacerlo?
Voy a guiarte paso a paso para mover el diccionario de traducciones a un archivo YAML y cómo usarlo desde tu código.

Paso 1: Crear los archivos YAML para las traducciones
En tu proyecto Jekyll, dentro de la carpeta _data, crea un archivo YAML por cada idioma que quieras soportar. Ejemplo:

_data/es.yml
_data/en.yml
_data/fr.yml
_data/jp.yml
En cada uno de estos archivos, defines las traducciones. Aquí te dejo un ejemplo de cómo podrían verse los archivos YAML:

Archivo _data/es.yml:

yaml
Copiar código
title: "Portfolio"
welcome_message: "Bienvenido a mi sitio web"
footer: "Todos los derechos reservados"
Archivo _data/en.yml:

yaml
Copiar código
title: "Portfolio"
welcome_message: "Welcome to my website"
footer: "All rights reserved"
Archivo _data/fr.yml:

yaml
Copiar código
title: "Portfolio"
welcome_message: "Bienvenue sur mon site"
footer: "Tous droits réservés"
Archivo _data/jp.yml:

yaml
Copiar código
title: "ポートフォリオ"
welcome_message: "私のウェブサイトへようこそ"
footer: "全著作権所有"
Paso 2: Modificar el JavaScript para obtener las traducciones desde los archivos YAML
Jekyll no permite leer directamente desde los archivos YAML dentro de JavaScript. Por lo tanto, necesitas cargar las traducciones en las plantillas HTML a través de Liquid y luego utilizarlas en tu JavaScript. Aquí está el proceso:

Cargar las traducciones en la plantilla HTML usando Liquid. Actualiza el layout principal para que cargue las traducciones desde los archivos YAML según el parámetro language de la URL:

html
Copiar código
---
layout: default
---

{% assign language_code = language | default: 'es' %}
{% assign translations = site.data[language_code] %}

<!DOCTYPE html>
<html lang="{{ language_code }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title id="title">{{ translations.title }}</title>
</head>
<body>
  <header>
    <h1 id="welcome-message">{{ translations.welcome_message }}</h1>
  </header>

  <!-- Contenido principal -->

  <footer>
    <p id="footer-text">{{ translations.footer }}</p>
  </footer>

  <!-- Incluir el archivo JavaScript -->
  <script src="/assets/js/language-switcher.js"></script>
</body>
</html>
En este caso:

language_code obtiene el valor del parámetro language de la URL o usa español (es) por defecto.
translations contiene las traducciones específicas para el idioma seleccionado, cargadas desde los archivos YAML correspondientes.
Paso 3: Actualización del archivo JavaScript
Ya que las traducciones ahora se cargan dinámicamente en el HTML a través de Liquid, no necesitas un diccionario de traducciones en el JavaScript. Puedes eliminar esa parte del código y simplemente encargarte de mostrar u ocultar el contenido según el idioma.

Tu archivo language-switcher.js se verá así:

js
Copiar código
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

// Función para cambiar el idioma en los posts
function cambiarIdioma(language) {
    // Mostrar u ocultar los posts según el idioma
    document.querySelectorAll('.post').forEach(function(el) {
        if (el.classList.contains('lang-' + language)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

// Cambiar el idioma en los posts
cambiarIdioma(language);
Paso 4: Enlazar el archivo JavaScript
Asegúrate de que tu archivo JavaScript (language-switcher.js) esté enlazado correctamente al final del archivo default.html (o el layout que estés usando). Aquí te dejo un recordatorio de cómo debería verse:

html
Copiar código
<!-- Incluye el archivo JavaScript al final del body -->
<script src="/assets/js/language-switcher.js"></script>
Resumen de los pasos:
Crear archivos YAML en la carpeta _data con las traducciones para cada idioma (uno por idioma).
Actualizar las plantillas HTML para que carguen las traducciones usando Liquid.
Eliminar el diccionario de traducciones del archivo JavaScript, ya que ahora las traducciones provienen de los archivos YAML.
Enlazar el archivo JavaScript para que gestione el contenido que se muestra según el idioma.
Con esta estructura, tu proyecto será mucho más fácil de mantener, ya que todas las traducciones estarán en un solo lugar (los archivos YAML), y podrás cambiar o agregar nuevos idiomas sin tener que tocar el código JavaScript o HTML. ¡Espero que te resulte útil! 😊