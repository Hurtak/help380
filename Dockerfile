FROM node:17 as build

COPY package.json /app/
COPY package-lock.json /app/
COPY frontend/ /app/frontend/
COPY backend/ /app/backend/

WORKDIR /app

RUN npm ci
RUN npm run build

FROM node:17-alpine as serve

COPY package.json /app/
COPY package-lock.json /app/
COPY --from=build /app/build/ /app/build/

WORKDIR /app/

RUN npm ci --production

CMD npm run start:be:production
