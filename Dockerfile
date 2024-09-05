
### Imagen de referencia
FROM ubuntu:jammy

### Instalación de paquetes principales
RUN apt-get update  -y && \
    apt-get upgrade -y && \
    apt-get install -y    \
    git                   \
    ruby-full             \
    build-essential       \
    nodejs

### Hacemos el cambio de directorio
WORKDIR /app

# Cambiar el comando por defecto para mantener el contenedor en ejecución
CMD ["/bin/bash"]

# Exponemos el puerto interno del contenedor al puerto del servidor para poder externarlo a la red local
EXPOSE 4000
