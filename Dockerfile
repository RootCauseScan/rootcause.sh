# Usar Node.js 18 como imagen base
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm i

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer puerto 4173 (puerto por defecto de vite preview)
EXPOSE 4173

# Comando por defecto
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
