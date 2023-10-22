# Usar una imagen base de Node.js con la versión 18.18.0
FROM node:18-alpine3.17

# Establecer el directorio de trabajo en la imagen
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente de la aplicación
COPY . .

# Exponer el puerto en el que se ejecutará la aplicación (puerto 3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "npm", "start" ]
