# Build

FROM node:17 as build

COPY . /app

WORKDIR /app

RUN npm ci
RUN npm run build

# Run

FROM node:17-alpine as run

COPY package.json /app
COPY package-lock.json /app
COPY --from=build /app/.next/ /app/.next/

WORKDIR /app

RUN npm ci --production

CMD npm run start:production
