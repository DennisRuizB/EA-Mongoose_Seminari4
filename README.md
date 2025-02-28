# EA Node.js + TypeScript + Mongoose

## Fuentes de los Ejercicios

A continuación, se presentan las fuentes utilizadas para los ejercicios y el aprendizaje de Mongoose y MongoDB:

1. **W3Schools - MongoDB Aggregations**  
   [Documentación sobre Agregaciones en MongoDB](https://www.w3schools.com/mongodb/mongodb_aggregations_intro.php)

2. **Mongoose Documentation - Populate**  
   [Documentación oficial de Mongoose sobre el método `populate`](https://mongoosejs.com/docs/populate.html)

3. **YouTube - Introducción a MongoDB y Mongoose**  
   [Video 1: Introducción a MongoDB y Mongoose](https://www.youtube.com/watch?v=-bt_y4Loofg)  
   [Video 2: Guía de uso de Mongoose y sus métodos](https://www.youtube.com/watch?v=gfP3aqV38q4)

4. **Repositorio de GitHub - EA-Mongoose**  
   [Repositorio proporcionado](https://github.com/rocmeseguer/EA-Mongoose)

5. **ChatGPT - Asistencia en consultas y ejemplos**
















## Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [MongoDB](https://www.mongodb.com/) (puede ser local o en la nube a través de MongoDB Atlas)
- [npm](https://www.npmjs.com/) 

Instalar TypeScript
```
npm install -g typescript
```

## Clonar el proyecto

```
git clone https://github.com/rocmeseguer/EA-Mongoose
cd EA-Mongoose
```

## Dependencias del proyecto

Instalar Mongoose y otras dependencias
```
npm install
```

## Estructura del proyecto

```
├── src
├── dist
├── package.json       # Configuración de las dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── node_modules
├── .gitignore
├── LICENSE
└── README.md
```

## Complilación y ejecución

Transpilar de TS a JS
```
tsc 
```

Ejecutar JS
```
node dist/mongoose.js
```