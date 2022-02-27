# Build

FROM node:17 as build

COPY . /src

WORKDIR /src

RUN npm ci
RUN npm run build

# Run

FROM node:17-alpine as run

COPY package.json /src
COPY package-lock.json /src
COPY --from=build /src/build/ /src/build/

WORKDIR /src

RUN npm ci --production

CMD npm run start:production
