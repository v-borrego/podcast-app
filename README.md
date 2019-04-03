# Podcast App

El repositorio contiene dos carpetas, "server" y "frontend".

La carpeta "frontend" contiene la aplicación cliente en Vue.js.

La carpeta "server" contiene un pequeño servidor express que gestiona las peticiones al rss de cada podcast para realizar la conversión a JSON y servirla a la aplicación de frontend.

## Ejecutar la aplicación

### 1. Instalar las librerías
Para instalar las librerías necesarias ejecutaremos el comando "npm install" en cada una de las carpetas (server y frontend).

```bash
npm install
```
### 2. Lanzar las aplicaciones
Para arrancar la aplicación de frontend junto con el servidor, se debe ejecutar el siguiente comando dentro de la carpeta de frontend:

```bash
npm start
```

El script de start de la aplicación de frontend está preparado para levantar el servidor express que servirá las peticiones de RSS del detalle de los podcast.
