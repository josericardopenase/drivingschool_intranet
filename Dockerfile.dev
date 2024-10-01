
FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXTAUTH_URL=http://0.0.0.0:3000
CMD npx next dev -H 0.0.0.0 -p 3000
