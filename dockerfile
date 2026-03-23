# Estágio 1: Build (Onde compilamos o código)
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Estágio 2: Produção (A imagem final, levinha)
FROM node:22-alpine

WORKDIR /app
# Copiamos apenas o package.json para instalar as dependências de produção
COPY package*.json ./
RUN npm ci --omit=dev

# Copiamos a pasta build gerada no estágio 1
COPY --from=builder /app/build ./build

# Expõe a porta padrão do adaptador node
EXPOSE 3000

# Variável de ambiente pro Node rodar otimizado
ENV NODE_ENV=production

# Comando para iniciar o servidor
CMD ["node", "build/index.js"]