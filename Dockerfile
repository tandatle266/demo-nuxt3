FROM node:18

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 3000

ARG ENV

ENV MY_ENV_VARIABLE=$ENV

ENV HOST=0.0.0.0
ENV PORT=3000

ENV STRIPE_SECRET_KEY=sk_live_123456
ENV STRIPE_PUBLIC_KEY=pk_live_456789

RUN npm run build
RUN npm prune

CMD [ "node", ".output/server/index.mjs" ]
