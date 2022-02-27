# Build

FROM node:17 as build

WORKDIR /src

COPY . .

RUN npm ci
RUN npm run build

# Run

FROM node:17-alpine as run

WORKDIR /src

COPY package.json .
COPY package-lock.json .
COPY --from=build /src/build .

RUN npm ci --production

CMD npm run start:production -- --port $PORT
