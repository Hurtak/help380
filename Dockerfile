# Build

FROM node:17 as build

COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY frontend/ /app/frontend/
COPY backend/ /app/backend/

WORKDIR /app

RUN npm ci
RUN npm run build

# Run

FROM node:17-alpine as run

COPY package.json /app/
COPY package-lock.json /app/
COPY --from=build /app/build/ /app/build/

WORKDIR /app/

RUN npm ci --production

CMD npm run start:be:production
