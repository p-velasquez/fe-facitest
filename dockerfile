# Imagen base
FROM node:18-alpine

# Crear directorio
WORKDIR /usr/src/app

# Copiar package.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar Angular CLI
RUN npm install -g @angular/cli

# Copiar el codigo
COPY . .

# Exponer el puerto 4200
EXPOSE 4200

# Iniciar la aplicación
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]
