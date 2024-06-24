FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install
RUN npm install -g ts-node nodemon

RUN mkdir -p prisma

COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npx prisma generate

COPY . .

EXPOSE 4000
EXPOSE 9229

CMD ["npm", "run", "watch"]