FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD ["npx", "prisma", "migrate", "dev", "&&", "npm", "run", "start:prod"]