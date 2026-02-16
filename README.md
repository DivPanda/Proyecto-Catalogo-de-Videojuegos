# 🎮 GameCatalog - Catálogo de Videojuegos Informativo

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Una aplicación web moderna y responsiva para explorar un catálogo de videojuegos. Este proyecto utiliza **React** para el frontend y **Google Sheets** como base de datos backend a través de Google Apps Script, demostrando cómo crear aplicaciones dinámicas sin un servidor tradicional.

## ✨ Características

- **Exploración Visual:** Tarjetas de juegos con diseño "Gamer/Neón".
- **Búsqueda en Tiempo Real:** Filtra juegos por título instantáneamente.
- **Filtros Avanzados:** Clasificación por Plataforma y Género.
- **Detalles a Fondo:** Modal interactivo con información detallada, sinopsis y metadatos.
- **Diseño Responsivo:** Metodología *Mobile First*, optimizada para celulares, tablets y escritorio.
- **Backend Serverless:** Consumo de datos JSON desde Google Sheets.

## 🛠️ Tecnologías

- **Frontend:** React.js (Vite), Hooks (useState, useEffect, useMemo).
- **Estilos:** CSS3 Puro (Variables, Flexbox, Grid, Media Queries).
- **Iconos:** Lucide React.
- **Datos:** Google Apps Script (API) + Google Sheets.

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   cd catalogo-de-videojuegos-informativo
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**
   Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`:
   ```env
   VITE_API_URL=TU_URL_DE_GOOGLE_APPS_SCRIPT
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Componentes reutilizables (GameCard, Filters, Modal...)
├── services/        # Lógica de conexión a la API
├── App.jsx          # Componente principal y gestión de estado
└── main.jsx         # Punto de entrada
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
Hecho con 💜 por DivPanda