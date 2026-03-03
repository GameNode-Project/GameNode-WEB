# GameNode 

<div align="center">

<img src="./public/logo-gamenode.png" alt="GameNode Logo" width="250"/>

**GameNode Web para la gestión integral de un catálogo y foro de videojuegos, consolas y compañias.**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[Despliegue en Producción](#produccion) •
[Stack Tecnológico](#stack) •
[Instalación y Entorno Local](#instalacion) •
[Arquitectura del Proyecto](#arquitectura) •
[Integración con la API](#integracion) •
[Contribuciones y Flujo de Trabajo](#contribuciones)

</div>

---

## 📋 Descripción

GameNode Web es el cliente frontend oficial de la plataforma GameNode. Construido enteramente en **Vanilla JavaScript (ES6+)**

El proyecto implementa una **Arquitectura Modular (DRY)**, delegación de eventos global y un sistema de estado reactivo basado en **Custom Events**, lo que permite una interfaz dinámica y fluida para gestionar el CRUD completo de Videojuegos, Consolas y Compañías.

## <a name="produccion"></a>🚀 Despliegue en Producción (Live Demo)

La aplicación web está desplegada de forma continua y automatizada en **Vercel**, consumiendo directamente la API en Producción.

* **URL del Frontend:** [`https://gamenode-web.vercel.app/`](https://gamenode-web.vercel.app/)*
* **API Consumida (Railway):** [`https://gamenode-api.up.railway.app`](https://gamenode-api.up.railway.app)

## <a name="stack"></a>🛠️ Stack Tecnológico

* **Core:** HTML5, CSS3, Vanilla JavaScript.
* **Entorno de Desarrollo y Build:** Vite.
* **Estilos:** Tailwind CSS v4 .
* **UI/UX y Alertas:** SweetAlert2.
* **Despliegue (CI/CD):** Vercel.

## <a name="instalacion"></a>⚙️ Instalación y Entorno Local

Para levantar este proyecto frontend en tu entorno local, sigue estos pasos:

### 1. Prerrequisitos

Asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (v20 o superior).
* Git.

### 2. Clonar el repositorio

```bash
git clone [https://github.com/TU-USUARIO/gamenode-web.git](https://github.com/TU-USUARIO/gamenode-web.git)
cd gamenode-web
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar el Entorno (Variables de Entorno)

Vite requiere un archivo .env en la raíz del proyecto para leer variables mediante import.meta.env. Duplica el archivo de ejemplo:

```bash
cp .env.example .env
```

Edita el archivo .env y asegúrate de apuntar a la API correcta (Local o Producción):

- Para desarrollo local con la API en tu máquina:
**VITE_API_URL=http://localhost:8080**

- Para conectarse a la API de producción:
**VITE_API_URL=[https://gamenode-api.up.railway.app](https://gamenode-api.up.railway.app)**

### 5. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en **http://localhost:5173** 

## <a name="arquitectura"></a>🏗️ Arquitectura del Proyecto

El código fuente sigue un patrón estructural estricto para garantizar la escalabilidad y evitar el acoplamiento:

```plaintext
src/
 ├── api/                   # Lógica de peticiones HTTP (GET) segregada por entidad
 │    ├── companies.js
 │    ├── consoles.js
 │    └── videogames.js
 ├── assets/                # Recursos estáticos (Imágenes, iconos)
 ├── components/            # Componentes de UI reutilizables
 │    ├── card.js           # Generador de tarjetas de producto
 │    ├── header.js         # Navegación 
 │    └── modal.js          # Motor Genérico de Formularios (POST/PUT)
 ├── utils/                 # Helpers y configuración centralizada
 │    └── alerts.js         # Patrón Facade para SweetAlert2 (Diseño Neón)
 ├── views/                 # Controladores de vista y manipulación del DOM
 │    ├── detail.js         # Vista de Detalles Dinámica 
 │    └── home.js           # Layout Principal 
 ├── main.js                # Entry point de Vite y orquestador principal
 └── style.css              # Estilos base y directivas de Tailwind
 ```

### 🧠 Patrones Destacados Implementados

- Delegación de Eventos: Los eventos **Click** de botones repetitivos (Editar, Borrar, Ver) se gestionan desde el contenedor principal, optimizando la memoria del navegador.

- Uso de document.dispatchEvent(new CustomEvent()) para desacoplar componentes. Al crear un elemento, el modal lanza el evento reload-data, y la vista se actualiza sin recargar la página.

- Lógica unificada de POST/PUT/DELETE que pluraliza URLs dinámicamente según el atributo data-type.

## <a name="integracion"></a>📡 Integración con la API

El Frontend consume la API REST de GameNode mediante la API Fetch nativa de JS. Soporta de forma integral:

* GET: Listados generales y obtención por ID para la vista de detalle.

* POST / PUT: Sincronización automática de formularios en el modal según el modo (Creación vs Edición).

* DELETE: Advertencia visual para borrados en cascada.

- Loading States: Spinners asíncronos para evitar bloqueos de la interfaz durante el intercambio de red.

## <a name="contribuciones"></a> ✨ Contribuciones y Flujo de Trabajo

- La rama main contiene el código de despliegue en Vercel.

- La rama dev es la rama de desarrollo principal.


## <a name="licecia"></a>📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---
*Desarrollado para el proyecto de 2ªEV Desarrollo de Aplicaciones Web (Frontend).*


