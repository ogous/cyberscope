ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine as base
ARG DIR=/usr/src/app
WORKDIR ${DIR}

FROM base as build
COPY . .
RUN yarn install --immutable

FROM base as runtime
USER node
COPY --from=build ${DIR} .
CMD yarn dev