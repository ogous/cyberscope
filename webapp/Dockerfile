ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine as base
ARG DIR=/usr/src/app
WORKDIR ${DIR}

FROM base as build
COPY . .
RUN yarn install --immutable

FROM base as runtime
COPY --chown=node:node --from=build ${DIR} .
USER node
CMD yarn dev