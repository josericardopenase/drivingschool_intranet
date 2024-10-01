# Usa una imagen ligera basada en Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias de producción
RUN npm ci --only=production

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Establece la variable de entorno para producción
ENV NODE_ENV=production
ENV NEXTAUTH_URL=http://0.0.0.0:3000

# Expone el puerto que usará la aplicación
EXPOSE 3000

# Usa el comando para iniciar la aplicación en modo producción
CMD ["npm", "start"]
